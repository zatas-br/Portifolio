
import { useTranslations } from 'next-intl';
import menuIcon from '@/public/images/Identidade_visual/zatas-blue.svg';
import rightIcon from '@/public/images/Identidade_visual/rightIcon.svg';
import zaIcon from '@/public/images/Identidade_visual/zaIcon.svg';
import iconZatas from '@/public/images/Identidade_visual/icon-zatas-blue.svg';

export default function Hero() {
  const t = useTranslations('HomePage');

  return (
    <section className="flex flex-col items-center justify-center bg-primary-light gap-20 m-0 w-full max-w-screen-xl">
      <div className="flex flex-col items-center justify-center">
        <img src={menuIcon.src} alt="Logo" className="h-40" />
        <h3 className="font-medium text-4xl text-primary mt-8">
          {t('subtitle')}
        </h3>
      </div>
      <div className="w-5/10 flex flex-row justify-between">
        <div className="flex flex-row justify-center items-center gap-2 group cursor-pointer">
          <span className="font-bold text-primary text-[20pt]">Projetos</span>
          <img
            src={rightIcon.src}
            alt="Ícone de seta"
            className="h-5 transition-transform duration-300 ease-in-out origin-left group-hover:scale-x-150"
          />
        </div>
        <div className="flex flex-row justify-center items-center gap-2 group cursor-pointer">
          <span className="font-bold text-primary text-[20pt]">Contato</span>
          <img
            src={rightIcon.src}
            alt="Ícone de seta"
            className="h-5 transition-transform duration-300 ease-in-out origin-left group-hover:scale-x-150"
          />
        </div>
      </div>
    </section>
  );
}