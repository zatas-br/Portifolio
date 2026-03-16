"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { FaEye } from "react-icons/fa";
import { PROJECTS_STATIC } from "@/src/data/projects";
import { usePortfolioAnimations } from "@/src/hooks/usePortfolioAnimations";
import { useTranslations } from "next-intl";
import gsap from "gsap";

interface CategoryProjectsPageProps {
  category: "desenvolvimento" | "design" | "marketing";
}

export default function CategoryProjectsPage({
  category,
}: CategoryProjectsPageProps) {
  const tProjects = useTranslations("Projects");
  const t = useTranslations("CategoryProjectsPage");

  const router = useRouter();
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<(HTMLDivElement | null)[]>([]);
  const { animateFadeIn } = usePortfolioAnimations();
  
  const animationsExecutedRef = useRef(false);

  const filteredProjects = PROJECTS_STATIC.filter(
    (p) => p.category === category
  );

  const baseCarouselItems = [
    { w: 145, h: 217 },
    { w: 204, h: 366 },
    { w: 258, h: 175 },
    { w: 251, h: 254 },
    { w: 206, h: 210 },
    { w: 156, h: 338 },
    { w: 209, h: 181 },
    { w: 259, h: 262 },
    { w: 370, h: 163 },
  ];

  const carouselItems = [...baseCarouselItems, ...baseCarouselItems, ...baseCarouselItems, ...baseCarouselItems];

  useEffect(() => {
    if (animationsExecutedRef.current) return;

    animateFadeIn(headerRef.current, 0);

    gsap.fromTo(
      projectsRef.current.filter(Boolean),
      { opacity: 0, x: -20 },
      {
        opacity: 1,
        x: 0,
        stagger: 0.1,
        duration: 0.5,
        delay: 0.2,
        ease: "power3.out",
      }
    );

    animationsExecutedRef.current = true;
  }, [animateFadeIn]);

  const hoveredProjectData = filteredProjects.find(
    (p) => p.id === hoveredProject
  );
  const hoveredProjectTitle = hoveredProjectData
    ? tProjects(`${hoveredProjectData.id}.title`)
    : "";

  const handleProjectClick = (projectId: string) => {
    router.push(`/services/${category}/${projectId}`);
  };

  return (
    <div className="min-h-screen bg-[#ECEFF1]">
      <div className="max-w-[1800px] 2xl:px-20 mx-auto px-[30px] pt-24 md:pt-32 relative">

        <div ref={headerRef} className="py-12 md:py-16 text-center">

          <h1 className="text-[#1E1E1E] mb-4 max-w-[800px] mx-auto uppercase text-[28px] md:text-[44px] font-bold font-sans leading-[0.85] tracking-tight">
            {t('pageTitle').split('\n').map((line, i, arr) => (
              <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
            ))}
          </h1>

          <div className="flex justify-center">
            <p className="max-w-[800px] text-[16px] font-light leading-relaxed">
              <span className="font-sans font-light text-[#263238]">
                {t('pageSubtitlePrefix').split('\n').map((line, i, arr) => (
                  <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
                ))}
              </span>
              <span className="font-serif font-normal not-italic text-[#0D47A1]">
                {t('pageSubtitleHighlight')}
              </span>
              <span className="font-sans font-light text-[#263238]">
                {t('pageSubtitleSuffix')}
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="mb-20 overflow-hidden w-full relative">
        <div className="flex items-center gap-6 pb-4 w-max animate-scroll">
          {carouselItems.map((item, index) => (
            <div
              key={index}
              style={{ width: `${item.w}px`, height: `${item.h}px` }}
              className="bg-[#E0E0E0] rounded-[30px] flex-shrink-0 shadow-lg overflow-hidden relative"
            >
              <img 
                src={`/images/services/projetos/${(index % 9) + 1}.png`} 
                alt="" 
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-[1800px] 2xl:px-20 mx-auto px-[30px] pb-20">
        <div className="grid lg:grid-cols-[861fr_615fr] gap-8 lg:gap-16 relative items-start">
          
          <div className="space-y-8">
            {filteredProjects.map((project, index) => {
              const title = tProjects(`${project.id}.title`);
              const description = tProjects(`${project.id}.description`);
              const client = tProjects(`${project.id}.client`);
              
              return (
                <div
                  key={project.id}
                  ref={(el) => { projectsRef.current[index] = el; }}
                  onClick={() => handleProjectClick(project.id)}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  className="group cursor-pointer bg-white rounded-[30px] p-6 min-h-[200px] shadow-[0_0_20px_rgba(0,0,0,0.3)] border border-transparent hover:border-[#0D47A1]/20 transition-all duration-300 hover:shadow-xl"
                >
                  <div className="block lg:hidden mb-6 rounded-[20px] overflow-hidden aspect-video">
                    <img 
                      src={project.image} 
                      alt={title} 
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h3 className="text-[32px] font-semibold text-[#000000] font-sans mb-4 leading-tight">
                    {title}
                  </h3>
                  
                  <p className="text-[20px] font-light text-[#000000] font-sans mb-8 leading-relaxed">
                    {description}
                  </p>
                  
                  <div className="h-px w-full bg-[#B2B2B2] mb-6"></div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-[20px] text-[#0d47a1] font-serif italic">
                      {client || "Zatas"}
                    </span>
                    <span className="text-[20px] text-[#0d47a1] font-serif italic flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                      {t('viewProject')}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="hidden lg:block relative h-full">
            <div className="sticky top-32 w-full h-[520px] bg-[#E0E0E0] rounded-[30px] overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.3)] flex items-center justify-center border border-[#B2B2B2]/30 transition-all duration-300">
              {hoveredProjectData ? (
                <img
                  src={hoveredProjectData.image}
                  alt={hoveredProjectTitle}
                  className="w-full h-full object-cover animate-fadeIn"
                />
              ) : (
                <div className="text-center p-8">
                  <div className="w-20 h-20 mx-auto mb-6 text-[#0D47A1] border-4 border-[#0D47A1] rounded-xl flex items-center justify-center">
                    <FaEye className="w-10 h-10" />
                  </div>
                  <p className="text-[#546E7A] text-lg font-sans">
                    {t('hoverPreview')}
                    <br />
                    <span className="font-serif text-[#0D47A1] italic">
                      {t('hoverPreviewSubtitle')}
                    </span>
                  </p>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}