"use client";

import { useTranslations } from "next-intl";
import { ProjectStatic } from "@/types";
import { getTechIcon } from "@/src/data/techIcons";
import MobilePreviewIphone14 from "../../ui/Mockup/Iphone14";
import MacbookMockup from "../../ui/Mockup/Macbook";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

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
        <span className="font-sans font-bold text-[15px] text-[#263238] uppercase tracking-wide">
          {tech.toUpperCase()}
        </span>
        {subtitle && (
          <span className="font-sans font-normal text-[13px] text-gray-500">
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
  
  const [activeMockup, setActiveMockup] = useState<"macbook" | "iphone">(
    project.mockupType === "macbook" ? "macbook" : "iphone"
  );
  
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (project.mockupType !== "both") return;

    const interval = setInterval(() => {
      // Animate out
      gsap.to(containerRef.current, {
        opacity: 0,
        scale: 0.95,
        duration: 0.4,
        ease: "power2.inOut",
        onComplete: () => {
          // Switch state
          setActiveMockup((prev) => (prev === "macbook" ? "iphone" : "macbook"));
          // Animate back in
          gsap.to(containerRef.current, {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            ease: "back.out(1.2)",
            delay: 0.1
          });
        }
      });
    }, 10000);

    return () => clearInterval(interval);
  }, [project.mockupType]);

  return (
    <section className="flex justify-center w-full flex-wrap text-black p-8 md:px-16 gap-16 bg-white -mt-8">

      {project.mockup !== false && (
        <div className="w-full md:w-[40vw] h-full flex justify-center items-center -mt-8 min-h-[500px]" style={{ filter: 'drop-shadow(0 25px 40px rgba(0,0,0,0.25))' }}>
          <div ref={containerRef} className="w-full flex justify-center items-center">
            {activeMockup === "macbook" ? (
              <MacbookMockup>
                {project.link ? (
                  <iframe src={project.link} title={projectId} className="w-full h-full border-0" />
                ) : (
                  <div className="w-full h-full overflow-hidden">
                    <img src={project.image} alt={projectId} className="w-full h-full object-cover" />
                  </div>
                )}
              </MacbookMockup>
            ) : (
              <MobilePreviewIphone14>
                {project.link ? (
                  <iframe src={project.link} title={projectId} className="w-full h-full border-0" />
                ) : (
                  <div className="w-full h-full overflow-hidden">
                    <img src={project.image} alt={projectId} className="w-full h-full object-cover" />
                  </div>
                )}
              </MobilePreviewIphone14>
            )}
          </div>
        </div>
      )}

      <div
        className={`bg-white flex flex-col gap-8 -mt-8 ${
          project.mockup === false ? "w-full md:w-[60vw]" : "w-full md:w-[40vw]"
        }`}
      >
        <h1 className="uppercase tracking-wide text-[28px] md:text-[44px] font-bold font-sans leading-[0.85]">
          {t("about")}
        </h1>

        <p className="text-gray-700 text-[16px] font-light leading-relaxed font-sans">
          {fullDescription}
        </p>

        {project.technologies && project.technologies.length > 0 && (
          <div className="flex flex-col gap-5">
            <p className="text-[#0D47A1] text-[20px] md:text-[32px] font-serif italic leading-none">
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