// 📁 app/[locale]/team/page.tsx

import TeamPage from '@/src/components/about/TeamPage';
import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'PageTitles' });

  return {
    title: `${t('team')} | Zatas`,
  };
}

export default function TeamPageRoute() {
  return <TeamPage />;
}
