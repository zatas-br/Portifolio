// 📁 src/components/about/CompanyPage.tsx

'use client'

import { useEffect, useRef } from 'react';
import { usePortfolioAnimations } from '@/src/hooks/usePortfolioAnimations';

export default function CompanyPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);
  const { animateFadeIn, animateEnter } = usePortfolioAnimations();

  useEffect(() => {
    animateFadeIn(heroRef.current, 0);
    animateEnter(sectionsRef.current, 0.2);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div ref={heroRef} className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-6xl font-bold mb-6">Sobre a Zatas</h1>
          <p className="text-2xl opacity-90 leading-relaxed max-w-3xl mx-auto">
            Transformamos ideias em produtos digitais que impactam milhões de pessoas ao redor do mundo
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-20">
        {/* Nossa História */}
        <div ref={el => sectionsRef.current[0] = el} className="mb-24">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Nossa História</h2>
          <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
            <p>
              A Zatas nasceu em 2020 com uma missão clara: criar soluções digitais que realmente fazem a diferença na vida das pessoas. Fundada por quatro profissionais apaixonados por tecnologia e inovação, começamos em uma pequena sala em São Paulo.
            </p>
            <p>
              Hoje, somos uma equipe de mais de 50 profissionais talentosos, atendendo clientes em 5 países e impactando mais de 1 milhão de usuários com nossas soluções.
            </p>
            <p>
              Nossa jornada é guiada pela crença de que tecnologia deve ser acessível, intuitiva e transformadora. Cada projeto que assumimos é uma oportunidade de superar expectativas e criar algo extraordinário.
            </p>
          </div>
        </div>

        {/* Missão, Visão, Valores */}
        <div ref={el => sectionsRef.current[1] = el} className="grid md:grid-cols-3 gap-8 mb-24">
          <div className="bg-blue-50 border-2 border-blue-100 rounded-2xl p-8">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Missão</h3>
            <p className="text-gray-600 leading-relaxed">
              Criar soluções digitais inovadoras que transformam negócios e melhoram a vida das pessoas através da tecnologia.
            </p>
          </div>

          <div className="bg-blue-50 border-2 border-blue-100 rounded-2xl p-8">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Visão</h3>
            <p className="text-gray-600 leading-relaxed">
              Ser referência global em desenvolvimento de produtos digitais, reconhecida pela excelência e impacto positivo.
            </p>
          </div>

          <div className="bg-blue-50 border-2 border-blue-100 rounded-2xl p-8">
            <div className="text-4xl mb-4">💎</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Valores</h3>
            <p className="text-gray-600 leading-relaxed">
              Inovação contínua, excelência técnica, trabalho em equipe, transparência e foco no cliente.
            </p>
          </div>
        </div>

        {/* Números */}
        <div ref={el => sectionsRef.current[2] = el} className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-3xl p-12 mb-24">
          <h2 className="text-4xl font-bold mb-12 text-center">Zatas em Números</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Profissionais</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">100+</div>
              <div className="text-blue-100">Projetos Entregues</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">1M+</div>
              <div className="text-blue-100">Usuários Impactados</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">5</div>
              <div className="text-blue-100">Países Atendidos</div>
            </div>
          </div>
        </div>

        {/* Cultura */}
        <div ref={el => sectionsRef.current[3] = el}>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Nossa Cultura</h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Acreditamos que um ambiente de trabalho saudável e colaborativo é essencial para a inovação. Na Zatas, valorizamos:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Autonomia', desc: 'Confiamos em nosso time para tomar decisões' },
              { title: 'Aprendizado', desc: 'Incentivamos crescimento contínuo' },
              { title: 'Diversidade', desc: 'Celebramos diferentes perspectivas' },
              { title: 'Transparência', desc: 'Comunicação aberta em todos os níveis' },
              { title: 'Work-life balance', desc: 'Equilíbrio entre vida pessoal e profissional' },
              { title: 'Impacto', desc: 'Foco em resultados que importam' }
            ].map((item, i) => (
              <div key={i} className="border-2 border-gray-100 rounded-xl p-6 hover:border-blue-500 transition-colors">
                <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}