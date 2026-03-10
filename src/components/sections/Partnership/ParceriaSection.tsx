"use client";

import { Lora, Montserrat } from "next/font/google";
import gain_icon from "@/public/images/Partnership/gain_icon.png";
import globe_icon from "@/public/images/Partnership/globe_icon.png";
import handshake_icon from "@/public/images/Partnership/handshake_icon.png";
import humans_icon from "@/public/images/Partnership/humans_icon.png";
import light_icon from "@/public/images/Partnership/light_icon.png";
import rocket_icon from "@/public/images/Partnership/rocket_icon.png";
import throphy_icon from "@/public/images/Partnership/throphy_icon.png";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "600", "700", "800"] });
const lora = Lora({ subsets: ["latin"], weight: ["400"], style: ["italic"] });

const typesOfPartnership = [
  { title: "SÓCIOS ESTRATÉGICOS", image: handshake_icon.src },
  { title: "INVESTIDORES", image: rocket_icon.src },
  { title: "PARCEIROS COMERCIAIS", image: globe_icon.src },
];

const content = [
  {
    title: "CRESCIMENTO ESTRATÉGICO",
    icon: gain_icon,
    describe: "Crescimento exige direção e planejamento. Desenvolvemos estratégias claras e personalizadas, alinhadas aos objetivos do seu negócio, para garantir evolução consistente e sustentável.",
  },
  {
    title: "EQUIPE MULTIDISCIPLINAR",
    icon: throphy_icon,
    describe: "Contamos com profissionais de diferentes áreas, unindo estratégia, design, tecnologia e marketing para desenvolver soluções completas e integradas.",
  },
  {
    title: "ATENDIMENTO HUMANIZADO",
    icon: humans_icon,
    describe: "Valorizamos relações próximas e transparentes. Nosso atendimento é baseado em escuta ativa, clareza na comunicação e acompanhamento constante.",
  },
  {
    title: "INOVAÇÃO E RESULTADOS",
    icon: light_icon,
    describe: "Aplicamos inovação com propósito. Cada solução é pensada para gerar impacto real, combinando criatividade, tecnologia e estratégia para alcançar metas claras.",
  },
];

const ParceriaSection = () => {
  return (
    <section className="flex flex-col justify-center w-full px-5 md:px-10 lg:px-20 py-16 gap-12">

      <div className="flex flex-col gap-5">
        <div className="flex flex-col items-start">
          <span className={`text-text-blue text-xl md:text-2xl font-bold tracking-wider relative z-10 -mb-4 md:-mb-5 ${lora.className}`}>
            Oportunidade
          </span>
          <span className={`text-2xl md:text-3xl font-extrabold text-slate-900 uppercase tracking-tight ${montserrat.className}`}>
            DE PARCERIA
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {typesOfPartnership.map((item, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-xl border border-slate-100/50 py-6 px-5 flex items-center justify-center gap-3 min-h-[80px] sm:min-h-[120px]">
              <img src={item.image} alt="Icone de parceria" className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0" />
              <span className={`font-bold text-slate-800 text-sm md:text-base leading-tight ${montserrat.className}`}>{item.title}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex flex-col items-end w-full text-right">
          <span className={`text-text-blue text-xl md:text-2xl font-bold tracking-wider relative z-10 -mb-4 md:-mb-5 ${lora.className}`}>
            Por que
          </span>
          <span className={`text-2xl md:text-3xl font-extrabold text-slate-900 uppercase tracking-tight ${montserrat.className}`}>
            <span className="md:hidden">FAZER PARCERIA<br />CONOSCO?</span>
            <span className="hidden md:inline">FAZER PARCERIA CONOSCO?</span>
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {content.map((item, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col gap-3 border border-slate-100/50">
              <div className="flex justify-between items-start gap-3">
                <h3 className={`font-bold text-slate-800 text-sm leading-tight flex-1 ${montserrat.className}`}>{item.title}</h3>
                <img src={item.icon.src} alt="Icone de parceria" className="w-8 h-8 flex-shrink-0" />
              </div>
              <p className={`text-xs text-slate-500 leading-relaxed font-medium ${lora.className}`}>
                {item.describe}
              </p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default ParceriaSection;