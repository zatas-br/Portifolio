// 📁 src/components/about/CareersPage.tsx

'use client'

import { useState, useEffect, useRef } from 'react';
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

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div ref={headerRef} className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-6xl font-bold mb-6">Carreiras na Zatas</h1>
          <p className="text-2xl opacity-90 leading-relaxed max-w-3xl mx-auto mb-8">
            Junte-se a nós e ajude a construir o futuro da tecnologia
          </p>
          <div className="flex flex-wrap gap-4 justify-center text-lg">
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
              ✨ Ambiente inovador
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
              🚀 Crescimento rápido
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
              💙 Time incrível
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* Why Join Us */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">Por que trabalhar conosco?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Impacto Real</h3>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Projetos Desafiadores</h3>
              <p className="text-gray-600">Trabalhe em projetos que realmente fazem a diferença</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">📚</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Aprendizado Contínuo</h3>
              <p className="text-gray-600">Budget para cursos, eventos e certificações</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Flexibilidade</h3>
              <p className="text-gray-600">Trabalho remoto ou híbrido, você escolhe</p>
            </div>
          </div>
        </div>

        {/* Job Listings */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Vagas Abertas</h2>
          <div className="space-y-6">
            {JOBS.map((job, index) => (
              <div
                key={job.id}
                ref={el => jobsRef.current[index] = el}
                className="group cursor-pointer"
                onClick={() => setSelectedJob(job)}
              >
                <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-blue-500 transition-all duration-300 hover:shadow-lg">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-3 text-sm">
                        <span className="flex items-center gap-1 text-gray-600">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          {job.department}
                        </span>
                        <span className="flex items-center gap-1 text-gray-600">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {job.location}
                        </span>
                        <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full font-medium">
                          {job.type === 'full-time' ? 'Full-time' : job.type === 'part-time' ? 'Part-time' : 'Freelance'}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-blue-600 font-semibold whitespace-nowrap">
                      Ver detalhes
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-gray-600">{job.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 bg-gradient-to-br from-blue-50 to-gray-50 rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Não encontrou a vaga ideal?</h3>
          <p className="text-xl text-gray-600 mb-8">
            Envie seu currículo para nosso banco de talentos
          </p>
          <a
            href="mailto:carreiras@zatas.com.br"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Enviar Currículo
          </a>
        </div>
      </div>

      {/* Job Detail Modal */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-4xl w-full my-8 relative">
            {/* Close Button */}
            <button
              onClick={() => setSelectedJob(null)}
              className="absolute top-6 right-6 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors z-10"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="p-12">
              {/* Header */}
              <div className="mb-8">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">{selectedJob.title}</h2>
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="flex items-center gap-2 text-gray-600">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    {selectedJob.department}
                  </span>
                  <span className="flex items-center gap-2 text-gray-600">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {selectedJob.location}
                  </span>
                  <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium">
                    {selectedJob.type === 'full-time' ? 'Full-time' : selectedJob.type === 'part-time' ? 'Part-time' : 'Freelance'}
                  </span>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">{selectedJob.description}</p>
              </div>

              {/* Requirements */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Requisitos</h3>
                <ul className="space-y-3">
                  {selectedJob.requirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600">
                      <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Benefícios</h3>
                <ul className="space-y-3">
                  {selectedJob.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600">
                      <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="bg-blue-50 border-2 border-blue-100 rounded-2xl p-8 text-center">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Interessado nesta vaga?</h4>
                <p className="text-gray-600 mb-6">Envie seu currículo e portfólio para nossa equipe de recrutamento</p>
                <a
                  href={`mailto:carreiras@zatas.com.br?subject=Candidatura para ${selectedJob.title}`}
                  className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
                >
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