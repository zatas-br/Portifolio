"use client";

import { Montserrat } from "next/font/google";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import ZaIcon from "@/public/images/Identidade_visual/ZA_Icon.png";
import FullScreenImage from "../../ui/ImageFullScreen";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700"] });

const ProjectGalerySection = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/images/imagem-pardal-01.png",
    "/images/imagem-pardal-01.png",
    "/images/imagem-pardal-01.png",
    "/images/imagem-pardal-01.png",
    "/images/imagem-pardal-01.png"
  ];

  const moveSlider = (direction: number) => {
    setCurrentIndex((prev) => {
      if (direction === 1) return prev >= images.length - 1 ? 0 : prev + 1;
      return prev <= 0 ? images.length - 1 : prev - 1;
    });
  };

  useEffect(() => {
    if (!sliderRef.current) return;

    // Animação LINEAR com GSAP
    gsap.to(".gallery-item", {
      xPercent: -currentIndex * 102,
      duration: 0.6,
      ease: "none",
      
      scale: (i) => (i === currentIndex ? 1 : 0.98),
      opacity: (i) => (i === currentIndex ? 1 : 0.8),
    });
  }, [currentIndex]);

  return (
    <section className="relative flex flex-col justify-between w-full h-[85vh] py-12 px-8 md:px-16 overflow-hidden bg-white">
      
      {/* Header */}
      <div className="w-full  h-[10vh] flex justify-between items-center py-8">
        <p className={`font-bold ${montserrat.className} text-3xl text-text-primary`}>GALERIA DO PROJETO</p>
        <div className="flex flex-row justify-center items-center gap-4">
            <button onClick={() => moveSlider(-1)} className="active:scale-95 transition-transform z-30">
                <BsArrowLeft className="text-white bg-slate-800 rounded-full w-10 h-10 p-2 hover:bg-blue-900 transition-colors cursor-pointer" />
            </button>
            <button onClick={() => moveSlider(1)} className="active:scale-95 transition-transform z-30">
                <BsArrowRight className="text-white bg-slate-800 rounded-full w-10 h-10 p-2 hover:bg-blue-900 transition-colors cursor-pointer" />
            </button>
        </div>
      </div>

      {/* Container do Carrossel */}
      <div className="flex-1 flex items-center relative mt-4">
        <div 
          ref={sliderRef}
          className="flex w-full h-[55vh] items-center"
          style={{ paddingLeft: "0%" }} 
        >
          {images.map((img, i) => (
            <div 
              key={i} 
              className="gallery-item flex-shrink-0 h-full px-2"
              style={{ width: "40%" }}
            >
              <FullScreenImage src={img} alt={`Slide ${i}`} />
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="w-full h-[10vh] flex justify-between items-center p-4">
        <div className="flex flex-row gap-4">
          {/**Seção dos Botoes */}
          <button className="flex flex-row items-center bg-dark-blue rounded-full px-4 py-1 gap-1 w-max">
            <BsArrowLeft className="text-white-background w-8 h-8 p-2" />
            <p className={`font-bold ${montserrat.className} text-white-background text-1 xl`}>Ver mais projetos de design</p>
          </button>

          <button onClick={() => {console.log("Teste")}} className="flex flex-row items-center rounded-full px-4 py-1 gap-4 w-max shadow-za">
            <p className={`font-bold ${montserrat.className} text-dark-blue text-1 xl`}>Realizar seu projeto</p>
          </button>
        </div>

        <div>
          {/**Seção da logo ZA da Zatas */}
          <img src={ZaIcon.src} alt="Logo da ZATAS" className="h-12" />
        </div>
      </div>

      

    </section>
  );
};

export default ProjectGalerySection;