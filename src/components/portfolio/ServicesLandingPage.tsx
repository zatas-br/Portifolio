// 📁 src/components/portfolio/ServicesLandingPage.tsx

'use client'

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { CATEGORIES } from '@/src/data/projects';
import { usePortfolioAnimations } from '@/src/hooks/usePortfolioAnimations';

export default function ServicesLandingPage() {
  const router = useRouter();
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const { animateFadeIn, animateEnter } = usePortfolioAnimations();

  useEffect(() => {
    animateFadeIn(headerRef.current, 0);
    animateEnter(cardsRef.current, 0.15);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50">
      {/* Header */}
      <div ref={headerRef} className="pt-20 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            Nossos Serviços
          </h1>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
            Transformamos ideias em realidade através de soluções criativas e tecnológicas
          </p>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-8">
          {CATEGORIES.map((category, index) => (
            <div
              key={category.id}
              ref={el => cardsRef.current[index] = el}
              onClick={() => router.push(`/services/${category.id}`)}
              className="group cursor-pointer"
            >
              <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 h-full hover:border-blue-500 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                {/* Icon */}
                <div className="text-7xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>

                {/* Title */}
                <h2 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {category.title}
                </h2>

                {/* Description */}
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {category.description}
                </p>

                {/* CTA */}
                <div className="flex items-center gap-2 text-blue-600 font-semibold">
                  <span>Ver projetos</span>
                  <svg 
                    className="w-5 h-5 group-hover:translate-x-2 transition-transform" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>

                {/* Decorative element */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <span className="text-sm text-gray-400">
                    {index === 0 && 'Web • Mobile • APIs'}
                    {index === 1 && 'UI/UX • Branding • Identidade'}
                    {index === 2 && 'SEO • Social Media • Conteúdo'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats ou CTA adicional */}
        <div className="mt-20 text-center">
          <div className="bg-white rounded-2xl p-12 border-2 border-gray-200 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Pronto para começar seu projeto?
            </h3>
            <p className="text-xl text-gray-600 mb-8">
              Entre em contato e vamos transformar sua ideia em realidade
            </p>
            <button 
              onClick={() => router.push('/contact')}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Falar com a equipe →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}