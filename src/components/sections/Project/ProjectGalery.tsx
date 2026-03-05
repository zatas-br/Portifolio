"use client";

import { Montserrat } from "next/font/google";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import ZaIcon from "@/public/images/Identidade_visual/ZA_Icon.png";
import { useEffect, useRef, useState, useCallback } from "react";
import { createPortal } from "react-dom";
import { useTranslations } from "next-intl";
import gsap from "gsap";
import Link from "next/link";
import { ProjectStatic } from "@/types";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700"] });

interface Props {
  project: ProjectStatic;
  category: string;
}

const ProjectGalerySection = ({ project, category }: Props) => {
  const t = useTranslations("ProjectDetailPage");
  const trackRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const images = project.gallery && project.gallery.length > 0
    ? project.gallery
    : [project.image];

  const goTo = (index: number) => {
    setCurrentIndex((index + images.length) % images.length);
  };

  const movePrev = useCallback(() => goTo(currentIndex - 1), [currentIndex, images.length]);
  const moveNext = useCallback(() => goTo(currentIndex + 1), [currentIndex, images.length]);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = useCallback(() => setLightboxOpen(false), []);

  useEffect(() => {
    if (!trackRef.current) return;
    const items = trackRef.current.querySelectorAll<HTMLDivElement>(".gallery-item");
    gsap.to(items, { xPercent: -currentIndex * 102, duration: 0.6, ease: "power2.out" });
    items.forEach((item) => gsap.to(item, { scale: 1, opacity: 1, duration: 0.4 }));
  }, [currentIndex]);

  useEffect(() => {
    if (!lightboxOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape")     closeLightbox();
      if (e.key === "ArrowLeft")  movePrev();
      if (e.key === "ArrowRight") moveNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxOpen, closeLightbox, movePrev, moveNext]);

  useEffect(() => {
    document.body.style.overflow = lightboxOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightboxOpen]);

  const moreProjectsLabel = t("moreProjects", { category });

  return (
    <>
      <section className="relative flex flex-col justify-between w-full h-[85vh] py-12 px-8 md:px-16 overflow-hidden bg-white">

        <div className="w-full h-[10vh] flex justify-between items-center py-8">
          <p className={`font-bold ${montserrat.className} text-3xl text-text-primary`}>
            {t("gallery")}
          </p>
          <div className="flex flex-row justify-center items-center gap-4">
            <button onClick={movePrev} className="active:scale-95 transition-transform z-30">
              <BsArrowLeft className="text-white bg-slate-800 rounded-full w-10 h-10 p-2 hover:bg-blue-900 transition-colors cursor-pointer" />
            </button>
            <span className={`${montserrat.className} text-sm text-gray-500`}>
              {currentIndex + 1} / {images.length}
            </span>
            <button onClick={moveNext} className="active:scale-95 transition-transform z-30">
              <BsArrowRight className="text-white bg-slate-800 rounded-full w-10 h-10 p-2 hover:bg-blue-900 transition-colors cursor-pointer" />
            </button>
          </div>
        </div>

        <div className="flex-1 flex items-center relative mt-4 overflow-hidden">
          <div ref={trackRef} className="flex w-full h-[55vh] items-center">
            {images.map((img, i) => (
              <div
                key={i}
                className="gallery-item flex-shrink-0 h-full px-2"
                style={{ width: "40%" }}
              >
                <div
                  onClick={() => openLightbox(i)}
                  className="relative w-full h-full cursor-zoom-in overflow-hidden rounded-3xl group"
                >
                  <img
                    src={img}
                    alt={`Imagem ${i + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/80 text-gray-800 text-xs font-medium px-3 py-1 rounded-full">
                      Ampliar
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full h-[10vh] flex justify-between items-center p-4">
          <div className="flex flex-row gap-4 flex-wrap">
            <Link
              href={`/services/${category}`}
              className="flex flex-row items-center bg-dark-blue rounded-full px-4 py-1 gap-1 w-max hover:bg-[#0D47A1] transition-colors"
            >
              <BsArrowLeft className="text-white-background w-8 h-8 p-2" />
              <p className={`font-bold ${montserrat.className} text-white-background text-sm`}>
                {moreProjectsLabel}
              </p>
            </Link>
            <Link
              href="/contact"
              className="flex flex-row items-center rounded-full px-4 py-1 gap-4 w-max shadow-za hover:bg-gray-50 transition-colors border border-gray-200"
            >
              <p className={`font-bold ${montserrat.className} text-dark-blue text-sm`}>
                Realizar seu projeto
              </p>
            </Link>
          </div>
          <img src={ZaIcon.src} alt="Logo da ZATAS" className="h-12" />
        </div>
      </section>

      {typeof document !== "undefined" && lightboxOpen && createPortal(
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            backgroundColor: "rgba(236,239,241,0.6)",
          }}
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-[#263238] bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all z-10"
          >
            <IoClose size={28} />
          </button>

          {images.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); movePrev(); }}
              className="absolute left-6 top-1/2 -translate-y-1/2 text-[#263238] bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all z-10"
            >
              <BsArrowLeft size={24} />
            </button>
          )}

          <div onClick={(e) => e.stopPropagation()}>
            <img
              src={images[currentIndex]}
              alt={`Imagem ${currentIndex + 1}`}
              className="max-w-[88vw] max-h-[88vh] object-contain rounded-2xl shadow-2xl"
            />
          </div>

          {images.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); moveNext(); }}
              className="absolute right-6 top-1/2 -translate-y-1/2 text-[#263238] bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all z-10"
            >
              <BsArrowRight size={24} />
            </button>
          )}
        </div>,
        document.body
      )}
    </>
  );
};

export default ProjectGalerySection;