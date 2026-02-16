"use client";

import Image from "next/image";
import { Montserrat } from "next/font/google";
import { useTranslations } from "next-intl";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const FooterHomeSection = () => {
  const t = useTranslations("Hero");

  return (
    <div className="w-full bg-blue-oil px-6 py-12 md:px-12">
      <div className="max-w-7xl mx-auto p-8 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
        
        <div className="relative w-64 h-16 md:w-96 md:h-28">
          <Image
            src="/images/tipografia-zatas.png"
            alt="ZATAS Tipografia"
            fill
            className="object-contain object-center md:object-left"
            priority
          />
        </div>

        <div className={`flex flex-col items-center md:items-end text-white ${montserrat.className}`}>
            <h2 className="text-lg md:text-3xl font-light uppercase tracking-[0.2em] leading-snug text-right">
              Design
            </h2>
            <h2 className="text-lg md:text-3xl font-light uppercase tracking-[0.2em] leading-snug text-right">
              Código
            </h2>
            <h2 className="text-lg md:text-3xl font-light uppercase tracking-[0.2em] leading-snug text-right">
              Impacto
            </h2>
        </div>

      </div>
    </div>
  );
};

export default FooterHomeSection;