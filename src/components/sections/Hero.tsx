'use client'

import AnimatedLogo from '../ui/AnimatedLogo';
import Slogan from '../ui/AnimatedSlogan';
import AnimatedButton from '../ui/AnimatedButton';

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center relative overflow-hidden">
      {/* Grade de fundo sutil */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Conteúdo principal */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Logo Animado */}
        <div className="mb-8">
          <AnimatedLogo />
        </div>

        {/* Slogan */}
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
            icon={<span>✉</span>}
            onClick={() => console.log('Contato')}
          >
            Entrar em Contato
          </AnimatedButton>
        </div>
      </div>

      {/* Efeito de vignette sutil */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-radial from-transparent via-transparent to-gray-100/30" />
    </div>
  );
};

export default HeroSection;