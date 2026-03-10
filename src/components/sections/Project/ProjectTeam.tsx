"use client";

import { useRef, useMemo } from "react";
import { Montserrat } from "next/font/google";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TeamComponentIcon from "../../ui/TeamComponentIcon";
import { useTranslations } from "next-intl";
import { resolveAuthors } from "@/src/utils/resolveAuthors";
import { ProjectStatic } from "@/types";

gsap.registerPlugin(ScrollTrigger);

import { Lora } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700"] });
const lora = Lora({ subsets: ["latin"], weight: ["400"], style: ["italic"] });

interface Props {
  project: ProjectStatic;
}

const FALLBACK_COLORS = [
  "#2b4d8f", "#0D47A1", "#263238", "#1565C0",
  "#37474F", "#1976D2", "#0288D1", "#455A64",
];

const ProjectTeamSection = ({ project }: Props) => {
  const t = useTranslations("ProjectDetailPage");
  const containerRef = useRef<HTMLDivElement>(null);
  const circlesRef = useRef<(HTMLDivElement | null)[]>([]);

  const authors = useMemo(() => resolveAuthors(project.authorIds), [project.authorIds]);

  useGSAP(() => {
    const validCircles = circlesRef.current.filter((el) => el !== null);
    const total = validCircles.length;
    if (total === 0) return;

    const BASE_MOVE = 50 * total;
    const dynamicMaxMove = Math.max(80, BASE_MOVE - total * 15);
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
  }, { scope: containerRef, dependencies: [authors.length] });

  const isSingleAuthor = authors.length === 1;
  const sectionTitle = isSingleAuthor ? t('authors.single') : t('authors.multiple');

  return (
    <section
      ref={containerRef}
      className="relative flex flex-col justify-start w-full text-white overflow-hidden bg-white"
    >

      {/* ─── MOBILE: layout estático, sem animação ─── */}
      <section className="md:hidden text-black flex flex-col items-center gap-10 py-12 px-6">

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-8">
          {authors.map((author, i) => {
            const initials = author.name
              .split(" ")
              .slice(0, 2)
              .map((n: string) => n.charAt(0).toUpperCase())
              .join("");
            const color = FALLBACK_COLORS[i % FALLBACK_COLORS.length];

            return (
              <div key={`m-${i}`} className="relative flex flex-col items-center">
                {author.avatar ? (
                  <div className="w-14 h-14 rounded-full border-2 border-white/20 shadow-2xl overflow-hidden">
                    <img src={author.avatar} alt={author.name} className="w-full h-full object-cover" />
                  </div>
                ) : (
                  <div
                    className="w-14 h-14 rounded-full border-2 border-white/20 shadow-2xl flex items-center justify-center text-white font-bold text-base"
                    style={{ backgroundColor: color }}
                  >
                    {initials}
                  </div>
                )}
                <div
                  className="absolute -bottom-2 w-max px-3 py-1 rounded-xl backdrop-blur-sm shadow-sm flex items-center justify-center z-10"
                  style={{ backgroundColor: "rgba(202, 202, 202, 0.11)" }}
                >
                  <p className={`${lora.className} text-slate-800 text-[10px] font-medium whitespace-nowrap`}>
                    {author.name}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col gap-3 text-center">
          <h1 className={`text-xl font-bold ${montserrat.className} tracking-wider`}>
            {sectionTitle.toUpperCase()}
          </h1>
          <p className={`${montserrat.className} font-light text-sm text-gray-600 max-w-[85vw]`}>
            Especialistas alinhados com os objetivos do projeto, colaborando de forma estratégica para entregar resultados consistentes.
          </p>
        </div>

      </section>

      {/* ─── DESKTOP: idêntico ao original com animação GSAP ─── */}
      <section className="hidden md:flex text-black h-[80vh] justify-center items-center flex-col gap-16 relative">

        <div className="absolute top-0 pt-10 w-full justify-center items-start flex flex-wrap gap-4 md:gap-18 px-10">
          {authors.map((author, i) => {
            if (author.avatar) {
              return (
                <TeamComponentIcon
                  imageSrc={author.avatar}
                  name={author.name}
                  ref={(el) => { if (el) circlesRef.current[i] = el; }}
                  key={`circle-${i}`}
                />
              );
            }

            const initials = author.name
              .split(" ")
              .slice(0, 2)
              .map((n: string) => n.charAt(0).toUpperCase())
              .join("");
            const color = FALLBACK_COLORS[i % FALLBACK_COLORS.length];

            return (
              <div
                key={`circle-${i}`}
                ref={(el) => { if (el) circlesRef.current[i] = el; }}
                className="relative flex flex-col items-center"
              >
                <div
                  className="w-16 h-16 md:w-24 md:h-24 rounded-full border-2 border-white/20 shadow-2xl flex items-center justify-center text-white font-bold text-xl md:text-2xl"
                  style={{ backgroundColor: color }}
                >
                  {initials}
                </div>
                <div
                  className="absolute -bottom-2 w-max px-4 py-1 rounded-xl backdrop-blur-sm shadow-sm flex items-center justify-center z-10"
                  style={{ backgroundColor: "rgba(202, 202, 202, 0.11)" }}
                >
                  <p className={`${lora.className} text-slate-800 text-[10px] md:text-xs font-medium whitespace-nowrap`}>
                    {author.name}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <section className="z-20 justify-center items-center flex flex-col gap-4 text-center px-6">
          <h1 className={`text-2xl md:text-3xl font-bold mt-4 ${montserrat.className} tracking-wider`}>
            {sectionTitle.toUpperCase()}
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