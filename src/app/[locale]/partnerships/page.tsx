// 📁 app/[locale]/partnerships/page.tsx

import PartnershipsPage from '@/src/components/about/PartnershipsPage';
import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'CardNav' });
  
  return {
    title: t('about.links.2.label'),
  };
}

export default function PartnershipsPageRoute() {
  return <PartnershipsPage />;
}