'use client'

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import gsap from 'gsap';
import { 
  FaArrowLeft, 
  FaExternalLinkAlt, 
  FaCalendar, 
  FaUsers, 
  FaBriefcase,
  FaCode,
  FaImages,
  FaUser
} from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';
import { PROJECTS } from '@/src/data/projects';
import { usePortfolioAnimations } from '@/src/hooks/usePortfolioAnimations';
import AuthorCard from '@/src/components/portfolio/AuthorCard';

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

  // Determinar se há autores para exibir
  const hasAuthors = project.authors && project.authors.length > 0;
  const isSingleAuthor = hasAuthors && project.authors!.length === 1;

  return (
    <div className="min-h-screen bg-surface">
      {/* Back Button */}
      <div className="border-b border-border bg-surface sticky top-0 z-10 backdrop-blur-sm bg-surface/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
          <button
            onClick={() => router.push(`/services/${category}`)}
            className="flex items-center gap-2 text-text-muted hover:text-primary transition-colors font-medium cursor-pointer group"
          >
            <FaArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Voltar para projetos
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        {/* Header */}
        <div ref={headerRef} className="mb-12">
          {/* Badge */}
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-2 bg-surface-alt border border-border text-text-muted px-4 py-2 rounded-full text-sm font-medium">
              <HiSparkles className="w-4 h-4 text-primary" />
              Estudo de Caso
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-text mb-6 leading-tight">
            {project.title}
          </h1>
          
          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-text-muted mb-8 leading-relaxed max-w-3xl">
            {project.description}
          </p>
          
          {/* Meta Info */}
          <div className="flex flex-wrap gap-6 text-text-muted mb-8">
            <div className="flex items-center gap-2">
              <FaCalendar className="w-4 h-4 text-primary" />
              <div>
                <span className="block text-xs text-text-muted mb-0.5">Ano</span>
                <span className="font-semibold text-text">{project.year}</span>
              </div>
            </div>
            {project.client && (
              <div className="flex items-center gap-2">
                <FaBriefcase className="w-4 h-4 text-primary" />
                <div>
                  <span className="block text-xs text-text-muted mb-0.5">Cliente</span>
                  <span className="font-semibold text-text">{project.client}</span>
                </div>
              </div>
            )}
          </div>

          {/* Authors Section */}
          {hasAuthors && (
            <div className="bg-surface-alt border border-border rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-2 mb-6">
                {isSingleAuthor ? (
                  <FaUser className="w-5 h-5 text-primary" />
                ) : (
                  <FaUsers className="w-5 h-5 text-primary" />
                )}
                <h3 className="text-xl font-bold text-text">
                  {isSingleAuthor ? 'Responsável pelo Projeto' : 'Equipe do Projeto'}
                </h3>
              </div>

              {/* Grid responsivo baseado no número de autores */}
              <div className={`grid gap-4 ${
                isSingleAuthor 
                  ? 'sm:grid-cols-1' 
                  : project.authors!.length === 2
                    ? 'sm:grid-cols-2'
                    : 'sm:grid-cols-2 lg:grid-cols-3'
              }`}>
                {project.authors!.map((author, index) => (
                  <AuthorCard 
                    key={index} 
                    author={author} 
                    variant="default"
                  />
                ))}
              </div>
            </div>
          )}

          {/* Fallback para projetos antigos sem campo authors */}
          {!hasAuthors && project.author && (
            <div className="bg-surface-alt border border-border rounded-2xl p-6">
              <div className="flex items-center gap-2">
                <FaUser className="w-4 h-4 text-primary" />
                <span className="text-sm text-text-muted">Criado por:</span>
                <span className="font-semibold text-text">{project.author}</span>
              </div>
            </div>
          )}
        </div>

        {/* Hero Image */}
        <div ref={heroRef} className="mb-16 rounded-2xl overflow-hidden shadow-2xl border-2 border-border group">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover group-hover:scale-105 transition-transform duration-500" 
          />
        </div>

        {/* Content */}
        <div ref={contentRef} className="grid md:grid-cols-3 gap-8 md:gap-12 mb-16">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
            <div className="bg-surface border border-border rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-2 mb-4">
                <FaCode className="w-5 h-5 text-primary" />
                <h2 className="text-2xl md:text-3xl font-bold text-text">Sobre o Projeto</h2>
              </div>
              <p className="text-base md:text-lg text-text-muted leading-relaxed">
                {project.fullDescription}
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Technologies */}
            <div className="bg-surface border border-border rounded-2xl p-6">
              <h3 className="text-lg font-bold text-text mb-4 flex items-center gap-2">
                <FaCode className="w-4 h-4 text-primary" />
                Tecnologias
              </h3>
              <div className="space-y-2">
                {project.technologies.map(tech => (
                  <div 
                    key={tech} 
                    className="bg-surface-alt border border-border text-primary px-4 py-3 rounded-lg font-medium text-sm hover:border-primary transition-colors"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-primary text-white py-4 rounded-xl hover:bg-primary-hover active:bg-primary-active transition-colors font-semibold shadow-lg hover:shadow-xl cursor-pointer"
              >
                Ver Projeto Live
                <FaExternalLinkAlt className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <div>
            <div className="flex items-center gap-3 mb-8">
              <FaImages className="w-6 h-6 text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold text-text">Galeria do Projeto</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              {project.gallery.map((img, index) => (
                <div
                  key={index}
                  ref={el => galleryRef.current[index] = el}
                  className="rounded-xl overflow-hidden shadow-lg border-2 border-border hover:shadow-2xl hover:border-primary transition-all duration-300 group cursor-pointer"
                >
                  <img 
                    src={img} 
                    alt={`${project.title} - ${index + 1}`} 
                    className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Navigation Footer */}
        <div className="mt-16 pt-8 border-t border-border">
          <button
            onClick={() => router.push(`/services/${category}`)}
            className="flex items-center gap-2 text-primary hover:text-primary-hover transition-colors font-semibold cursor-pointer group mx-auto"
          >
            <FaArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Ver mais projetos de {category}
          </button>
        </div>
      </div>
    </div>
  );
}