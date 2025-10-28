'use client'

import AnimatedLogo from '../ui/AnimatedLogo';
import Slogan from '../ui/AnimatedSlogan';
import AnimatedButton from '../ui/AnimatedButton';
import { FaInstagram } from 'react-icons/fa';
import { useTheme } from 'next-themes';

const HeroSection = () => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  const gridColor = isDark 
    ? 'rgba(65, 65, 65, 0.2)' // Sua --color-primary dark (#414141) com 20% opacidade
    : 'rgba(59, 130, 246, 0.3)';

  const vignetteColor = isDark 
    ? 'rgba(42, 42, 42, 0.3)'   // Seu --color-surface-alt dark (#2a2a2a)
    : 'rgba(245, 247, 250, 0.3)';

  return (
    <div className="h-screen w-full bg-surface flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
        />
      </div>

      {/* Conteúdo principal */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Logo Animado */}
        <div className="mb-8">
          <AnimatedLogo />
        </div>

        <div className="mb-12">
          <Slogan />
        </div>

        {/* Botões de ação */}
        <div className="flex flex-wrap gap-4 justify-center items-center">
          <AnimatedButton
            variant="primary"
            icon={<span>→</span>}
            onClick={() => console.log('Ver Projetos')}
          >
            Explorar Projetos
          </AnimatedButton>
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