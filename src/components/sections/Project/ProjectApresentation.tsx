"use client";

import { Montserrat, Lora } from "next/font/google";
import { useTranslations } from "next-intl";
import { ProjectStatic } from "@/types";
import { getTechIcon } from "@/src/data/techIcons";
import MobilePreviewIphone14 from "../../ui/Mockup/Iphone14";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "600", "700"] });
const lora = Lora({ subsets: ["latin"], weight: ["400"], style: ["italic"] });

interface Props {
  project: ProjectStatic;
  projectId: string;
}

function TechCard({ tech }: { tech: string }) {
  const iconUrl = getTechIcon(tech);

  const subtitleMap: Record<string, string> = {
    photoshop: "Mockups",
    illustrator: "Vetorização",
    canva: "Apresentação",
    figma: "Prototipação",
    "vs code": "Editor",
    vscode: "Editor",
    intellij: "IDE",
    "intellij idea": "IDE",
    react: "Frontend",
    "react native": "Mobile",
    "next.js": "Framework",
    nextjs: "Framework",
    tailwind: "Estilização",
    tailwindcss: "Estilização",
    typescript: "Linguagem",
    javascript: "Linguagem",
    python: "Linguagem",
    java: "Linguagem",
    kotlin: "Mobile",
    flutter: "Mobile",
    firebase: "Backend",
    mongodb: "Banco de dados",
    postgresql: "Banco de dados",
    mysql: "Banco de dados",
    docker: "DevOps",
    git: "Versionamento",
    github: "Versionamento",
    node: "Backend",
    express: "Backend",
    spring: "Backend",
    "spring boot": "Backend",
    expo: "Mobile",
    "expo go": "Mobile",
    sass: "Estilização",
    graphql: "API",
    postman: "Testes",
    jest: "Testes",
  };

  const subtitle = subtitleMap[tech.toLowerCase().trim()] ?? "";

  return (
    <div className="flex items-center gap-4 min-w-[180px]">
      <div className="w-16 h-16 rounded-2xl overflow-hidden flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 flex-shrink-0 shadow-sm">
        {iconUrl ? (
          <img
            src={iconUrl}
            alt={tech}
            className="w-20 h-20 object-contain"
            onError={(e) => {
              const el = e.target as HTMLImageElement;
              el.style.display = "none";
              el.parentElement!.innerHTML = `<span class="text-xl font-bold text-slate-500">${tech.charAt(0).toUpperCase()}</span>`;
            }}
          />
        ) : (
          <span className="text-xl font-bold text-slate-500">
            {tech.charAt(0).toUpperCase()}
          </span>
        )}
      </div>
      <div className="flex flex-col">
        <span className={`${montserrat.className} font-bold text-[15px] text-[#263238] uppercase tracking-wide`}>
          {tech.toUpperCase()}
        </span>
        {subtitle && (
          <span className={`${montserrat.className} font-normal text-[13px] text-gray-500`}>
            {subtitle}
          </span>
        )}
      </div>
    </div>
  );
}

function AnimatedLiveButton({
  href,
  children,
  delay = 0,
}: {
  href: string;
  children: React.ReactNode;
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
    <a ref={ref} href={href} target="_blank" rel="noopener noreferrer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} className="inline-flex items-center justify-center rounded-full bg-white text-[#263238] border-2 border-[#263238] font-normal no-underline shadow-lg hover:shadow-2xl transition-shadow duration-300 text-lg px-12 py-[22px]" style={{ opacity: 0 }}>
      {children}
    </a>
  );
}

const ProjectApresentationSection = ({ project, projectId }: Props) => {
  const t = useTranslations("ProjectDetailPage");
  const tProject = useTranslations(`Projects.${projectId}`);
  const fullDescription = tProject("fullDescription");

  return (
    <section className="flex justify-center w-full flex-wrap text-black p-8 md:px-16 gap-16 bg-white -mt-8">

      {project.mockup !== false && (
        <div className="w-full md:w-[40vw] h-full flex justify-center items-center -mt-8" style={{ filter: 'drop-shadow(0 25px 40px rgba(0,0,0,0.25))' }}>
          <MobilePreviewIphone14>
            {project.link ? (
              <iframe src={project.link} title={projectId} className="w-full h-full border-0" />
            ) : (
              <div className="w-full h-full overflow-hidden">
                <img src={project.image} alt={projectId} className="w-full h-full object-cover" />
              </div>
            )}
          </MobilePreviewIphone14>
        </div>
      )}

      <div
        className={`bg-white flex flex-col gap-8 -mt-8 ${
          project.mockup === false ? "w-full md:w-[60vw]" : "w-full md:w-[40vw]"
        }`}
      >
        <h1 className={`font-bold ${montserrat.className} text-3xl uppercase`}>
          {t("about")}
        </h1>

        <p className={`font-normal ${montserrat.className} text-[14px] leading-relaxed text-gray-700`}>
          {fullDescription}
        </p>

        {project.technologies && project.technologies.length > 0 && (
          <div className="flex flex-col gap-5">
            <p className={`font-normal ${lora.className} text-[16px] text-[#0D47A1]`}>
              {t("technologies")}
            </p>
            <div className="grid grid-cols-2 gap-x-6 gap-y-6">
              {project.technologies.map((tech) => (
                <TechCard key={tech} tech={tech} />
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default ProjectApresentationSection;