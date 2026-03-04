"use client";

import { Lora, Montserrat } from "next/font/google";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["300", "400", "700", "800"] });
const lora = Lora({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"]
});

const expertiseData = [
  {
    id: "design",
    label: "Design",
    title: "DESIGN",
    description: "Nosso design comunica, conecta e converte!",
    image: "/images/Deisgn_Background.png", 
  },
  {
    id: "desenvolvimento",
    label: "Desenvolvimento",
    title: "DESENVOLVIMENTO",
    description: "Soluções tecnológicas robustas e escaláveis para impulsionar o seu negócio no digital.",
    image: "/images/Development_Background.png", 
  },
  {
    id: "marketing",
    label: "Marketing",
    title: "MARKETING",
    description: "Estratégias inteligentes e orientadas a dados para conectar sua marca ao público certo.",
    image: "/images/Marketing_Background.png", 
  }
];

const ExpertiseSection = () => {
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
    <section className="flex flex-col justify-center items-center w-full h-[100vh] bg-[#F8F9FA] px-10 md:px-20 gap-10">
      
      {/* Títulos da Seção */}
      <div className="text-center flex flex-col gap-1 z-10">
        <h2 className={`text-3xl font-extrabold text-slate-900 uppercase tracking-tight ${montserrat.className}`}>
          NOSSA EXPERTISE
        </h2>
        <h3 className={`text-xl font-light text-slate-500 uppercase tracking-widest ${montserrat.className}`}>
          TRÊS PILARES QUE SUSTENTAM NOSSO SUCESSO
        </h3>
      </div>

      {/* Container Principal */}
      <div className="relative w-full max-w-5xl h-[60vh] rounded-3xl shadow-2xl bg-slate-900 overflow-hidden">
        
        {/* CORREÇÃO DAS IMAGENS: Esteira Flex e Itens flex-shrink-0 */}
        <div className="absolute inset-0 overflow-hidden">
          <div ref={imagesTrackRef} className="flex w-full h-full">
            {expertiseData.map((item, i) => (
              <div key={i} className="relative w-full h-full flex-shrink-0">
                <Image 
                  src={item.image} 
                  alt={item.title}
                  fill
                  className="object-cover opacity-80"
                  priority={i === 0}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Menu Toggle (Pill) */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-slate-900/60 backdrop-blur-md rounded-full p-1 flex shadow-lg border border-white/20 z-20">
          {expertiseData.map((item, i) => (
            <button 
              key={i}
              onClick={() => setActiveTab(i)}
              className={`px-6 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                activeTab === i 
                  ? "bg-white text-slate-900 shadow-sm" 
                  : "text-white hover:text-white/80 font-medium"
              } ${montserrat.className}`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Card Glass - Canto Inferior Direito */}
        <div className="absolute bottom-6 right-6 bg-text-primary/60 backdrop-blur-xl rounded-2xl p-6 w-[25vw] h-[25vh] shadow-2xl z-20 flex flex-col">
          
          {/* Descrição das Imagens*/}
          <div className="relative w-full overflow-hidden mb-4">
              <div ref={textsTrackRef} className="flex w-full">
                {expertiseData.map((item, i) => (
                  <div key={i} className="flex flex-col gap-2 w-full flex-shrink-0 pr-4">
                    <h4 className={`text-white font-bold uppercase tracking-widest text-sm ${montserrat.className}`}>
                      {item.title}
                    </h4>
                    <p className={`text-slate-300 text-xs font-light leading-relaxed ${montserrat.className}`}>
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
          </div>

          <button className="flex items-center justify-center gap-2 bg-white text-slate-900 rounded-full py-2 px-4 hover:bg-slate-100 transition-colors active:scale-95 w-max ml-auto mt-auto">
            <span className={`text-[10px] font-bold uppercase tracking-wide ${montserrat.className}`}>Ver projetos</span>
            <BsArrowRight size={12} />
          </button>
        </div>

      </div>
    </section>
  );
};

export default ExpertiseSection;