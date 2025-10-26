import { useTranslations } from 'next-intl';
import menuIcon from '@/public/images/Identidade_visual/zatas-blue.svg';
import rightIcon from '@/public/images/Identidade_visual/rightIcon.svg';
import zaIcon from '@/public/images/Identidade_visual/zaIcon.svg';
import iconZatas from '@/public/images/Identidade_visual/icon-zatas-blue.svg';

export default function HomePage() {
  const t = useTranslations('HomePage');

  return (
    <div className="flex flex-col items-center justify-center bg-primary-light gap-4 m-0">
      <img src={zaIcon.src} alt="Logo" className="h-40 opacity-50 md:absolute inset-x-10 top-35 -rotate-16" />
      <img src={iconZatas.src} alt="Logo" className="h-40 opacity-50 md:absolute inset-x-240 top-140 rotate-16" />
      <div className='flex flex-col items-center justify-center'>
        <img src={menuIcon.src} alt="Logo" className="h-40" />
        <h3 className="font-medium text-4xl text-primary mt-8">
          {t('subtitle')}
        </h3>
      </div>
      <div className='w-5/10 mt-10 flex flex-row justify-between'>
        <div className='flex flex-row justify-center items-center gap-2'>
          <span className='font-bold text-primary text-[20pt]'>Projetos</span>
          <img src={rightIcon.src} alt="Logo" className="h-5" />
        </div>
        <div className='flex flex-row justify-center items-center gap-2'>
          <span className='font-bold text-primary text-[20pt]'>Contato</span>
          <img src={rightIcon.src} alt="Logo" className="h-5" />
        </div>
      </div>
    </div>
  );
}
