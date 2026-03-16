"use client";

import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import ZaIcon from "@/public/images/Identidade_visual/ZA_Icon.png";
import { useEffect, useRef, useState, useCallback } from "react";
import { createPortal } from "react-dom";
import { useTranslations } from "next-intl";
import gsap from "gsap";
import Link from "next/link";
import { ProjectStatic } from "@/types";

interface Props {
  project: ProjectStatic;
  category: string;
}

const ProjectGalerySection = ({ project, category }: Props) => {
  const t = useTranslations("ProjectDetailPage");
  const trackRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
      <section className="relative flex flex-col justify-between w-full py-8 md:py-12 px-5 md:px-16 overflow-hidden bg-white">

        {/* Header */}
        <div className="w-full flex justify-between items-center mb-6 md:mb-4">
          <p className="text-text-primary uppercase text-[28px] md:text-[44px] font-bold font-sans leading-[0.85] tracking-tight">
            {t("gallery")}
          </p>
          <div className="flex flex-row justify-center items-center gap-3">
            <button onClick={movePrev} className="active:scale-95 transition-transform z-30">
              <BsArrowLeft className="text-white bg-slate-800 rounded-full w-9 h-9 md:w-10 md:h-10 p-2 hover:bg-blue-900 transition-colors cursor-pointer" />
            </button>
            {/* Contador — oculto no mobile */}
            <span className="hidden md:inline font-sans text-sm text-gray-500">
              {currentIndex + 1} / {images.length}
            </span>
            <button onClick={moveNext} className="active:scale-95 transition-transform z-30">
              <BsArrowRight className="text-white bg-slate-800 rounded-full w-9 h-9 md:w-10 md:h-10 p-2 hover:bg-blue-900 transition-colors cursor-pointer" />
            </button>
          </div>
        </div>

        {/* Galeria */}
        <div className="flex items-center relative overflow-hidden mb-6 md:mb-4">
          <div ref={trackRef} className="flex w-full h-[38vw] md:h-[55vh] items-center">
            {images.map((img, i) => (
              <div
                key={i}
                className="gallery-item flex-shrink-0 h-full px-1 md:px-2"
                style={{ width: "42%" }}
              >
                <div
                  onClick={() => openLightbox(i)}
                  className="relative w-full h-full cursor-zoom-in overflow-hidden rounded-2xl md:rounded-3xl group"
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

        {/* Footer */}
        <div className="w-full flex justify-between items-center">
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
            <Link
              href={`/services/${category}`}
              className="inline-flex flex-row items-center bg-dark-blue rounded-full px-3 py-1.5 gap-1 w-max hover:bg-[#0D47A1] transition-colors"
            >
              <BsArrowLeft className="text-white-background w-6 h-6 p-1 flex-shrink-0" />
              <p className="font-bold font-sans text-white-background text-xs">
                {moreProjectsLabel}
              </p>
            </Link>
            <Link
              href="/contact"
              className="inline-flex flex-row items-center rounded-full px-4 py-1.5 gap-4 w-max shadow-za hover:bg-gray-50 transition-colors border border-gray-200"
            >
              <p className="font-bold font-sans text-dark-blue text-xs">
                Realizar seu projeto
              </p>
            </Link>
          </div>
          <img src={ZaIcon.src} alt="Logo da ZATAS" className="h-8 md:h-12" />
        </div>
      </section>

      {/* Lightbox */}
      {mounted && lightboxOpen && createPortal(
        <div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            backgroundColor: "rgba(236,239,241,0.85)",
          }}
          onClick={closeLightbox}
        >
          {/* Botão fechar */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 text-[#263238] bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all z-10"
          >
            <IoClose size={24} />
          </button>

          {/* Imagem */}
          <div
            className="flex items-center justify-center w-full px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[currentIndex]}
              alt={`Imagem ${currentIndex + 1}`}
              className="max-w-full max-h-[75vh] object-contain rounded-xl md:rounded-2xl shadow-2xl"
            />
          </div>

          {/* Navegação e contador ABAIXO da imagem */}
          {images.length > 1 && (
            <div
              className="flex items-center gap-6 mt-5"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={movePrev}
                className="text-[#263238] bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all"
              >
                <BsArrowLeft size={22} />
              </button>
              <span className="font-sans text-sm text-slate-600 font-medium">
                {currentIndex + 1} / {images.length}
              </span>
              <button
                onClick={moveNext}
                className="text-[#263238] bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all"
              >
                <BsArrowRight size={22} />
              </button>
            </div>
          )}
        </div>,
        document.body
      )}
    </>
  );
};

export default ProjectGalerySection;