'use client'

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import gsap from 'gsap';
import { 
  FaCode, 
  FaPalette, 
  FaBullhorn,
  FaArrowRight,
  FaExternalLinkAlt,
  FaFolder
} from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';
import { PROJECTS, CATEGORIES } from '@/src/data/projects';
import { usePortfolioAnimations } from '@/src/hooks/usePortfolioAnimations';

interface CategoryProjectsPageProps {
  category: 'desenvolvimento' | 'design' | 'marketing';
}

// Ícones para cada categoria
const categoryIcons: Record<string, React.ReactNode> = {
  'desenvolvimento': <FaCode className="w-12 h-12" />,
  'design': <FaPalette className="w-12 h-12" />,
  'marketing': <FaBullhorn className="w-12 h-12" />
};

export default function CategoryProjectsPage({ category }: CategoryProjectsPageProps) {
  const router = useRouter();
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<(HTMLDivElement | null)[]>([]);
  const imageRef = useRef<HTMLDivElement>(null);
  const { animateFadeIn } = usePortfolioAnimations();

  const filteredProjects = PROJECTS.filter(p => p.category === category);
  const categoryData = CATEGORIES.find(c => c.id === category);

  useEffect(() => {
    animateFadeIn(headerRef.current, 0);
    gsap.fromTo(
      projectsRef.current.filter(Boolean),
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, stagger: 0.1, duration: 0.5, delay: 0.2, ease: 'power3.out' }
    );
  }, []);

  useEffect(() => {
    if (imageRef.current) {
      gsap.to(imageRef.current, { 
        opacity: 1, 
        scale: hoveredProject ? 1 : 0.98, 
        duration: 0.4, 
        ease: 'power2.out' 
      });
    }
  }, [hoveredProject]);

  const hoveredProjectData = filteredProjects.find(p => p.id === hoveredProject);

  const handleProjectClick = (projectId: string) => {
    router.push(`/services/${category}/${projectId}`);
  };

  return (
    <div className="min-h-screen bg-surface">
      {/* Header */}
      <div ref={headerRef} className="bg-gradient-to-br from-surface-alt to-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-16">
          {/* Title with Icon */}
          <div className="flex items-center gap-4 mb-4">
            <div className="text-primary">
              {categoryIcons[category]}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-text">
              {categoryData?.title}
            </h1>
          </div>
          
          <p className="text-lg text-text-muted max-w-2xl leading-relaxed">
            {categoryData?.description}
          </p>

          {/* Stats */}
          <div className="mt-8 flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <FaFolder className="w-4 h-4 text-primary" />
              <span className="text-text-muted">
                <strong className="text-text font-semibold">{filteredProjects.length}</strong> projetos
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Lista de Projetos */}
          <div className="space-y-6">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                ref={el => projectsRef.current[index] = el}
                onClick={() => handleProjectClick(project.id)}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className="group cursor-pointer"
              >
                <div className="bg-surface border-2 border-border hover:border-primary rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                  {/* Mobile Image */}
                  <div className="lg:hidden mb-4 rounded-xl overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-text mb-3 group-hover:text-primary transition-colors flex items-center gap-2">
                    {project.title}
                    <FaExternalLinkAlt className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>

                  {/* Description */}
                  <p className="text-text-muted mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
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
                  <div className="flex items-center justify-between text-sm pt-4 border-t border-border">
                    <span className="text-text-muted">{project.client}</span>
                    <span className="flex items-center gap-2 text-primary font-semibold">
                      Ver projeto 
                      <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Preview de Imagem - Desktop Only */}
          <div className="hidden lg:block sticky top-24 h-fit">
            <div 
              ref={imageRef}
              className="w-full aspect-[4/3] bg-surface-alt rounded-2xl overflow-hidden shadow-2xl border-2 border-border"
            >
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
                    Passe o mouse sobre um projeto
                  </p>
                  <p className="text-text-muted text-sm opacity-75">
                    para visualizar a prévia
                  </p>
                </div>
              )}
            </div>
            
            {/* Info abaixo da imagem */}
            {hoveredProjectData && (
              <div className="mt-6 p-4 bg-surface border border-border rounded-xl">
                <p className="text-sm text-text-muted mb-1">Preview</p>
                <p className="text-text font-semibold">{hoveredProjectData.title}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}