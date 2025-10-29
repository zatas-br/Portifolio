// 📁 app/[locale]/services/[category]/page.tsx

import CategoryProjectsPage from '@/src/components/portfolio/CategoryProjectsPage';
import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import { getCategoryData } from '@/src/data/projects';

type Props = {
  params: Promise<{ locale: string; category: string }>;
};

// Mapeia os valores da URL para as chaves de tradução
const categoryTranslationKeys: { [key: string]: string } = {
  'desenvolvimento': 'development',
  'design': 'design',
  'marketing': 'marketing',
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, category } = await params;
  const t = await getTranslations({ locale, namespace: 'PageTitles' });
  
  const translationKey = categoryTranslationKeys[category] || 'services';
  const { categoryData } = getCategoryData(category);

  const title = categoryData ? t(translationKey) : t('services');

  return {
    title: `${title} | Zatas`,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  // Buscando os dados aqui e passando para o client component
  const { categoryData, filteredProjects } = getCategoryData(category);
  
  return (
    <CategoryProjectsPage 
      category={category as 'desenvolvimento' | 'design' | 'marketing'} 
      projects={filteredProjects}
      categoryDetails={categoryData}
    />
  );
}
