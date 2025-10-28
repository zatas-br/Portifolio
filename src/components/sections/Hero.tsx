'use client'

import Link from "next/link";
import AnimatedLogo from '../ui/AnimatedLogo';
import Slogan from '../ui/AnimatedSlogan';
import AnimatedButton from '../ui/AnimatedButton';
import { FaInstagram } from 'react-icons/fa';
import { useTheme } from 'next-themes';
import { useEffect } from 'react';

const HeroSection = () => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  useEffect(() => {
    // Força o scroll para o topo imediatamente
    window.scrollTo({ top: 0, behavior: 'instant' });
    
    // Salva a posição atual do scroll
    const scrollY = window.scrollY;
    
    // Trava o scroll
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';

    return () => {
      // Remove os estilos de travamento
      const bodyTop = document.body.style.top;
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      
      // Restaura a posição (mas como estamos na home, será sempre 0)
      window.scrollTo({ top: 0, behavior: 'instant' });
    };
  }, []);

  const gridColor = isDark
    ? 'rgba(65, 65, 65, 0.2)'
    : 'rgba(59, 130, 246, 0.3)';

  const vignetteColor = isDark
    ? 'rgba(42, 42, 42, 0.3)'
    : 'rgba(245, 247, 250, 0.3)';

  return (
    <div className="h-screen w-full bg-surface flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" />
      </div>

      {/* Conteúdo principal */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center -mt-24">
        {/* Logo Animado */}
        <div className="mb-8">
          <AnimatedLogo />
        </div>

        <div className="mb-12">
          <Slogan />
        </div>

        {/* Botões de ação */}
        <div className="flex flex-wrap gap-4 justify-center items-center">
          <Link href='/services'>
            <AnimatedButton
              variant="primary"
              icon={<span>→</span>}
              onClick={() => console.log('Ver Projetos')}
            >
              Explorar Projetos
            </AnimatedButton>
          </Link>
          <AnimatedButton
            variant="secondary"
            icon={<FaInstagram size={18} />}
            onClick={() => window.open('https://instagram.com/suaempresa', '_blank')}
          >
            Siga no Instagram
          </AnimatedButton>
        </div>
      </div>

      {/* Efeito de vignette sutil */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-radial from-transparent via-transparent to-gray-100/30" />
    </div>
  );
};

export default HeroSection;