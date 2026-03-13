"use client";

import { useTranslations } from "next-intl";
import AnimatedLogoCarrousel from "../../ui/AnimatedLogoCarrousel";

const ResultSection = () => {
  const t = useTranslations("Result");

  return (
    <section className="w-full bg-final-home-gradient py-20 flex flex-col items-center justify-center text-center">
      <div className="px-6 w-full">
        <div className="mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2d3748] uppercase tracking-tight">
            Muito além de serviços
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-[#2d3748] uppercase tracking-tight">
            Foco total em resultados mensuráveis
          </h3>
        </div>

        <div className="max-w-2xl mb-16 mx-auto">
          <p className="text-gray-500 text-sm md:text-base leading-relaxed">
            Nosso <span className="text-blue-600 italic">sucesso</span> é construído com estratégia, design e tecnologia, 
            combinando precisão, criatividade e foco total em resultados duradouros.
          </p>
        </div>
      </div>

      {/* Carrossel sem padding lateral — vai de borda a borda */}
      <div className="w-full overflow-hidden">
        <AnimatedLogoCarrousel />
      </div>
    </section>
  );
};

export default ResultSection;