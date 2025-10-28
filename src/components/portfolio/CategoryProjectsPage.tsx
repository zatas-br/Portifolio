// 📁 src/components/portfolio/CategoryProjectsPage.tsx

'use client'

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import gsap from 'gsap';
import { PROJECTS, CATEGORIES } from '@/src/data/projects';
import { usePortfolioAnimations } from '@/src/hooks/usePortfolioAnimations';

interface CategoryProjectsPageProps {
  category: 'desenvolvimento' | 'design' | 'marketing';
}

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
    if (hoveredProject && imageRef.current) {
      gsap.to(imageRef.current, { opacity: 1, scale: 1, duration: 0.4, ease: 'power2.out' });
    } else if (imageRef.current) {
      gsap.to(imageRef.current, { opacity: 0, scale: 0.95, duration: 0.3 });
    }
  }, [hoveredProject]);

  const hoveredProjectData = filteredProjects.find(p => p.id === hoveredProject);

  const handleProjectClick = (projectId: string) => {
    router.push(`/services/${category}/${projectId}`);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div ref={headerRef} className="bg-gradient-to-br from-blue-50 to-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-5xl">{categoryData?.icon}</span>
            <h1 className="text-5xl font-bold text-gray-900">{categoryData?.title}</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl">{categoryData?.description}</p>
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
                <div className="bg-white border-2 border-gray-100 hover:border-blue-500 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg">
                  {/* Mobile Image */}
                  <div className="lg:hidden mb-4 rounded-xl overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map(tech => (
                      <span 
                        key={tech} 
                        className="text-xs font-medium bg-blue-50 text-blue-600 px-3 py-1.5 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{project.client}</span>
                    <span className="flex items-center gap-1 text-blue-600 font-medium">
                      Ver projeto 
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
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
              className="w-full aspect-[4/3] bg-gray-50 rounded-2xl overflow-hidden shadow-xl opacity-0 border border-gray-100"
            >
              {hoveredProjectData && (
                <img
                  src={hoveredProjectData.image}
                  alt={hoveredProjectData.title}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            {hoveredProjectData && (
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500">Preview de {hoveredProjectData.title}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}