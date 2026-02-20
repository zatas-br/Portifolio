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
      const cards = cardsContainerRef.current.querySelectorAll<HTMLElement>(".service-card");
      animateEnter(Array.from(cards), 0.3);
    }
  }, [animateFadeIn, animateEnter]);

  const categories = [
    { id: "marketing", path: "/services/marketing", image: "/images/services/marketing.svg" },
    { id: "design", path: "/services/design", image: "/images/services/design.svg" },
    { id: "desenvolvimento", path: "/services/desenvolvimento", image: "/images/services/desenvolvimento.svg" },
  ];

  return (
    <main style={{ backgroundColor: "#ECEFF1" }} className="min-h-screen w-full text-[#1E1E1E] relative overflow-hidden flex flex-col">
      <Header />

      <div className="relative z-10 flex-1 flex flex-col items-center pt-52 pb-24 px-6">
        <div className="w-full max-w-6xl">

          <header ref={headerRef} className="text-left mb-1 opacity-0 pl-1">
            <p className="text-[32px] text-[#0D47A1] font-lora italic leading-none m-0 -mb-3">
              {t("titleSmall")}
            </p>
            <h1 className="text-[44px] font-bold text-[#1E1E1E] uppercase leading-none tracking-tighter m-0">
              {t("titleLarge")}
            </h1>
          </header>

          <div
            ref={cardsContainerRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full relative"
          >
            {categories.map((cat, index) => (
              <div key={cat.id} className="service-card opacity-0 relative">
                {index === 2 && (
                  <div className="hidden md:block absolute -right-72 -bottom-80 w-[140%] h-[140%] -z-10 pointer-events-none">
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
                  isServicePage={true}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}