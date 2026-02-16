// ARQUIVO: src/components/portfolio/ServicesLandingPage.tsx

"use client";

import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Header from "@/src/components/layout/Header";
import { usePortfolioAnimations } from "@/src/hooks/usePortfolioAnimations";
import AnimatedCardServiceCategory from "@/src/components/ui/AnimatedCardServiceCategory";

export default function ServicesLandingPage() {
  const t = useTranslations("ServicesLandingPage");
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  
  const { animateFadeIn, animateEnter } = usePortfolioAnimations();

  useEffect(() => {
    if (headerRef.current) animateFadeIn(headerRef.current, 0.1);
    if (cardsContainerRef.current) {
      const cards = cardsContainerRef.current.querySelectorAll(".service-card");
      animateEnter(Array.from(cards), 0.3);
    }
  }, [animateFadeIn, animateEnter]);

  const categories = [
    { id: "marketing", path: "/services/marketing", image: "/images/Marketing_Service_Image.png" },
    { id: "design", path: "/services/design", image: "/images/Design_Service_Image.png" },
    { id: "desenvolvimento", path: "/services/desenvolvimento", image: "/images/Desenvolvimento_Service_Image.png" },
  ];

  return (
    // Fundo SEMPRE branco, ignorando o modo escuro do navegador
    <main className="min-h-screen w-full bg-white !bg-white text-[#1E1E1E] relative overflow-hidden flex flex-col">
      <Header />

      <div className="relative z-10 flex-1 flex flex-col items-center pt-36 pb-24 px-6">
        
        <div className="w-full max-w-6xl">
          {/* Títulos colados (sem margem extra) e alinhados com o card de Marketing */}
          <header ref={headerRef} className="text-left mb-4 opacity-0">
            <p className="text-2xl md:text-3xl text-[#0D47A1] italic font-medium font-serif leading-none m-0">
              {t("titleSmall")}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1E1E1E] uppercase leading-none tracking-tighter m-0">
              {t("titleLarge")}
            </h1>
          </header>

          <div 
            ref={cardsContainerRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full relative"
          >
            {categories.map((cat, index) => (
              <div key={cat.id} className="service-card opacity-0 relative">
                
                {/* Imagem de fundo ajustada: caminho correto e posição mais para direita/baixo */}
                {index === 2 && (
                  <div className="absolute -right-32 -bottom-48 w-[180%] h-[180%] -z-10 pointer-events-none opacity-50">
                    <Image 
                      src="/images/fundo-passaro.svg" 
                      alt="Fundo Pássaro"
                      fill
                      className="object-contain"
                    />
                  </div>
                )}

                <AnimatedCardServiceCategory 
                  id={cat.id}
                  path={cat.path}
                  image={cat.image}
                  label={t(`categories.${cat.id}`)} 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}