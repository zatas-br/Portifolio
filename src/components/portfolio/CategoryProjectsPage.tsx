'use client'

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
// import gsap from 'gsap'; // Comentado para depuração
import { 
  FaCode, 
  FaPalette, 
  FaBullhorn,
  FaArrowRight,
  FaExternalLinkAlt,
  FaFolder
} from 'react-icons/fa';
// import { usePortfolioAnimations } from '@/src/hooks/usePortfolioAnimations'; // Comentado para depuração
import { Project, Category } from '@/types';

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

export default function CategoryProjectsPage({ category, projects, categoryDetails }: CategoryProjectsPageProps) {
  const router = useRouter();
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  // const headerRef = useRef<HTMLDivElement>(null); // Comentado para depuração
  // const projectsRef = useRef<(HTMLDivElement | null)[]>([]); // Comentado para depuração
  // const imageRef = useRef<HTMLDivElement>(null); // Comentado para depuração
  // const { animateFadeIn } = usePortfolioAnimations(); // Comentado para depuração

  // useEffect(() => {
  //   animateFadeIn(headerRef.current, 0);
  //   gsap.fromTo(
  //     projectsRef.current.filter(Boolean),
  //     { opacity: 0, x: -20 },
  //     { opacity: 1, x: 0, stagger: 0.1, duration: 0.5, delay: 0.2, ease: 'power3.out' }
  //   );
  // }, [projects]);

  // useEffect(() => {
  //   if (imageRef.current) {
  //     gsap.to(imageRef.current, { 
  //       opacity: 1, 
  //       scale: hoveredProject ? 1 : 0.98, 
  //       duration: 0.4, 
  //       ease: 'power2.out' 
  //     });
  //   }
  // }, [hoveredProject]);

  const hoveredProjectData = projects.find(p => p.id === hoveredProject);

  const handleProjectClick = (projectId: string) => {
    router.push(`/services/${category}/${projectId}`);
  };

  return (
    <div className="min-h-screen bg-surface">
      {/* Header */}
      <div /*ref={headerRef}*/ className="bg-gradient-to-br from-start-gradient to-final-gradient border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-4">
            <div className="text-white">
              {categoryIcons[category]}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              {categoryDetails?.title}
            </h1>
          </div>
          <p className="text-base sm:text-lg text-gray max-w-2xl leading-relaxed">
            {categoryDetails?.description}
          </p>
          <div className="mt-6 sm:mt-8 flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <FaFolder className="w-4 h-4 text-white" />
              <span className="text-gray">
                <strong className="text-white font-semibold">{projects.length}</strong> projetos
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="space-y-4 sm:space-y-6">
            {projects.map((project, index) => (
              <div
                key={project.id}
                // ref={el => { projectsRef.current[index] = el; }} // Comentado para depuração
                onClick={() => handleProjectClick(project.id)}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className="group cursor-pointer"
              >
                <div className="bg-surface border-2 border-border hover:border-primary  rounded-2xl p-4 sm:p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                  <div className="lg:hidden mb-4 rounded-xl overflow-hidden bg-surface-alt">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-text mb-3 group-hover:primary transition-colors flex items-center gap-2">
                    {project.title}
                    <FaExternalLinkAlt className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-sm sm:text-base text-text-muted mb-4 leading-relaxed">
                    {project.description}
                  </p>
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
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 text-sm pt-4 border-t border-border">
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
          <div className="hidden lg:block sticky top-24 self-start">
            <div 
              // ref={imageRef} // Comentado para depuração
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
            <div className={`mt-6 p-4 bg-surface border border-border rounded-xl transition-all duration-300 ${hoveredProjectData ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
              {hoveredProjectData && (
                <>
                  <p className="text-sm text-text-muted mb-1">Preview</p>
                  <p className="text-text font-semibold">{hoveredProjectData.title}</p>
                  <p className="text-sm text-text-muted mt-2 line-clamp-2">{hoveredProjectData.description}</p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
