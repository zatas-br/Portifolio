'use client'

import { useEffect, useRef } from 'react';
import { 
  FaRocket, 
  FaEye, 
  FaHeart,
  FaUsers,
  FaProjectDiagram,
  FaGlobeAmericas,
  FaAward,
  FaLightbulb,
  FaStar,
  FaHandshake,
  FaChartLine,
  FaBalanceScale
} from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';
import { usePortfolioAnimations } from '@/src/hooks/usePortfolioAnimations';
import { useMessages, useTranslations } from 'next-intl';

type Messages = {
  CompanyPage: {
    history: string[];
  };
};

export default function CompanyPage() {
  const t = useTranslations('CompanyPage');
  const messages = useMessages() as Messages;
  const historyParagraphs = messages.CompanyPage.history;
  
  const heroRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);
  const { animateFadeIn, animateEnter } = usePortfolioAnimations();

  useEffect(() => {
    animateFadeIn(heroRef.current, 0);
    animateEnter(sectionsRef.current, 0.2);
  }, []);

  const cultureValues = [
    { icon: <FaLightbulb />, title: 'Autonomia', desc: 'Confiamos em nosso time para tomar decisões' },
    { icon: <FaStar />, title: 'Aprendizado', desc: 'Incentivamos crescimento contínuo' },
    { icon: <FaUsers />, title: 'Diversidade', desc: 'Celebramos diferentes perspectivas' },
    { icon: <FaHandshake />, title: 'Transparência', desc: 'Comunicação aberta em todos os níveis' },
    { icon: <FaBalanceScale />, title: 'Work-life balance', desc: 'Equilíbrio entre vida pessoal e profissional' },
    { icon: <FaChartLine />, title: 'Impacto', desc: 'Foco em resultados que importam' }
  ];

  return (
    <div className="min-h-screen bg-surface">
      {/* Hero */}
      <div ref={heroRef} className="bg-gradient-to-br from-start-gradient to-final-gradient text-white py-20 md:py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{t('title')}</h1>
          <p className="text-lg md:text-2xl opacity-90 leading-relaxed max-w-3xl mx-auto">
            {t('description')}
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
        {/* Nossa História */}
        <div ref={el => { sectionsRef.current[0] = el; }} className="mb-20 md:mb-24">
          <div className="flex items-center gap-3 mb-6">
            <FaRocket className="w-6 h-6 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-text">{t('historyTitle')}</h2>
          </div>
          <div className="bg-surface border-2 border-border rounded-2xl p-6 md:p-8">
            <div className="space-y-4 text-text-muted text-base md:text-lg leading-relaxed">
              {historyParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Missão, Visão, Valores */}
        <div ref={el => { sectionsRef.current[1] = el; }} className="grid md:grid-cols-3 gap-6 md:gap-8 mb-20 md:mb-24">
          <div className="bg-surface border-2 border-border rounded-2xl p-6 md:p-8 hover:border-primary transition-all hover:shadow-lg">
            <div className="w-16 h-16 bg-surface-alt rounded-2xl flex items-center justify-center mb-4">
              <FaRocket className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-text mb-4">Missão</h3>
            <p className="text-text-muted leading-relaxed">
              Criar soluções digitais inovadoras que transformam negócios e melhoram a vida das pessoas através da tecnologia.
            </p>
          </div>

          <div className="bg-surface border-2 border-border rounded-2xl p-6 md:p-8 hover:border-primary transition-all hover:shadow-lg">
            <div className="w-16 h-16 bg-surface-alt rounded-2xl flex items-center justify-center mb-4">
              <FaEye className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-text mb-4">Visão</h3>
            <p className="text-text-muted leading-relaxed">
              Ser referência global em desenvolvimento de produtos digitais, reconhecida pela excelência e impacto positivo.
            </p>
          </div>

          <div className="bg-surface border-2 border-border rounded-2xl p-6 md:p-8 hover:border-primary transition-all hover:shadow-lg">
            <div className="w-16 h-16 bg-surface-alt rounded-2xl flex items-center justify-center mb-4">
              <FaHeart className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-text mb-4">Valores</h3>
            <p className="text-text-muted leading-relaxed">
              Inovação contínua, excelência técnica, trabalho em equipe, transparência e foco no cliente.
            </p>
          </div>
        </div>

        {/* Números */}
        <div ref={el => { sectionsRef.current[2] = el; }} className="bg-gradient-to-br from-start-gradient to-final-gradient text-white rounded-3xl p-8 md:p-12 mb-20 md:mb-24">
          <div className="flex items-center justify-center gap-3 mb-8 md:mb-12">
            <FaAward className="w-6 h-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-center">Zatas em Números</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <FaUsers className="w-8 h-8 mx-auto mb-3" />
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <div className="text-white/80 text-sm md:text-base">Profissionais</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <FaProjectDiagram className="w-8 h-8 mx-auto mb-3" />
              <div className="text-4xl md:text-5xl font-bold mb-2">100+</div>
              <div className="text-white/80 text-sm md:text-base">Projetos Entregues</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <FaGlobeAmericas className="w-8 h-8 mx-auto mb-3" />
              <div className="text-4xl md:text-5xl font-bold mb-2">1M+</div>
              <div className="text-white/80 text-sm md:text-base">Usuários Impactados</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <FaAward className="w-8 h-8 mx-auto mb-3" />
              <div className="text-4xl md:text-5xl font-bold mb-2">5</div>
              <div className="text-white/80 text-sm md:text-base">Países Atendidos</div>
            </div>
          </div>
        </div>

        {/* Cultura */}
        <div ref={el => { sectionsRef.current[3] = el; }}>
          <div className="flex items-center gap-3 mb-6">
            <FaHeart className="w-6 h-6 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-text">Nossa Cultura</h2>
          </div>
          <p className="text-lg md:text-xl text-text-muted mb-8 leading-relaxed">
            Acreditamos que um ambiente de trabalho saudável e colaborativo é essencial para a inovação. Na Zatas, valorizamos:
          </p>
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {cultureValues.map((item, i) => (
              <div key={i} className="bg-surface border-2 border-border rounded-2xl p-6 hover:border-primary transition-all hover:shadow-lg group cursor-default">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-surface-alt rounded-xl flex items-center justify-center flex-shrink-0 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <div className="w-6 h-6">{item.icon}</div>
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl font-bold text-text mb-2">{item.title}</h4>
                    <p className="text-text-muted">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}