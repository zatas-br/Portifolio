import { useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations('HomePage');

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-primary-light gap-4">
      {/* Título bold */}
      <h1 className="ont-bold text-4xl">
        {t('title')}
      </h1>

      {/* Subtítulo medium */}
      <p className="ont-medium text-lg text-text-muted">
        {t('subtitle')}
      </p>

      {/* Exemplo de texto regular */}
      <p className="font-normal text-base">
        Este é um texto regular usando Montserrat.
      </p>
    </div>
  );
}
