'use client'

import { useState, useEffect, useRef } from 'react';
import { 
  FaBriefcase, 
  FaMapMarkerAlt, 
  FaCheckCircle, 
  FaClock,
  FaRocket,
  FaBook,
  FaGlobeAmericas,
  FaEnvelope,
  FaTimes,
  FaArrowRight,
  FaBuilding
} from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';
import { JOBS } from '@/src/data/team';
import { Job } from '@/types';
import { usePortfolioAnimations } from '@/src/hooks/usePortfolioAnimations';

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const jobsRef = useRef<(HTMLDivElement | null)[]>([]);
  const { animateFadeIn, animateEnter } = usePortfolioAnimations();

  useEffect(() => {
    animateFadeIn(headerRef.current, 0);
    animateEnter(jobsRef.current, 0.15);
  }, []);

  useEffect(() => {
    if (selectedJob) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedJob]);

  const typeLabels = {
    'full-time': 'Full-time',
    'part-time': 'Part-time',
    'freelance': 'Freelance'
  };

  return (
    <div className="min-h-screen bg-surface">
      {/* Hero */}
      <div ref={headerRef} className="bg-gradient-to-br from-primary to-primary-hover text-white py-20 md:py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
              <HiSparkles className="w-4 h-4" />
              Faça parte do time
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">Carreiras na Zatas</h1>
          <p className="text-lg md:text-2xl opacity-90 leading-relaxed max-w-3xl mx-auto mb-8">
            Junte-se a nós e ajude a construir o futuro da tecnologia
          </p>
          
          {/* Benefits Pills */}
          <div className="flex flex-wrap gap-3 md:gap-4 justify-center text-sm md:text-base">
            <div className="bg-white/20 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 rounded-full flex items-center gap-2">
              <HiSparkles className="w-4 h-4" />
              Ambiente inovador
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 rounded-full flex items-center gap-2">
              <FaRocket className="w-4 h-4" />
              Crescimento rápido
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 rounded-full flex items-center gap-2">
              <FaCheckCircle className="w-4 h-4" />
              Time incrível
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        {/* Why Join Us */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-8 text-center">Por que trabalhar conosco?</h2>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-surface border-2 border-border rounded-2xl p-6 md:p-8 text-center hover:border-primary transition-all hover:shadow-lg">
              <div className="w-16 h-16 bg-surface-alt rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FaRocket className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-text mb-3">Impacto Real</h3>
              <p className="text-text-muted leading-relaxed">Trabalhe em projetos que realmente fazem a diferença</p>
            </div>
            <div className="bg-surface border-2 border-border rounded-2xl p-6 md:p-8 text-center hover:border-primary transition-all hover:shadow-lg">
              <div className="w-16 h-16 bg-surface-alt rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FaBook className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-text mb-3">Aprendizado Contínuo</h3>
              <p className="text-text-muted leading-relaxed">Budget para cursos, eventos e certificações</p>
            </div>
            <div className="bg-surface border-2 border-border rounded-2xl p-6 md:p-8 text-center hover:border-primary transition-all hover:shadow-lg">
              <div className="w-16 h-16 bg-surface-alt rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FaGlobeAmericas className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-text mb-3">Flexibilidade</h3>
              <p className="text-text-muted leading-relaxed">Trabalho remoto ou híbrido, você escolhe</p>
            </div>
          </div>
        </div>

        {/* Job Listings */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <FaBriefcase className="w-6 h-6 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-text">Vagas Abertas</h2>
          </div>
          <div className="space-y-4 md:space-y-6">
            {JOBS.map((job, index) => (
              <div
                key={job.id}
                ref={el => jobsRef.current[index] = el}
                className="group cursor-pointer"
                onClick={() => setSelectedJob(job)}
              >
                <div className="bg-surface border-2 border-border rounded-2xl p-6 md:p-8 hover:border-primary transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-text mb-3 group-hover:text-primary transition-colors">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-3 text-sm">
                        <span className="flex items-center gap-2 text-text-muted bg-surface-alt px-3 py-1.5 rounded-full">
                          <FaBuilding className="w-3 h-3 text-primary" />
                          {job.department}
                        </span>
                        <span className="flex items-center gap-2 text-text-muted bg-surface-alt px-3 py-1.5 rounded-full">
                          <FaMapMarkerAlt className="w-3 h-3 text-primary" />
                          {job.location}
                        </span>
                        <span className="bg-primary/10 text-primary border border-primary/20 px-3 py-1.5 rounded-full font-medium">
                          <FaClock className="w-3 h-3 inline mr-1" />
                          {typeLabels[job.type]}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-primary font-semibold whitespace-nowrap cursor-pointer">
                      Ver detalhes
                      <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                  <p className="text-text-muted leading-relaxed">{job.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 bg-gradient-to-br from-surface-alt to-surface border-2 border-border rounded-3xl p-8 md:p-12 text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <FaEnvelope className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-text mb-4">Não encontrou a vaga ideal?</h3>
          <p className="text-lg md:text-xl text-text-muted mb-8 max-w-2xl mx-auto">
            Envie seu currículo para nosso banco de talentos
          </p>
          <a
            href="mailto:carreiras@zatas.com.br"
            className="inline-flex items-center gap-2 bg-primary text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold hover:bg-primary-hover active:bg-primary-active transition-colors shadow-lg hover:shadow-xl cursor-pointer"
          >
            <FaEnvelope className="w-4 h-4" />
            Enviar Currículo
          </a>
        </div>
      </div>

      {/* Job Detail Modal */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-surface rounded-3xl max-w-4xl w-full my-8 relative border-2 border-border">
            {/* Close Button */}
            <button
              onClick={() => setSelectedJob(null)}
              className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 bg-surface-alt hover:bg-border rounded-full flex items-center justify-center transition-colors z-10 cursor-pointer"
            >
              <FaTimes className="w-5 h-5 text-text" />
            </button>

            <div className="p-8 md:p-12">
              {/* Header */}
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-text mb-4 pr-12">{selectedJob.title}</h2>
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="flex items-center gap-2 text-text-muted bg-surface-alt px-4 py-2 rounded-full">
                    <FaBuilding className="w-4 h-4 text-primary" />
                    {selectedJob.department}
                  </span>
                  <span className="flex items-center gap-2 text-text-muted bg-surface-alt px-4 py-2 rounded-full">
                    <FaMapMarkerAlt className="w-4 h-4 text-primary" />
                    {selectedJob.location}
                  </span>
                  <span className="bg-primary/10 text-primary border border-primary/20 px-4 py-2 rounded-full font-medium">
                    <FaClock className="w-4 h-4 inline mr-1" />
                    {typeLabels[selectedJob.type]}
                  </span>
                </div>
                <p className="text-base md:text-lg text-text-muted leading-relaxed">{selectedJob.description}</p>
              </div>

              {/* Requirements */}
              <div className="mb-8">
                <h3 className="text-xl md:text-2xl font-bold text-text mb-4">Requisitos</h3>
                <ul className="space-y-3">
                  {selectedJob.requirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-3 text-text-muted">
                      <FaCheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div className="mb-8">
                <h3 className="text-xl md:text-2xl font-bold text-text mb-4">Benefícios</h3>
                <ul className="space-y-3">
                  {selectedJob.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3 text-text-muted">
                      <FaCheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="bg-surface-alt border-2 border-border rounded-2xl p-6 md:p-8 text-center">
                <h4 className="text-xl md:text-2xl font-bold text-text mb-4">Interessado nesta vaga?</h4>
                <p className="text-text-muted mb-6">Envie seu currículo e portfólio para nossa equipe de recrutamento</p>
                <a
                  href={`mailto:carreiras@zatas.com.br?subject=Candidatura para ${selectedJob.title}`}
                  className="inline-flex items-center gap-2 bg-primary text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold hover:bg-primary-hover active:bg-primary-active transition-colors shadow-lg hover:shadow-xl cursor-pointer"
                >
                  <FaEnvelope className="w-4 h-4" />
                  Candidatar-se Agora
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}