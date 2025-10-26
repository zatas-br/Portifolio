// src/components/layout/Header.tsx
'use client';

import { useState } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/src/lib/utils';
import { IconMenu, IconClose } from './Icons';
import menuIcon from '@/public/images/Identidade_visual/icon-zatas-white.svg';
import { motion, AnimatePresence } from 'framer-motion';

const headerVariants = cva(
  'absolute inset-0 flex items-center justify-between rounded-md p-2 shadow-md',
  {
    variants: {
      variant: {
        white: 'bg-white text-primary',
        dark: 'bg-gray-800 text-white',
        blue: 'bg-primary text-white',
      },
    },
    defaultVariants: {
      variant: 'white',
    },
  },
);

const sidemenuVariants = cva(
  'fixed top-8 right-[2.5%] z-50 flex w-[220px] h-[80%] flex-col gap-2 rounded-md p-4 shadow-lg',
  {
    variants: {
      variant: {
        white: 'bg-white text-primary',
        dark: 'bg-gray-800 text-white',
        blue: 'bg-primary text-white',
      },
    },
    defaultVariants: {
      variant: 'white',
    },
  },
);

const linkVariants = cva(
  'text-lg font-medium py-1 px-2 rounded-md transition-colors w-full text-left',
  {
    variants: {
      variant: {
        white: 'text-primary hover:bg-gray-100',
        dark: 'text-white hover:bg-gray-700',
        blue: 'text-white hover:bg-opacity-80 hover:bg-primary-dark',
      },
    },
    defaultVariants: {
      variant: 'white',
    },
  },
);

export interface HeaderProps extends VariantProps<typeof headerVariants> {}

export default function Header({ variant }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/contact', label: 'Contato' },
    { href: '/about', label: 'Sobre' },
    { href: '/projects', label: 'Projetos' },
  ];

  const logoSrc = menuIcon.src;

  const contentAnimation = {
    initial: { opacity: 0, filter: 'blur(4px)' },
    animate: { opacity: 1, filter: 'blur(0px)' },
    exit: { opacity: 0, filter: 'blur(4px)' },
    transition: { duration: 0.2, ease: 'easeInOut' },
  } as const;

  const layoutTransition = { 
    duration: 0.6, 
    ease: [0.32, 0.72, 0, 1] 
  } as const;;

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          key="header-fechado"
          layoutId="header-container"
          className={cn(headerVariants({ variant }))}
          transition={layoutTransition}
        >
          <motion.div
            className="flex w-full justify-between items-center"
            {...contentAnimation}
          >
            <a href="/">
              <img src={logoSrc} alt="Logo Zatas" className="h-5" />
            </a>
            <button
              aria-label="Abrir menu"
              onClick={() => setIsOpen(true)}
              className="transition-transform duration-300"
            >
              <IconMenu />
            </button>
          </motion.div>
        </motion.div>
      )}
      {isOpen && (
        <motion.div
          key="header-aberto"
          layoutId="header-container"
          className={cn(sidemenuVariants({ variant }))}
          transition={layoutTransition}
        >
          <motion.div
            className="flex flex-col w-full"
            {...contentAnimation}
          >
            <div className="flex w-full items-center justify-between pb-2 mb-2 border-b border-white/20">
              <a href="/" onClick={() => setIsOpen(false)}>
                <img src={logoSrc} alt="Logo Zatas" className="h-5" />
              </a>
              <button
                aria-label="Fechar menu"
                onClick={() => setIsOpen(false)}
              >
                <IconClose />
              </button>
            </div>

            <nav className="flex flex-col items-start gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn(linkVariants({ variant }))}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}