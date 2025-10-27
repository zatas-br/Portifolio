// Salve como, por exemplo, 'hooks/useCardNavAnimation.ts'
'use client';

import { useState, useRef, useLayoutEffect, useCallback } from 'react';
import { gsap } from 'gsap';
import { UseCardNavAnimationProps } from '@/types';



export const useCardNavAnimation = ({
    ease = 'power3.out',
    numItems,
}: UseCardNavAnimationProps) => {
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const navRef = useRef<HTMLDivElement | null>(null);
    const cardsRef = useRef<HTMLDivElement[]>([]);
    const tlRef = useRef<gsap.core.Timeline | null>(null);

    const setCardRef = (i: number) => (el: HTMLDivElement | null) => {
        if (el) {
            cardsRef.current[i] = el;
        }
    };

    const calculateHeight = useCallback(() => {
        const navEl = navRef.current;
        if (!navEl) return 260;

        const isMobile = window.matchMedia('(max-width: 768px)').matches;
        if (isMobile) {
            const contentEl = navEl.querySelector('.card-nav-content') as HTMLElement;
            if (contentEl) {
                const wasVisible = contentEl.style.visibility;
                const wasPointerEvents = contentEl.style.pointerEvents;
                const wasPosition = contentEl.style.position;
                const wasHeight = contentEl.style.height;

                contentEl.style.visibility = 'visible';
                contentEl.style.pointerEvents = 'auto';
                contentEl.style.position = 'static';
                contentEl.style.height = 'auto';

                contentEl.offsetHeight;

                const topBar = 60;
                const padding = 16;
                const contentHeight = contentEl.scrollHeight;

                contentEl.style.visibility = wasVisible;
                contentEl.style.pointerEvents = wasPointerEvents;
                contentEl.style.position = wasPosition;
                contentEl.style.height = wasHeight;

                return topBar + contentHeight + padding;
            }
        }
        return 260;
    }, []);

    const createTimeline = useCallback(() => {
        const navEl = navRef.current;
        if (!navEl) return null;

        const currentCards = cardsRef.current.slice(0, numItems);

        gsap.set(navEl, { height: 60, overflow: 'hidden' });
        gsap.set(currentCards, { y: 50, opacity: 0 });

        const tl = gsap.timeline({ paused: true });

        tl.to(navEl, {
            height: calculateHeight,
            duration: 0.4,
            ease,
        });

        tl.to(currentCards, { y: 0, opacity: 1, duration: 0.4, ease, stagger: 0.08 }, '-=0.1');

        return tl;
    }, [calculateHeight, ease, numItems]);

    useLayoutEffect(() => {
        cardsRef.current = cardsRef.current.slice(0, numItems);

        const tl = createTimeline();
        tlRef.current = tl;

        return () => {
            tl?.kill();
            tlRef.current = null;
        };
    }, [createTimeline, numItems]);

    useLayoutEffect(() => {
        const handleResize = () => {
            if (!tlRef.current) return;

            if (isExpanded) {
                const newHeight = calculateHeight();
                gsap.set(navRef.current, { height: newHeight });

                tlRef.current.kill();
                const newTl = createTimeline();
                if (newTl) {
                    newTl.progress(1);
                    tlRef.current = newTl;
                }
            } else {
                tlRef.current.kill();
                const newTl = createTimeline();
                if (newTl) {
                    tlRef.current = newTl;
                }
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isExpanded, calculateHeight, createTimeline]);

    const toggleMenu = useCallback(() => {
        const tl = tlRef.current;
        if (!tl) return;
        if (!isExpanded) {
            setIsHamburgerOpen(true);
            setIsExpanded(true);
            tl.play(0);
        } else {
            setIsHamburgerOpen(false);
            tl.eventCallback('onReverseComplete', () => setIsExpanded(false));
            tl.reverse();
        }
    }, [isExpanded]);

    return {
        navRef,
        setCardRef,
        isHamburgerOpen,
        isExpanded,
        toggleMenu,
    };
};