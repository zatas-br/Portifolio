"use client";

import { Montserrat } from "next/font/google";
import { BsCheckCircle } from "react-icons/bs"; // Placeholder para logos

const montserrat = Montserrat({ subsets: ["latin"], weight: ["300", "400", "700", "800"] });

const logos = [
  { src: "/images/clients/ef_engenharia.svg", alt: "EF Logo" },
  { src: "/images/clients/bykatino.svg", alt: "Bykatino" },
  { src: "/images/clients/dpj.svg", alt: "Fitness Logo" },
  { src: "/images/clients/aureni_fisioterapia.svg", alt: "Yoga Logo" },
  { src: "/images/clients/jaguar.svg", alt: "Panther" },
  { src: "/images/clients/varys_logo.svg", alt: "Varys" },
  { src: "/images/clients/jersey_hub.svg", alt: "Sport Logo" },
];

const HeroSection = () => {
  return (
    <section className="relative flex flex-col justify-center items-center w-full h-[100vh] px-8 text-center">
      
      <div className="flex flex-col items-center flex-1 justify-center gap-6 mt-10">
        <div className="flex flex-col gap-0">
          <h1 className={`text-3xl md:text-4xl font-extrabold text-text-primary tracking-tight uppercase ${montserrat.className}`}>
            CONSTRUA O FUTURO COM A ZATAS
          </h1>
          <h2 className={`text-3xl md:text-4xl font-extrabold text-text-secondary uppercase tracking-widest ${montserrat.className}`}>
            Conecte-se com uma empresa em crescimento!
          </h2>
        </div>

        {/* Botões */}
        <div className="flex flex-row gap-4 mt-4">
          <button className={`${montserrat.className} bg-salmon hover:bg-salmon/90 text-white rounded-full px-10 py-5 font-light text-2xl transition-all shadow-md active:scale-95`}>
            Entrar em contato
          </button>
          <button className={`${montserrat.className} bg-white text-text-primary border border-slate-200 rounded-full px-10 py-5 font-light text-2xl transition-all shadow-xl hover:shadow-2xl active:scale-95 flex items-center gap-2`}>
            Explorar projetos
          </button>
        </div>
      </div>

      {/* Logos Parceiros no Rodapé da Section */}
      <div className="w-full flex flex-col items-center gap-6 pb-12">
        <p className={`text-1xl text-slate-400 font-medium ${montserrat.className}`}>
          Algumas empresas que acreditaram no nosso projeto:
        </p>
        <div className="flex flex-row flex-wrap justify-center items-center gap-10 md:gap-16 opacity-80 grayscale">
          
          {logos.map((logo, index) => (
            <div key={index} className="w-20 flex justify-center">
              <img src={logo.src} alt={logo.alt} className="w-full h-full object-contain" />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default HeroSection;