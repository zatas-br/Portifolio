// 📁 app/[locale]/services/[category]/[projectId]/page.tsx

'use client'

import { use } from 'react';
import ProjectDetailPage from '@/src/components/portfolio/ProjectDetailPage';

export default function ProjectPage({ 
  params 
}: { 
  params: Promise<{ category: string; projectId: string }> 
}) {
  const { category, projectId } = use(params);
  
  return <ProjectDetailPage projectId={projectId} category={category} />;
}