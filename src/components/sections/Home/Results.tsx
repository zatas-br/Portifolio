"use client";

import { useTranslations } from "next-intl";
import AnimatedLogoCarrousel from "../../ui/AnimatedLogoCarrousel";

const ResultSection = () => {
  const t = useTranslations("Result");

  return (
    <section className="w-full bg-final-home-gradient py-20 flex flex-col items-center justify-center text-center">
      <div className="px-6 w-full">
        <div className="mb-6">
          <h2 className="text-[#2d3748] uppercase text-[28px] md:text-[44px] font-bold font-sans leading-[1.1] tracking-tight">
            {t("title1")}
          </h2>
          <h3 className="text-[#2d3748] uppercase text-[28px] md:text-[44px] font-bold font-sans leading-[1.1] tracking-tight">
            {t("title2")}
          </h3>
        </div>

        <div className="max-w-2xl mb-16 mx-auto">
          <p className="text-gray-500 text-[16px] font-light leading-relaxed">
            {t.rich("description", {
              italic: (chunks) => <span className="text-blue-600 italic">{chunks}</span>
            })}
          </p>
        </div>
      </div>

      <div className="w-full overflow-hidden">
        <AnimatedLogoCarrousel />
      </div>
    </section>
  );
};

export default ResultSection;
