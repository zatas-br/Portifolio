"use client";

import { Montserrat } from "next/font/google";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Link } from "@/src/i18n/navigation";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["300", "400", "700", "800"] });

const logos = [
  { src: "/images/clients/ef_engenharia.svg", alt: "EF Engenharia" },
  { src: "/images/clients/bykatino.svg", alt: "ByKatino" },
  { src: "/images/clients/dpj.svg", alt: "DPJ Personal" },
  { src: "/images/clients/aureni_fisioterapia.svg", alt: "Aureni Fisioterapia" },
  { src: "/images/clients/jaguar.svg", alt: "Jaguar" },
  { src: "/images/clients/varys_logo.svg", alt: "Varys" },
  { src: "/images/clients/jersey_hub.svg", alt: "Jersey Hub" },
];

function AnimatedLinkButton({
  href,
  children,
  className = "",
  delay = 0,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    gsap.fromTo(
      ref.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, delay, ease: "power3.out" }
    );
  }, [delay]);

  const handleMouseEnter = () =>
    gsap.to(ref.current, { y: -4, duration: 0.3, ease: "power2.out" });
  const handleMouseLeave = () =>
    gsap.to(ref.current, { y: 0, duration: 0.3, ease: "power2.out" });
  const handleMouseDown = () =>
    gsap.to(ref.current, { y: -1, duration: 0.1, ease: "power2.out" });
  const handleMouseUp = () =>
    gsap.to(ref.current, { y: -4, duration: 0.1, ease: "power2.out" });

  return (
    <Link
      ref={ref}
      href={href}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      className={`inline-flex items-center justify-center rounded-full font-normal no-underline shadow-lg hover:shadow-2xl transition-shadow duration-300 text-lg px-12 py-[22px] ${className}`}
      style={{ opacity: 0 }}
    >
      {children}
    </Link>
  );
}

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

        <div className="flex flex-row gap-4 mt-4 flex-wrap justify-center">
          <AnimatedLinkButton href="/contact" delay={0.3} className="bg-salmon hover:bg-salmon/90 text-white">
            Entrar em contato
          </AnimatedLinkButton>
          <AnimatedLinkButton href="/services" delay={0.4} className="bg-white text-text-primary border border-slate-200 shadow-xl hover:shadow-2xl">
            Explorar projetos
          </AnimatedLinkButton>
        </div>
      </div>

      <div className="w-full flex flex-col items-center gap-6 pb-12">
        <p className={`text-base text-slate-400 font-medium ${montserrat.className}`}>
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