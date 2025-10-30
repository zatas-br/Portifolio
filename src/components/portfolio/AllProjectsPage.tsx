// 📁 src/components/portfolio/AllProjectsPage.tsx

'use client'

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { PROJECTS_STATIC, CATEGORIES_STATIC } from '@/src/data/projects';
import { usePortfolioAnimations } from '@/src/hooks/usePortfolioAnimations';
import { useTranslations } from 'next-intl';

export default function AllProjectsPage() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const headerRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<(HTMLDivElement | null)[]>([]);
  const { animateFadeIn, animateEnter } = usePortfolioAnimations();

  const tPage = useTranslations('AllProjectsPage');
  const tCategories = useTranslations('Categories');
  const tProjects = useTranslations('Projects');

  const filteredProjects = selectedCategory === 'all'
    ? PROJECTS_STATIC
    : PROJECTS_STATIC.filter(p => p.category === selectedCategory);

  useEffect(() => {
    animateFadeIn(headerRef.current, 0);
  }, []);

  useEffect(() => {
    animateEnter(projectsRef.current, 0.1);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-white">
      <div ref={headerRef} className="bg-gradient-to-br from-start-gradient to-final-gradient border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">{tPage('title')}</h1>
          <p className="text-xl text-gray-600 mb-8">{tPage('subtitle')}</p>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                selectedCategory === 'all'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-600'
              }`}
            >
              {tPage('allButton')}
            </button>
            {CATEGORIES_STATIC.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-600'
                }`}
              >
                {tCategories(`${cat.id}.title`)}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            const title = tProjects(`${project.id}.title`);
            const description = tProjects(`${project.id}.description`);
            const client = tProjects(`${project.id}.client`);

            return (
              <div
                key={project.id}
                ref={el => { projectsRef.current[index] = el; }}
                onClick={() => router.push(`/services/${project.category}/${project.id}`)}
                className="group cursor-pointer"
              >
                <div className="bg-white border-2 border-gray-100 rounded-2xl overflow-hidden hover:border-blue-500 transition-all duration-300 hover:shadow-xl">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={project.image}
                      alt={title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map(tech => (
                        <span 
                          key={tech} 
                          className="text-xs font-medium bg-blue-50 text-blue-600 px-3 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="text-sm text-gray-500">{client}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}