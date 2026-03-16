"use client";

import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { useTranslations, useMessages } from "next-intl";
import { EXPERTISE_DATA } from "@/src/data/home";

const ExpertiseSection = () => {
  const t = useTranslations('PartnershipsPage.expertise');
  const messages = useMessages() as any;
  const tAreas = messages.PartnershipsPage.expertise.areas;
  const [activeTab, setActiveTab] = useState(0);
  const imagesTrackRef = useRef<HTMLDivElement>(null);
  const textsTrackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.to(imagesTrackRef.current, {
      xPercent: -activeTab * 100,
      duration: 0.8,
      ease: "power3.out"
    });

    gsap.to(textsTrackRef.current, {
      xPercent: -activeTab * 100,
      duration: 0.8,
      ease: "power3.out"
    });
  }, [activeTab]);

  return (
    <section className="flex flex-col justify-center items-center w-full bg-[#ECEFF1] px-5 md:px-10 lg:px-20 py-16 md:h-[100vh] md:py-0 gap-8">

      <div className="text-center flex flex-col gap-1 z-10">
        <h2 className="text-text-primary uppercase text-[28px] md:text-[44px] font-bold font-sans leading-[0.85] tracking-tight">
          {t('title')}
        </h2>
        <h3 className="text-text-secondary text-[20px] md:text-[44px] font-bold font-sans leading-[1.1] tracking-tight uppercase">
          {t('subtitle')}
        </h3>
      </div>

      <div className="relative w-full max-w-5xl rounded-2xl md:rounded-3xl shadow-2xl bg-slate-900 overflow-hidden aspect-[4/3] md:aspect-[16/9] lg:h-[60vh] lg:aspect-auto">

        <div className="absolute inset-0 overflow-hidden">
          <div ref={imagesTrackRef} className="flex w-full h-full">
            {EXPERTISE_DATA.map((item, i) => (
              <div key={i} className="relative w-full h-full flex-shrink-0">
                <Image
                  src={item.image}
                  alt={tAreas[item.id].title}
                  fill
                  className="object-cover opacity-80"
                  priority={i === 0}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-slate-900/60 backdrop-blur-md rounded-full p-1 flex shadow-lg border border-white/20 z-20">
          {EXPERTISE_DATA.map((item, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`px-3 md:px-6 py-1.5 md:py-2 rounded-full text-[10px] md:text-xs font-bold transition-all duration-300 font-sans ${
                activeTab === i
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-white hover:text-white/80 font-medium"
              }`}
            >
              {tAreas[item.id].label}
            </button>
          ))}
        </div>

        <div className="absolute bottom-4 right-4 bg-text-primary/60 backdrop-blur-xl rounded-xl md:rounded-2xl p-4 md:p-6 w-[55vw] md:w-[25vw] shadow-2xl z-20 flex flex-col">
          <div className="relative w-full overflow-hidden mb-3">
            <div ref={textsTrackRef} className="flex w-full">
              {EXPERTISE_DATA.map((item, i) => (
                <div key={i} className="flex flex-col gap-1 w-full flex-shrink-0 pr-2">
                  <h4 className="text-white font-bold uppercase tracking-widest text-[10px] md:text-sm font-sans">
                    {tAreas[item.id].title}
                  </h4>
                  <p className="text-slate-300 text-[16px] font-light leading-relaxed">
                    {tAreas[item.id].description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <button className="flex items-center justify-center gap-2 bg-white text-slate-900 rounded-full py-1.5 md:py-2 px-3 md:px-4 hover:bg-slate-100 transition-colors active:scale-95 w-max ml-auto mt-auto">
            <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-wide font-sans">{t('viewProjects')}</span>
            <BsArrowRight size={10} />
          </button>
        </div>

      </div>
    </section>
  );
};

export default ExpertiseSection;