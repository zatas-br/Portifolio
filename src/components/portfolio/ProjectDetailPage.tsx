'use client'

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import gsap from 'gsap';
import {
  FaArrowLeft,
  FaExternalLinkAlt,
  FaCalendar,
  FaUsers,
  FaBriefcase,
  FaCode,
  FaImages,
  FaUser
} from 'react-icons/fa';

import { PROJECTS_STATIC } from '@/src/data/projects';
import { resolveAuthors } from '@/src/utils/resolveAuthors';
import { usePortfolioAnimations } from '@/src/hooks/usePortfolioAnimations';
import AuthorCard from '@/src/components/portfolio/AuthorCard';
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
  const tCategory = useTranslations(`Categories.${category}`);
  const tProject = useTranslations(`Projects.${projectId}`);

  const router = useRouter();
  const project = PROJECTS_STATIC.find(p => p.id === projectId);
  const headerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<(HTMLDivElement | null)[]>([]);
  const { animateFadeIn } = usePortfolioAnimations();

  useEffect(() => {
    animateFadeIn(headerRef.current, 0);
    animateFadeIn(heroRef.current, 0.1);
    animateFadeIn(contentRef.current, 0.2);
    gsap.fromTo(
      galleryRef.current.filter(Boolean),
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, stagger: 0.1, duration: 0.5, delay: 0.3, ease: 'power3.out' }
    );
  }, [animateFadeIn]);

  if (!project) return null;

  const authors = resolveAuthors(project.authorIds);
  const hasAuthors = authors.length > 0;
  const isSingleAuthor = authors.length === 1;

  const title = tProject('title');
  const description = tProject('description');
  const fullDescription = tProject('fullDescription');
  const year = tProject('year');
  const client = tProject('client');

  return (
    <div className='gap-16 flex flex-col w-full h-auto pb-16 bg-white-background'>
      <HeroSection/>
      <ProjectTeamSection/>
      <ProjectApresentationSection/>
      <ProjectGalerySection/>
    </div>
  );
}