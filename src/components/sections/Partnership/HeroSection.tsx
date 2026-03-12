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

function AnimatedHeroButton({
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
      className={`inline-flex items-center justify-center rounded-full font-light no-underline shadow-lg hover:shadow-2xl transition-shadow duration-300 w-full sm:w-auto ${className}`}
      style={{ opacity: 0 }}
    >
      {children}
    </Link>
  );
}

const HeroSection = () => {
  return (
    <section className="relative flex flex-col justify-center items-center w-full min-h-screen px-6 pt-28 pb-16 text-center md:h-[100vh] md:pt-0 md:pb-0">

      <div className="flex flex-col items-center flex-1 justify-center gap-5 md:gap-6 w-full max-w-5xl mx-auto">
        <div className="flex flex-col gap-1 md:gap-0">
          <h1 className={`text-2xl md:text-4xl font-extrabold text-text-primary tracking-tight uppercase leading-tight ${montserrat.className}`}>
            CONSTRUA O FUTURO COM A ZATAS
          </h1>
          <h2 className={`text-base md:text-4xl font-extrabold text-text-secondary uppercase tracking-normal leading-tight ${montserrat.className}`}>
            Conecte-se com uma empresa em crescimento!
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mt-4 w-full sm:w-auto sm:justify-center md:flex-row md:gap-4">
          <AnimatedHeroButton
            href="/contact"
            delay={0.3}
            className="bg-salmon hover:bg-salmon/90 text-white px-8 py-4 text-base md:px-12 md:py-5 md:text-lg font-normal"
          >
            <span className={montserrat.className}>Entrar em contato</span>
          </AnimatedHeroButton>
          <AnimatedHeroButton
            href="/services"
            delay={0.45}
            className="bg-white text-text-primary border border-slate-200 px-8 py-4 text-base md:px-12 md:py-5 md:text-lg font-normal"
          >
            <span className={montserrat.className}>Explorar projetos</span>
          </AnimatedHeroButton>
        </div>
      </div>

      <div className="w-full flex flex-col items-center gap-5 mt-10 md:pb-12">
        <p className={`text-base md:text-xl font-medium ${montserrat.className}`} style={{ color: "#A9A9A9" }}>
          Algumas empresas que acreditaram no nosso projeto:
        </p>

        <div className="hidden md:flex flex-row flex-wrap justify-center items-center gap-10 md:gap-16 opacity-80 grayscale">
          {logos.map((logo, index) => (
            <div key={index} className="w-20 flex justify-center">
              <img src={logo.src} alt={logo.alt} className="w-full h-auto object-contain" />
            </div>
          ))}
        </div>

        <div className="md:hidden opacity-80 grayscale w-full max-w-sm flex flex-col gap-5">
          <div className="grid grid-cols-4 gap-x-6">
            {logos.slice(0, 4).map((logo, index) => (
              <div key={index} className="flex justify-center items-center">
                <img src={logo.src} alt={logo.alt} className="w-14 h-auto object-contain" />
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-6">
            {logos.slice(4).map((logo, index) => (
              <div key={index} className="flex justify-center items-center">
                <img src={logo.src} alt={logo.alt} className="w-14 h-auto object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;