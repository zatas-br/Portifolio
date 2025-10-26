import { useTranslations } from 'next-intl';
import iconZatasTraced from '@/public/images/Identidade_visual/zatas-blue-traced.svg';

export default function About() {
    const t = useTranslations('HomePage');

    return (
        <section className='flex flex-col items-center justify-center bg-background-white gap-4 relative w-full max-w-screen-xl'>
            <div className='w-1/1 flex flex-col pl-30 justify-center gap-6 p-10 background-white rounded-md gap-20'>
                <h1 className='font-bold text-primary text-[48pt]'>Sobre a Zatas</h1>
                <p className='w-7/10 font-medium text-primary max-w-9/10 text-[18pt] ml-30'>Não vendemos produtos de prateleira, nós criamos soluções. Nosso processo envolve  entender a fundo o seu desafio de negócio para desenhar, desenvolver e implementar  sistemas e plataformas personalizadas que otimizaram processos, aumentam a eficiência e  resolvem problemas reais.</p>
                
                <p className='w-5/10 font-medium text-primary max-w-6/10 text-[18pt] ml-140'>Seja um aplicativo mobile, uma plataforma web complexa ou um sistema interno, nossa  especialidade é tirar sua ideia do papel. Criamos ferramentas que se adaptam  perfeitamente ao seu negócio.</p>
            </div>
        </section>
    )
}
