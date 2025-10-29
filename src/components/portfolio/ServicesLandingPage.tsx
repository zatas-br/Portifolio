'use client'

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { 
  FaCode, 
  FaPalette, 
  FaBullhorn,
  FaArrowRight,
  FaLaptopCode,
  FaMobileAlt,
  FaServer
} from 'react-icons/fa';
import { 
  MdDesignServices, 
  MdBrandingWatermark 
} from 'react-icons/md';
import { 
  HiSparkles 
} from 'react-icons/hi';
import { CATEGORIES } from '@/src/data/projects';
import { usePortfolioAnimations } from '@/src/hooks/usePortfolioAnimations';

// Ícones modernos para cada categoria
const categoryIcons: Record<string, React.ReactNode> = {
  'desenvolvimento': <FaCode className="w-16 h-16" />,
  'design': <FaPalette className="w-16 h-16" />,
  'marketing': <FaBullhorn className="w-16 h-16" />
};

// Ícones para as tags
const tagIcons: Record<string, React.ReactNode> = {
  'Web': <FaLaptopCode className="w-3 h-3" />,
  'Mobile': <FaMobileAlt className="w-3 h-3" />,
  'APIs': <FaServer className="w-3 h-3" />,
  'UI/UX': <MdDesignServices className="w-3 h-3" />,
  'Branding': <MdBrandingWatermark className="w-3 h-3" />,
  'Identidade': <HiSparkles className="w-3 h-3" />
};

export default function ServicesLandingPage() {
  const router = useRouter();
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const { animateFadeIn, animateEnter } = usePortfolioAnimations();

  useEffect(() => {
    animateFadeIn(headerRef.current, 0);
    animateEnter(cardsRef.current, 0.15);
  }, []);

  const categoryTags = [
    ['Web', 'Mobile', 'APIs'],
    ['UI/UX', 'Branding', 'Identidade'],
    ['SEO', 'Social Media', 'Conteúdo']
  ];

  return (
    <div className="min-h-screen bg-surface">
      {/* Header */}
      <div ref={headerRef} className="pt-24 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 bg-surface-alt border border-border text-text-muted px-4 py-2 rounded-full text-sm font-medium">
              <HiSparkles className="w-4 h-4 text-primary" />
              O que fazemos
            </span>
          </div>
          
          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-center mb-6">
            <span className="text-text">Transforme sua </span>
            <span className="text-primary">ideia</span>
            <br />
            <span className="text-text">em </span>
            <span className="bg-gradient-to-r from-start-gradient to-final-gradient bg-clip-text text-transparent">realidade</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg text-text-muted max-w-2xl mx-auto text-center leading-relaxed">
            Soluções completas em desenvolvimento, design e marketing digital
          </p>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-8">
          {CATEGORIES.map((category, index) => (
            <div
              key={category.id}
              ref={el => { cardsRef.current[index] = el; }}
              onClick={() => router.push(`/services/${category.id}`)}
              className="group cursor-pointer"
            >
              <div className="bg-surface border-2 border-border rounded-3xl p-8 h-full hover:border-primary transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                {/* Icon */}
                <div className="text-primary mb-6 group-hover:scale-110 group-hover:text-primary-hover transition-all duration-300">
                  {categoryIcons[category.id] || category.icon}
                </div>

                {/* Title */}
                <h2 className="text-3xl font-bold text-text mb-4 group-hover:text-primary transition-colors">
                  {category.title}
                </h2>

                {/* Description */}
                <p className="text-lg text-text-muted mb-8 leading-relaxed">
                  {category.description}
                </p>

                {/* CTA */}
                <div className="flex items-center gap-2 text-primary font-semibold cursor-pointer">
                  <span>Ver projetos</span>
                  <FaArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </div>

                {/* Decorative element with icons */}
                <div className="mt-8 pt-6 border-t border-border">
                  <div className="flex flex-wrap gap-3">
                    {categoryTags[index].map((tag) => (
                      <span 
                        key={tag}
                        className="flex items-center gap-1.5 text-sm text-text-muted bg-surface-alt px-3 py-1.5 rounded-full"
                      >
                        {tagIcons[tag]}
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats ou CTA adicional */}
        <div className="mt-20 text-center">
          <div className="bg-surface rounded-2xl p-12 border-2 border-border max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-text mb-4">
              Pronto para começar seu projeto?
            </h3>
            <p className="text-xl text-text-muted mb-8">
              Entre em contato e vamos transformar sua ideia em realidade
            </p>
            <button 
              onClick={() => router.push('/contact')}
              className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-hover active:bg-primary-active transition-colors shadow-lg hover:shadow-xl cursor-pointer"
            >
              Falar com a equipe <FaArrowRight className="inline-block ml-2 w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}