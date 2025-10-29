'use client'

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { 
  FaCode, 
  FaPalette, 
  FaBullhorn,
  FaArrowRight,
  FaExternalLinkAlt,
  FaFolder
} from 'react-icons/fa';
import { PROJECTS, CATEGORIES } from '@/src/data/projects';
import { usePortfolioAnimations } from '@/src/hooks/usePortfolioAnimations';
import { useTranslations } from 'next-intl';
import { Category, Project } from '@/types';
import gsap from 'gsap';

interface CategoryProjectsPageProps {
  category: 'desenvolvimento' | 'design' | 'marketing';
  projects: Project[];
  categoryDetails: Category | undefined;
}

const categoryIcons: Record<string, React.ReactNode> = {
  'desenvolvimento': <FaCode className="w-12 h-12" />,
  'design': <FaPalette className="w-12 h-12" />,
  'marketing': <FaBullhorn className="w-12 h-12" />
};

export default function CategoryProjectsPage({ category }: CategoryProjectsPageProps) {
  const t = useTranslations('CategoryProjectsPage');
  const router = useRouter();
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<(HTMLDivElement | null)[]>([]);
  const { animateFadeIn } = usePortfolioAnimations();
  
  // Flag para controlar se as animações iniciais já foram executadas
  const animationsExecutedRef = useRef(false);

  const filteredProjects = PROJECTS.filter(p => p.category === category);
  const categoryData = CATEGORIES.find(c => c.id === category);

  // Animações iniciais - executam apenas uma vez
  useEffect(() => {
    if (animationsExecutedRef.current) return;
    
    animateFadeIn(headerRef.current, 0);
    gsap.fromTo(
      projectsRef.current.filter(Boolean),
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, stagger: 0.1, duration: 0.5, delay: 0.2, ease: 'power3.out' }
    );
    
    animationsExecutedRef.current = true;
  }, [animateFadeIn]);

  const hoveredProjectData = filteredProjects.find(p => p.id === hoveredProject);

  const handleProjectClick = (projectId: string) => {
    router.push(`/services/${category}/${projectId}`);
  };

  return (
    <div className="min-h-screen bg-surface">
      {/* Header */}
      <div ref={headerRef} className="bg-gradient-to-br from-start-gradient to-final-gradient border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-4">
            <div className="text-white">
              {categoryIcons[category]}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              {categoryData?.title}
            </h1>
          </div>
          <p className="text-base sm:text-lg text-gray max-w-2xl leading-relaxed">
            {categoryData?.description}
          </p>
          <div className="mt-6 sm:mt-8 flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <FaFolder className="w-4 h-4 text-white" />
              <span className="text-gray">
                <strong className="text-white font-semibold">{filteredProjects.length}</strong> {t('projects')}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Lista de Projetos */}
          <div className="space-y-4 sm:space-y-6">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                ref={el => { projectsRef.current[index] = el; }}
                onClick={() => handleProjectClick(project.id)}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className="group cursor-pointer"
              >
                <div className="bg-surface border-2 border-border hover:border-primary rounded-2xl p-4 sm:p-6 transition-all duration-300 hover:shadow-2xl">
                  {/* Imagem Mobile */}
                  <div className="lg:hidden mb-4 rounded-xl overflow-hidden bg-surface-alt">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-text mb-3 group-hover:text-primary transition-colors flex items-center gap-2">
                    {project.title}
                    <FaExternalLinkAlt className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-sm sm:text-base text-text-muted mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tags de Tecnologia */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map(tech => (
                      <span 
                        key={tech} 
                        className="text-xs font-medium bg-surface-alt text-primary border border-border px-3 py-1.5 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-xs font-medium text-text-muted px-3 py-1.5">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Footer */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 text-sm pt-4 border-t border-border">
                    <span className="text-text-muted">{project.client}</span>
                    <span className="flex items-center gap-2 text-primary font-semibold">
                      {t('viewProject')} 
                      <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Preview de Imagem - Desktop Only com Info Sobreposta */}
          <div className="hidden lg:block sticky top-24 self-start">
            <div className="relative w-full aspect-[4/3] bg-surface-alt rounded-2xl overflow-hidden shadow-2xl border-2 border-border">
              {/* Imagem */}
              {hoveredProjectData ? (
                <img
                  src={hoveredProjectData.image}
                  alt={hoveredProjectData.title}
                  className="w-full h-full object-cover transition-all duration-500"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center">
                  <FaFolder className="w-16 h-16 text-primary mb-4 opacity-50" />
                  <p className="text-text-muted text-lg font-medium mb-2">
                    {t('hoverPreview')}
                  </p>
                  <p className="text-text-muted text-sm opacity-75">
                    {t('hoverPreviewSubtitle')}
                  </p>
                </div>
              )}

              {/* Info Card Sobreposta - Aparece apenas com hover */}
              <div 
                className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-6 transition-all duration-300 ${
                  hoveredProjectData ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
                }`}
              >
                {hoveredProjectData && (
                  <div className="text-white">
                    <p className="text-xs uppercase tracking-wider text-white/70 mb-1">
                      {t('preview')}
                    </p>
                    <h3 className="text-xl font-bold mb-2">
                      {hoveredProjectData.title}
                    </h3>
                    <p className="text-sm text-white/90 line-clamp-2 mb-3">
                      {hoveredProjectData.description}
                    </p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-white/80">{hoveredProjectData.client}</span>
                      <span className="flex items-center gap-1 text-white font-medium">
                        Ver detalhes
                        <FaArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}