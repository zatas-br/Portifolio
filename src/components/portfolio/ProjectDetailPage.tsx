'use client'

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import gsap from 'gsap';
import { FaArrowLeft } from 'react-icons/fa';

import { PROJECTS_STATIC } from '@/src/data/projects';
import { usePortfolioAnimations } from '@/src/hooks/usePortfolioAnimations';
import HeroSection from '../sections/Project/Hero';
import ProjectTeamSection from '../sections/Project/ProjectTeam';
import ProjectApresentationSection from '../sections/Project/ProjectApresentation';
import ProjectGalerySection from '../sections/Project/ProjectGalery';

interface ProjectDetailPageProps {
  projectId: string;
  category: string;
}

export default function ProjectDetailPage({ projectId, category }: ProjectDetailPageProps) {
  const t = useTranslations('ProjectDetailPage');
  const tProject = useTranslations(`Projects.${projectId}`);

  const router = useRouter();
  const project = PROJECTS_STATIC.find(p => p.id === projectId);
  const headerRef = useRef<HTMLDivElement>(null);
  const { animateFadeIn } = usePortfolioAnimations();

  useEffect(() => {
    animateFadeIn(headerRef.current, 0);
  }, [animateFadeIn]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#ECEFF1]">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#263238] mb-4">Projeto não encontrado</h1>
          <button
            onClick={() => router.push('/services')}
            className="text-[#0D47A1] hover:underline flex items-center gap-2 mx-auto"
          >
            <FaArrowLeft /> Voltar para Serviços
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className='gap-16 flex flex-col w-full h-auto pb-16 bg-white'>
      <HeroSection project={project} projectId={projectId} />
      <ProjectTeamSection project={project} />
      <ProjectApresentationSection project={project} projectId={projectId} />
      <ProjectGalerySection project={project} category={category} />
    </div>
  );
}