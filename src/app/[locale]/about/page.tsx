// 📁 app/[locale]/about/page.tsx

import CompanyPage from '@/src/components/about/CompanyPage';
import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'CardNav' });
  
  return {
    title: t('about.label'),
  };
}

export default function AboutPage() {
  return <CompanyPage />;
}