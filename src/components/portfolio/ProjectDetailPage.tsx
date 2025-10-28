// 📁 src/components/portfolio/ProjectDetailPage.tsx

'use client'

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import gsap from 'gsap';
import { PROJECTS } from '@/src/data/projects';
import { usePortfolioAnimations } from '@/src/hooks/usePortfolioAnimations';

interface ProjectDetailPageProps {
  projectId: string;
  category: string;
}

export default function ProjectDetailPage({ projectId, category }: ProjectDetailPageProps) {
  const router = useRouter();
  const project = PROJECTS.find(p => p.id === projectId);
  const headerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<(HTMLDivElement | null)[]>([]);
  const { animateFadeIn } = usePortfolioAnimations();

  useEffect(() => {
    animateFadeIn(headerRef.current, 0);
    animateFadeIn(heroRef.current, 0.1);
    animateFadeIn(contentRef.current, 0.2);
    gsap.fromTo(
      galleryRef.current.filter(Boolean),
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, stagger: 0.1, duration: 0.5, delay: 0.3, ease: 'power3.out' }
    );
  }, []);

  if (!project) return null;

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <button
            onClick={() => router.push(`/services/${category}`)}
            className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors font-medium"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Voltar para projetos
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Header */}
        <div ref={headerRef} className="mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">{project.title}</h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl">{project.description}</p>
          
          <div className="flex flex-wrap gap-8 text-gray-600">
            <div>
              <span className="block text-sm text-gray-400 mb-1">Ano</span>
              <span className="font-semibold text-gray-900">{project.year}</span>
            </div>
            <div>
              <span className="block text-sm text-gray-400 mb-1">Equipe</span>
              <span className="font-semibold text-gray-900">{project.author}</span>
            </div>
            {project.client && (
              <div>
                <span className="block text-sm text-gray-400 mb-1">Cliente</span>
                <span className="font-semibold text-gray-900">{project.client}</span>
              </div>
            )}
          </div>
        </div>

        {/* Hero Image */}
        <div ref={heroRef} className="mb-16 rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
          <img src={project.image} alt={project.title} className="w-full h-[500px] object-cover" />
        </div>

        {/* Content */}
        <div ref={contentRef} className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="md:col-span-2 space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Sobre o Projeto</h2>
              <p className="text-lg text-gray-600 leading-relaxed">{project.fullDescription}</p>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Tecnologias</h3>
              <div className="space-y-2">
                {project.technologies.map(tech => (
                  <div key={tech} className="bg-blue-50 border border-blue-100 text-blue-700 px-4 py-3 rounded-lg font-medium">
                    {tech}
                  </div>
                ))}
              </div>
            </div>

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-blue-600 text-white text-center py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold shadow-lg hover:shadow-xl"
              >
                Ver Projeto Live →
              </a>
            )}
          </div>
        </div>

        {/* Gallery */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Galeria do Projeto</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {project.gallery.map((img, index) => (
              <div
                key={index}
                ref={el => galleryRef.current[index] = el}
                className="rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-shadow"
              >
                <img src={img} alt={`${project.title} - ${index + 1}`} className="w-full h-80 object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}