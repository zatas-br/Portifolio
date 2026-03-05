"use client";

import Image from "next/image";
import Link from "next/link";
import { Montserrat, Lora } from "next/font/google";
import { useTranslations } from "next-intl";
import { ProjectStatic } from "@/types";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"]
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"]
});

interface HeroProps {
  project: ProjectStatic;
  projectId: string;
}

const HeroSection = ({ project, projectId }: HeroProps) => {
  const t = useTranslations("ProjectDetailPage");
  const tProject = useTranslations(`Projects.${projectId}`);

  const title = tProject('title');
  const description = tProject('description');
  const client = tProject('client');

  return (
    <section className="relative flex flex-col justify-center w-full h-[80vh] px-8 md:px-16 text-white overflow-hidden">

      <div className="absolute inset-0 z-10">
        <img
          src={project.image}
          alt={title}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/10 to-transparent" />
      </div>

      <div className="z-10 flex flex-col items-start max-w-lg gap-4 mt-[-5vh]">
        <h1 className={`${montserrat.className} text-3xl md:text-[33px] font-bold leading-tight tracking-wide`}>
          {title}
        </h1>

        <p className={`${montserrat.className} text-base md:text-[13px] font-normal leading-relaxed text-gray-100 mt-2`}>
          {description}
        </p>

        {project.link && (
          <Link
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 mt-4 text-sm font-medium text-gray-900 transition-colors bg-white rounded-full hover:bg-gray-100"
          >
            {t('liveProject')}
          </Link>
        )}
      </div>

      <div className="absolute bottom-4 left-8 md:bottom-8 md:left-16 z-10 italic">
        <span className={`${lora.className} text-[70px] md:text-[100px] italic leading-none text-white/90`}>
          {client}
        </span>
      </div>

    </section>
  );
};

export default HeroSection;