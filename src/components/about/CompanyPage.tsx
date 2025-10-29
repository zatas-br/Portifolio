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
    // Nota: 'cultureItems' não é mais necessário aqui, 
    // pois estamos usando t() diretamente no array.
  };
};

export default function CompanyPage() {
  const t = useTranslations('CompanyPage');
  const messages = useMessages() as Messages;
  const historyParagraphs = messages.CompanyPage.history;
  
  const heroRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);
  const { animateFadeIn, animateEnter } = usePortfolioAnimations();

  // Mova o array para dentro do componente para ter acesso ao 't'
  const cultureValues = [
    { icon: <FaLightbulb />, title: t('cultureItems.autonomy.title'), desc: t('cultureItems.autonomy.desc') },
    { icon: <FaStar />, title: t('cultureItems.learning.title'), desc: t('cultureItems.learning.desc') },
    { icon: <FaUsers />, title: t('cultureItems.diversity.title'), desc: t('cultureItems.diversity.desc') },
    { icon: <FaHandshake />, title: t('cultureItems.transparency.title'), desc: t('cultureItems.transparency.desc') },
    { icon: <FaBalanceScale />, title: t('cultureItems.balance.title'), desc: t('cultureItems.balance.desc') },
    { icon: <FaChartLine />, title: t('cultureItems.impact.title'), desc: t('cultureItems.impact.desc') }
  ];

  useEffect(() => {
    animateFadeIn(heroRef.current, 0);
    animateEnter(sectionsRef.current, 0.2);
  }, [animateEnter, animateFadeIn]); // Adicionei dependências ao useEffect

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
            <h3 className="text-xl md:text-2xl font-bold text-text mb-4">{t('cardMissionTitle')}</h3>
            <p className="text-text-muted leading-relaxed">
              {t('cardMissionText')}
            </p>
          </div>

          <div className="bg-surface border-2 border-border rounded-2xl p-6 md:p-8 hover:border-primary transition-all hover:shadow-lg">
            <div className="w-16 h-16 bg-surface-alt rounded-2xl flex items-center justify-center mb-4">
              <FaEye className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-text mb-4">{t('cardVisionTitle')}</h3>
            <p className="text-text-muted leading-relaxed">
              {t('cardVisionText')}
            </p>
          </div>

          <div className="bg-surface border-2 border-border rounded-2xl p-6 md:p-8 hover:border-primary transition-all hover:shadow-lg">
            <div className="w-16 h-16 bg-surface-alt rounded-2xl flex items-center justify-center mb-4">
              <FaHeart className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-text mb-4">{t('cardValuesTitle')}</h3>
            <p className="text-text-muted leading-relaxed">
              {t('cardValuesText')}
            </p>
          </div>
        </div>

        {/* Cultura */}
        <div ref={el => { sectionsRef.current[3] = el; }}>
          <div className="flex items-center gap-3 mb-6">
            <FaHeart className="w-6 h-6 text-primary" />
            {/* ATUALIZADO */}
            <h2 className="text-3xl md:text-4xl font-bold text-text">{t('cultureTitle')}</h2>
          </div>
          {/* ATUALIZADO */}
          <p className="text-lg md:text-xl text-text-muted mb-8 leading-relaxed">
            {t('cultureDescription')}
          </p>
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {/* ATUALIZADO (agora consome o array 'cultureValues' que usa 't()') */}
            {cultureValues.map((item, i) => (
              <div key={i} className="bg-surface border-2 border-border rounded-2xl p-6 hover:border-primary transition-all hover:shadow-lg group cursor-default">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-surface-alt rounded-xl flex items-center justify-center flex-shrink-0 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <div className="w-12 h-12 flex items-center justify-center">{item.icon}</div>
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