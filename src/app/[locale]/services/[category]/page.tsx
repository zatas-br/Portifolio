// 📁 app/[locale]/services/[category]/page.tsx

'use client'

import { use } from 'react';
import CategoryProjectsPage from '@/src/components/portfolio/CategoryProjectsPage';

export default function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = use(params);
  
  return <CategoryProjectsPage category={category as 'desenvolvimento' | 'design' | 'marketing'} />;
}