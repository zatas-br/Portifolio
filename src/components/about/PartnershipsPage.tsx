'use client'

import { useState, useEffect, useRef } from 'react';
import { 
  FaHandshake, 
  FaRocket, 
  FaChartLine,
  FaLightbulb,
  FaGlobeAmericas,
  FaUsers,
  FaTrophy,
  FaCode,
  FaPalette,
  FaBullhorn,
  FaEnvelope,
  FaCheckCircle,
  FaArrowRight,
  FaStar
} from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';
import { usePortfolioAnimations } from '@/src/hooks/usePortfolioAnimations';

export default function PartnershipsPage() {
  const headerRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);
  const { animateFadeIn, animateEnter } = usePortfolioAnimations();

  useEffect(() => {
    animateFadeIn(headerRef.current, 0);
    animateEnter(sectionsRef.current, 0.15);
  }, []);

  const partnershipTypes = [
    {
      icon: <FaHandshake className="w-12 h-12" />,
      title: 'Sócios Estratégicos',
      description: 'Procuramos parceiros que compartilham nossa visão de transformar o mercado digital com inovação e excelência.',
      benefits: ['Participação nos lucros', 'Decisões estratégicas', 'Crescimento compartilhado']
    },
    {
      icon: <FaRocket className="w-12 h-12" />,
      title: 'Investidores',
      description: 'Empresa em crescimento acelerado buscando investimento para expansão nacional e internacional.',
      benefits: ['ROI competitivo', 'Transparência total', 'Relatórios mensais']
    },
    {
      icon: <FaGlobeAmericas className="w-12 h-12" />,
      title: 'Parceiros Comerciais',
      description: 'Construa uma rede de negócios sólida conosco. Indicações, projetos conjuntos e crescimento mútuo.',
      benefits: ['Comissões atrativas', 'Suporte completo', 'Projetos exclusivos']
    }
  ];

  const whyPartner = [
    { icon: <FaChartLine />, title: 'Crescimento Acelerado', desc: '300% de crescimento nos últimos 2 anos' },
    { icon: <FaTrophy />, title: 'Portfólio de Elite', desc: 'Mais de 100 projetos de sucesso entregues' },
    { icon: <FaUsers />, title: 'Time Experiente', desc: '50+ profissionais altamente qualificados' },
    { icon: <FaLightbulb />, title: 'Inovação Constante', desc: 'Tecnologias de ponta e metodologias ágeis' }
  ];

  const expertiseAreas = [
    { icon: <FaCode />, title: 'Desenvolvimento', desc: 'Web, Mobile, APIs e Sistemas Complexos' },
    { icon: <FaPalette />, title: 'Design & UX', desc: 'Interfaces modernas e experiências memoráveis' },
    { icon: <FaBullhorn />, title: 'Marketing Digital', desc: 'Estratégias que convertem e engajam' }
  ];

  return (
    <div className="min-h-screen bg-surface">
      {/* Hero */}
      <div ref={headerRef} className="bg-gradient-to-br from-start-gradient to-final-gradient text-white py-20 md:py-28 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAxMmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Construa o Futuro <br className="hidden md:block" />
            <span className="text-white/90">com a Zatas</span>
          </h1>
          
          <p className="text-lg md:text-2xl opacity-90 leading-relaxed max-w-3xl mx-auto mb-8">
            Conecte-se com uma empresa em crescimento exponencial. Seja sócio, investidor ou parceiro estratégico.
          </p>
          
          {/* Stats Pills */}
          <div className="flex flex-wrap gap-3 md:gap-4 justify-center text-sm md:text-base">
            <div className="bg-white/20 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 rounded-full flex items-center gap-2">
              <FaChartLine className="w-4 h-4" />
              300% de crescimento
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 rounded-full flex items-center gap-2">
              <FaTrophy className="w-4 h-4" />
              100+ projetos entregues
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 rounded-full flex items-center gap-2">
              <FaGlobeAmericas className="w-4 h-4" />
              5 países atendidos
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        {/* Partnership Types */}
        <div ref={el => sectionsRef.current[0] = el} className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">Oportunidades de Parceria</h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              Escolha a melhor forma de fazer parte da nossa jornada de crescimento
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {partnershipTypes.map((type, index) => (
              <div key={index} className="bg-surface border-2 border-border rounded-2xl p-6 md:p-8 hover:border-primary transition-all hover:shadow-2xl hover:-translate-y-2 group">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  {type.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-text mb-4">{type.title}</h3>
                <p className="text-text-muted mb-6 leading-relaxed">{type.description}</p>
                <div className="space-y-2">
                  {type.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-text-muted">
                      <FaCheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Partner */}
        <div ref={el => sectionsRef.current[1] = el} className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">Por que fazer parceria conosco?</h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              Números e resultados que comprovam nosso potencial
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyPartner.map((item, index) => (
              <div key={index} className="bg-surface border-2 border-border rounded-2xl p-6 text-center hover:border-primary transition-all hover:shadow-lg group">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 text-primary text-2xl group-hover:bg-primary group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <h4 className="text-lg font-bold text-text mb-2">{item.title}</h4>
                <p className="text-sm text-text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Expertise Areas */}
        <div ref={el => sectionsRef.current[2] = el} className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">Nossa Expertise</h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              Três pilares que sustentam nosso sucesso e o dos nossos parceiros
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {expertiseAreas.map((area, index) => (
              <div key={index} className="bg-gradient-to-br from-start-gradient to-final-gradient border-2 border-border rounded-2xl p-8 text-center hover:border-primary transition-all hover:shadow-lg">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4 text-white text-2xl">
                  {area.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{area.title}</h4>
                <p className="text-gray">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Main CTA */}
        <div ref={el => sectionsRef.current[3] = el} className="mb-16">
          <div className="bg-gradient-to-br from-start-gradient to-final-gradient text-white rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAxMmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
            
            <div className="relative z-10">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FaHandshake className="w-10 h-10" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Vamos conversar?</h3>
              <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Entre em contato e descubra como podemos crescer juntos. Agende uma reunião sem compromisso.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="https://wa.me/5516000000000?text=Olá! Gostaria de conversar sobre parcerias"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white text-primary px-8 py-4 rounded-xl font-bold hover:bg-white/90 transition-all shadow-2xl hover:shadow-3xl hover:scale-105 cursor-pointer text-lg w-full sm:w-auto justify-center"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  WhatsApp
                </a>
                <a
                  href="mailto:parcerias@zatas.com.br"
                  className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-primary transition-all shadow-2xl hover:shadow-3xl hover:scale-105 cursor-pointer text-lg w-full sm:w-auto justify-center"
                >
                  <FaEnvelope className="w-5 h-5" />
                  E-mail
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary CTA - Join Team */}
        <div ref={el => sectionsRef.current[4] = el}>
          <div className="bg-surface-alt border-2 border-border rounded-2xl p-8 md:p-10 text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <FaUsers className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-text mb-4">Quer fazer parte do time?</h3>
            <p className="text-lg text-text-muted mb-6 max-w-xl mx-auto">
              Também estamos sempre em busca de talentos excepcionais
            </p>
            <a
              href="mailto:rh@zatas.com.br"
              className="inline-flex items-center gap-2 bg-surface text-primary border-2 border-primary px-6 py-3 rounded-xl font-semibold hover:bg-primary hover:text-white transition-all cursor-pointer"
            >
              Envie seu currículo
              <FaArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}