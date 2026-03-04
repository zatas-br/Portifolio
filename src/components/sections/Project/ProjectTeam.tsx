"use client";

import { useRef, useMemo } from "react";
import { Montserrat } from "next/font/google";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TeamComponentIcon from "../../ui/TeamComponentIcon";



gsap.registerPlugin(ScrollTrigger);

const numberOfCircles = 8;

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const ProjectTeamSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const circlesRef = useRef<(HTMLDivElement | null)[]>([]);

  const teamMembers = useMemo(() => Array.from({ length: numberOfCircles }), []);

  useGSAP(() => {
    const validCircles = circlesRef.current.filter((el) => el !== null);
    const total = validCircles.length;
    
    if (total === 0) return;

    const BASE_MOVE = 50 * numberOfCircles; 
    const dynamicMaxMove = Math.max(80, BASE_MOVE - (total * 15)); 
    const centerIndex = (total - 1) / 2;

    validCircles.forEach((el, index) => {
      const relativeDist = centerIndex === 0 ? 0 : (index - centerIndex) / centerIndex;
      const factor = Math.pow(relativeDist, 2); 
      const finalY = factor * dynamicMaxMove;

      gsap.to(el, {
        y: finalY,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "center center",
          scrub: 1.0,
        },
      });
    });
  }, { scope: containerRef, dependencies: [teamMembers.length] });

  return (
    <section 
      ref={containerRef} 
      className="relative flex flex-col justify-start w-full h-[80vh] text-white overflow-hidden"
    >
      <section className="text-black h-full justify-center items-center flex flex-col gap-16 relative">
        
        <div className="absolute top-0 pt-10 w-full justify-center items-start flex flex-wrap gap-4 md:gap-18 px-10">
          {teamMembers.map((_, i) => (
            <TeamComponentIcon 
              imageSrc={`/images/Antony_Icon.png`} 
              name={`Antony Brito`} 
              ref={(el) => {
                if (el) circlesRef.current[i] = el;
              }}
              key={`circle-${i}`}
              />
          ))}
        </div>

        <section className="z-20 justify-center items-center flex flex-col gap-4 text-center px-6">
          <h1 className={`text-2xl md:text-3xl font-bold mt-4 ${montserrat.className} tracking-wider`}>
            EQUIPE DO PROJETO
          </h1>
          <p className={`max-w-[80vw] md:w-[40vw] ${montserrat.className} font-light`}>
            Especialistas alinhados com os objetivos do projeto, colaborando de forma estratégica para entregar resultados consistentes.
          </p>
        </section>
      </section>
    </section>
  );
};

export default ProjectTeamSection;