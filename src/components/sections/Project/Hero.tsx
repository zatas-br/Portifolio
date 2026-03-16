"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { ProjectStatic } from "@/types";
import { useEffect, useRef } from "react";
import gsap from "gsap";

interface HeroProps {
  project: ProjectStatic;
  projectId: string;
}

function AnimatedLiveButton({ href }: { href: string }) {
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    gsap.fromTo(
      ref.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: "power3.out" }
    );
  }, []);

  const handleMouseEnter = () =>
    gsap.to(ref.current, { y: -4, duration: 0.3, ease: "power2.out" });
  const handleMouseLeave = () =>
    gsap.to(ref.current, { y: 0, duration: 0.3, ease: "power2.out" });
  const handleMouseDown = () =>
    gsap.to(ref.current, { y: -1, duration: 0.1, ease: "power2.out" });
  const handleMouseUp = () =>
    gsap.to(ref.current, { y: -4, duration: 0.1, ease: "power2.out" });

  return (
    <a ref={ref} href={href} target="_blank" rel="noopener noreferrer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} className="px-12 py-[22px] mt-4 text-lg font-normal text-gray-900 bg-white rounded-full hover:bg-gray-100 no-underline" style={{ opacity: 0 }}>
      Ver ao vivo
    </a>
  );
}

const HeroSection = ({ project, projectId }: HeroProps) => {
  const tProject = useTranslations(`Projects.${projectId}`);

  const title = tProject('title');
  const description = tProject('description');
  const client = tProject('client');

  return (
    <section className="relative flex flex-col justify-center w-full h-[80vh] px-8 md:px-16 text-white overflow-hidden">

      <div className="absolute inset-0 z-10">
        <img src={project.image} alt={title} className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/10 to-transparent" />
      </div>

      <div className="z-10 flex flex-col items-start max-w-lg gap-4 mt-[-5vh]">
        <h1 className="uppercase tracking-wide text-[28px] md:text-[44px] font-bold font-sans leading-[0.85]">
          {title}
        </h1>

        <p className="text-gray-100 mt-2 text-[16px] font-light leading-relaxed">
          {description}
        </p>

        {project.link && (
          <AnimatedLiveButton href={project.link} />
        )}
      </div>

      <div className="absolute bottom-4 left-8 md:bottom-8 md:left-16 z-10 italic">
        <span className="text-[70px] md:text-[100px] italic leading-none text-white/90 font-serif">
          {client}
        </span>
      </div>

    </section>
  );
};

export default HeroSection;