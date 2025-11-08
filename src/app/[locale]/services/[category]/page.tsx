import CategoryProjectsPage from '@/src/components/portfolio/CategoryProjectsPage';
import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CATEGORIES_STATIC } from '@/src/data/projects';
import { CategoryID } from '@/types';

type Props = {
  params: { 
    locale: string;
    category: CategoryID;
  };
};

function isValidCategory(category: string): category is CategoryID {
  return CATEGORIES_STATIC.some(c => c.id === category);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, category } = await params;

  if (!isValidCategory(category)) {
    const tDefault = await getTranslations({ locale, namespace: 'Navigation' });
    return {
      title: `${tDefault('home')} | Zatas`,
    };
  }

  const t = await getTranslations({ locale, namespace: 'Categories' });
  const title = t(`${category}.title`);

  return {
    title: `${title} | Zatas`,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;

  if (!isValidCategory(category)) {
    notFound();
  }

  return (
    <CategoryProjectsPage
      category={category}
    />
  );
}