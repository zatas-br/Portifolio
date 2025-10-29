// 📁 app/[locale]/services/page.tsx

import ServicesLandingPage from '@/src/components/portfolio/ServicesLandingPage';
import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'CardNav' });
  
  return {
    title: t('services.label'),
  };
}

export default function ServicesPage() {
  return <ServicesLandingPage />;
}