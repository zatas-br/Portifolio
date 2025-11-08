import { Project, ProjectAuthor } from '@/types';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const usePortfolioAnimations = () => {
  const animateEnter = (elements: (HTMLElement | null)[], stagger = 0.15) => {
    gsap.fromTo(
      elements.filter(Boolean),
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, stagger, duration: 0.6, ease: 'power3.out' }
    );
  };

  const animateHover = (element: HTMLElement | null, isEntering: boolean) => {
    if (!element) return;
    gsap.to(element, {
      y: isEntering ? -8 : 0,
      duration: 0.3,
      ease: 'power2.out'
    });
  };

  const animateFadeIn = (element: HTMLElement | null, delay = 0) => {
    if (!element) return;
    gsap.fromTo(
      element,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, delay, ease: 'power3.out' }
    );
  };

  return { animateEnter, animateHover, animateFadeIn };
};