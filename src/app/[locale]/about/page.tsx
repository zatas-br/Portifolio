import { useTranslations } from 'next-intl';
import menuIcon from '@/public/images/Identidade_visual/zatas-blue.svg';
import rightIcon from '@/public/images/Identidade_visual/rightIcon.svg';
import zaIcon from '@/public/images/Identidade_visual/zaIcon.svg';
import iconZatasTraced from '@/public/images/Identidade_visual/zatas-blue-traced.svg';

export default function HomePage() {
  const t = useTranslations('HomePage');

  return (
    <div className=" flex flex-col items-center justify-center bg-primary-light gap-4">
        <img src={iconZatasTraced.src} alt="Logo" className="h-40 opacity-50 md:absolute -inset-x-30 top-115 rotate-18" />
        <div className='w-1/1 flex flex-col items-center justify-center gap-6 p-10 bg-white rounded-md gap-20'>
            <h1 className='font-bold text-primary text-[32pt]'>Sobre a Zatas</h1>
            <p className='w-6/10 font-medium text-primary text-[16pt] ml-30'>Não vendemos produtos de prateleira, nós criamos soluções. Nosso processo envolve  entender a fundo o seu desafio de negócio para desenhar, desenvolver e implementar  sistemas e plataformas personalizadas que otimizaram processos, aumentam a eficiência e  resolvem problemas reais.</p>
            <p className='w-6/10 font-medium text-primary text-[16pt] ml-140'>Seja um aplicativo mobile, uma plataforma web complexa ou um sistema interno, nossa  especialidade é tirar sua ideia do papel. Criamos ferramentas que se adaptam  perfeitamente ao seu negócio.</p>
        </div>
    </div>
  );
}
