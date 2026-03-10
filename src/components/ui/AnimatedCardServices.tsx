"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface ServiceCardProps {
  iconUri: string;
  text: string;
  activeColor?: string;
}

const AnimatedServiceCard = ({ 
  iconUri, 
  text, 
  activeColor = "#f0705a"
}: ServiceCardProps) => {
  const container = useRef<HTMLDivElement>(null);
  const revealRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  const { contextSafe } = useGSAP({ scope: container });

  const handleAnimate = contextSafe((isEnter: boolean) => {
    if (isEnter) {
      gsap.to(revealRef.current, {
        clipPath: "circle(150% at 50% 100%)",
        duration: 0.8,
        ease: "power2.out",
        overwrite: "auto"
      });
      gsap.to(arrowRef.current, {
        y: -12,
        duration: 0.4,
        ease: "back.out(1.7)",
        overwrite: "auto"
      });
      gsap.to(textRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.4,
        overwrite: "auto"
      });
      gsap.to(iconRef.current, {
        filter: "brightness(0.2)",
        duration: 0.4,
        overwrite: "auto"
      });
    } else {
      gsap.to(revealRef.current, {
        clipPath: "circle(0% at 50% 100%)",
        duration: 0.6,
        ease: "power2.inOut",
        overwrite: "auto"
      });
      gsap.to(arrowRef.current, {
        y: 0,
        duration: 0.4,
        overwrite: "auto"
      });
      gsap.to(textRef.current, {
        opacity: 0,
        y: 10,
        duration: 0.3,
        overwrite: "auto"
      });
      gsap.to(iconRef.current, {
        filter: "brightness(1)",
        duration: 0.4,
        overwrite: "auto"
      });
    }
  });

  // ScrollTrigger APENAS no mobile via gsap.matchMedia
  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(max-width: 767px)", () => {
      ScrollTrigger.create({
        trigger: container.current,
        start: "top 80%",
        end: "bottom 20%",
        onEnter: () => handleAnimate(true),
        onLeave: () => handleAnimate(false),
        onEnterBack: () => handleAnimate(true),
        onLeaveBack: () => handleAnimate(false),
      });
    });

    return () => mm.revert();
  }, { scope: container });

  // Hover APENAS no desktop
  const handleMouseEnter = () => {
    if (window.innerWidth >= 768) handleAnimate(true);
  };
  const handleMouseLeave = () => {
    if (window.innerWidth >= 768) handleAnimate(false);
  };

  return (
    <div
      ref={container}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-72 h-96 rounded-[2rem] overflow-hidden cursor-pointer flex flex-col items-center justify-center p-8 shadow-2xl transition-shadow hover:shadow-inner"
      style={{ backgroundColor: activeColor }}
    >
      <div
        ref={revealRef}
        className="absolute inset-0 z-0 bg-white border-2 border-black rounded-[2rem]"
        style={{ clipPath: "circle(0% at 50% 100%)" }}
      />

      <div className="relative z-10 flex flex-col items-center">
        <div ref={iconRef} className="mb-6 transition-all">
          <Image 
            src={iconUri} 
            alt="Service Icon" 
            width={80} 
            height={80} 
            className="object-contain"
          />
        </div>
        <div 
          ref={textRef} 
          className="opacity-0 translate-y-6 text-center"
        >
          <p className="text-gray-800 font-semibold text-lg leading-snug">
            {text}
          </p>
        </div>
      </div>

      <div
        ref={arrowRef}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-5 z-20"
        style={{ 
          clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
          backgroundColor: "#fff"
        }}
      />
    </div>
  );
};

export default AnimatedServiceCard;