"use client";

import { Lora, Montserrat } from "next/font/google";
import { describe } from "node:test";
import gain_icon from "@/public/images/Partnership/gain_icon.png";
import globe_icon from "@/public/images/Partnership/globe_icon.png";
import handshake_icon from "@/public/images/Partnership/handshake_icon.png";
import humans_icon from "@/public/images/Partnership/humans_icon.png";
import light_icon from "@/public/images/Partnership/light_icon.png";
import rocket_icon from "@/public/images/Partnership/rocket_icon.png";
import throphy_icon from "@/public/images/Partnership/throphy_icon.png";


const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "600", "700", "800"] });

const lora = Lora({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"]
});

const typesOfPartnership =
  [
    {
      title: "SÓCIOS ESTRATÉGICOS",
      image: handshake_icon.src
    },
    {
      title: "INVESTIDORES",
      image: rocket_icon.src
    },
    {
      title: "PARCEIROS COMERCIAIS",
      image: globe_icon.src
    }
  ]

const content = [
  {
    title: "CRESCIMENTO ESTRATÉGICO",
    icon: gain_icon,
    describe: "Crescimento exige direção e planejamento. Desenvolvemos estratégias claras e personalizadas, alinhadas aos objetivos do seu negócio, para garantir evolução consistente e sustentável. Cada ação é pensada com propósito, foco em posicionamento e geração de resultados sólidos no longo prazo.",
  },
  {
    title: "EQUIPE MULTIDISCIPLINAR",
    icon: throphy_icon,
    describe: "Contamos com profissionais de diferentes áreas, unindo estratégia, design, tecnologia e marketing para desenvolver soluções completas e integradas. Essa diversidade de expertise nos permite analisar cada projeto de forma ampla, garantindo decisões mais inteligentes e resultados mais consistentes.",
  },
  {
    title: "ATENDIMENTO HUMANIZADO",
    icon: humans_icon,
    describe: "Valorizamos relações próximas e transparentes. Nosso atendimento é baseado em escuta ativa, clareza na comunicação e acompanhamento constante, garantindo que cada cliente se sinta seguro e bem orientado em todas as etapas do projeto.",
  },
  {
    title: "INOVAÇÃO E RESULTADOS",
    icon: light_icon,
    describe: "Aplicamos inovação com propósito. Cada solução é pensada para gerar impacto real, combinando criatividade, tecnologia e estratégia para alcançar metas claras e mensuráveis. Nosso foco não é apenas inovar, mas transformar inovação em performance e crescimento concreto.",
  }
]

const ParceriaSection = () => {
  return (
    <section className="flex flex-col justify-center w-full h-[100vh] px-10 md:px-20 gap-12">

      {/* Linha 1: Tipos de Parceria */}
      <div className="flex flex-col gap-6">
        <div className="flex flex-col items-start">
          <span className={`text-text-blue text-2xl font-bold tracking-wider -mb-4 ${lora.className}`}>Oportunidade</span>
          <span className={`text-3xl font-extrabold text-slate-900 uppercase tracking-tight ${montserrat.className}`}>DE PARCERIA</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {typesOfPartnership.map((item, i) => (
            <div key={i} className="bg-white rounded-3xl shadow-xl border border-slate-250 h-[40vh] flex items-center justify-center gap-3 border border-slate-100/50">
              <img src={item.image} alt="Icone de parceria" className="text-[#f07558] text-xl" />
              <span className={`font-bold text-slate-800 text-xl ${montserrat.className}`}>{item.title}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Linha 2: Por que fazer parceria? */}
      <div className="flex flex-col gap-6 mt-4">
        <div className="flex flex-col items-end w-full text-right">
          <span className={`text-text-blue text-2xl font-bold tracking-wider -mb-4 ${lora.className}`}>Por que</span>
          <h2 className={`text-3xl font-extrabold text-slate-900 uppercase tracking-tight ${montserrat.className}`}>FAZER PARCERIA CONOSCO?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Cards Linha 2 */}
          {content.map((item, i) => (
            <div key={i} className="bg-white rounded-3xl shadow-sm hover:shadow-md transition-shadow p-8 flex flex-col gap-4 border border-slate-100/50 h-[40vh] w-[20vw]">
              <div className="flex justify-between items-start">
                <h3 className={`font-bold text-slate-800 text-sm w-2/3 leading-tight ${montserrat.className}`}>{item.title}</h3>
                <img src={item.icon.src} alt="Icone de parceria" className="text-[#f07558] text-xl" />
              </div>
              <p className={`text-xs text-slate-500 leading-relaxed font-medium mt-auto ${lora.className}`}>
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