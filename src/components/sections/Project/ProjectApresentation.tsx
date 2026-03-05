"use client";

import { Montserrat, Lora } from "next/font/google";
import { useTranslations } from "next-intl";
import { ProjectStatic } from "@/types";
import { getTechIcon } from "@/src/data/techIcons";
import MobilePreviewIphone14 from "../../ui/Mockup/Iphone14";

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
    "intellij": "IDE",
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

const ProjectApresentationSection = ({ project, projectId }: Props) => {
  const t = useTranslations("ProjectDetailPage");
  const tProject = useTranslations(`Projects.${projectId}`);
  const fullDescription = tProject("fullDescription");

  return (
    <section className="flex justify-center w-full flex-wrap text-black p-8 md:px-16 gap-16 bg-[#ECEFF1]">

      {project.mockup !== false && (
        <div className="w-full md:w-[40vw] h-full flex justify-center items-center">
          <MobilePreviewIphone14>
            {project.link ? (
              <iframe src={project.link} title={projectId} className="w-full h-full border-0" />
            ) : (
              <div className="w-full h-full overflow-hidden">
                <img
                  src={project.image}
                  alt={projectId}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </MobilePreviewIphone14>
        </div>
      )}

      <div
        className={`p-8 rounded-lg border border-gray-300 bg-white flex flex-col gap-8 ${
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
              {t("technologies")} →
            </p>
            <div className="grid grid-cols-2 gap-x-6 gap-y-6">
              {project.technologies.map((tech) => (
                <TechCard key={tech} tech={tech} />
              ))}
            </div>
          </div>
        )}

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#263238] text-white px-6 py-3 rounded-full font-medium hover:bg-[#0D47A1] transition-colors w-fit mt-2"
          >
            {t("liveProject")} ↗
          </a>
        )}
      </div>
    </section>
  );
};

export default ProjectApresentationSection;