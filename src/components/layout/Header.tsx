'use client'

import { useState } from 'react';
import CardNav from '@/src/components/menu/cardNav';
import zatasIcon from '@/public/images/Identidade_visual/icon-zatas-white.svg';
import { useTranslations, useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';
import { useRouter } from '@/src/i18n/navigation';
import { useTheme } from 'next-themes';

export default function Header() {
  const {theme, setTheme} = useTheme()
  const currentLocale = useLocale(); // Usado para o estado 'current' do botão
  const router = useRouter(); 
  const fullPathname = usePathname();

  const locales = ['pt-br', 'en-us'];

  const handleThemeToggle = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  const handleLanguageToggle = () => {
    let currentLocaleOnPath = locales.find(loc => 
      fullPathname === `/${loc}` || fullPathname.startsWith(`/${loc}/`)
    );

    if (!currentLocaleOnPath) {
      currentLocaleOnPath = currentLocale; 
    }
    const newLanguage = currentLocaleOnPath === 'pt-br' ? 'en-us' : 'pt-br';

    const regex = new RegExp(`^/${currentLocaleOnPath}`);
    let newPath = fullPathname.replace(regex, '');


    if (newPath === '') {
      newPath = '/';
    }

    router.push(newPath, { locale: newLanguage });
  };

  const t = useTranslations('CardNav');

  const menuItems = [
    {
      label: t('about.label'),
      bgColor: "var(--color-primary-active)",
      textColor: "var(--color-surface)",
      links: [
        { label: t('about.links.0.label'), href: '/about', ariaLabel: t('about.links.0.ariaLabel') },
        { label: t('about.links.1.label'), href: '/team', ariaLabel: t('about.links.1.ariaLabel') },
        { label: t('about.links.2.label'), href: '/partnerships', ariaLabel: t('about.links.2.ariaLabel') }
      ]
    },
    {
      label: t('services.label'),
      bgColor: "var(--color-primary-active)",
      textColor: "var(--color-surface)",
      links: [
       { label: t('services.links.0.label'), href: '/services/desenvolvimento', ariaLabel: 'Ver projetos de desenvolvimento' },
      { label: t('services.links.1.label'), href: '/services/design', ariaLabel: 'Ver projetos de design' },
      { label: t('services.links.2.label'), href: '/services/marketing', ariaLabel: 'Ver projetos de marketing' }
      ]
    },
    {
      label: t('contact.label'),
      bgColor: "var(--color-primary-active)",
      textColor: "var(--color-surface)",
      links: [
        { label: t('contact.links.0.label'), href: 'mailto:contact@zatas.com.br', ariaLabel: t('contact.links.0.ariaLabel') },
        { label: t('contact.links.1.label'), href: 'https://wa.me/5516000000000', ariaLabel: t('contact.links.1.ariaLabel') },
        { label: t('contact.links.2.label'), href: 'https://linkedin.com/company/zatas', ariaLabel: t('contact.links.2.ariaLabel') }
      ]
    }
  ];

  return (
    <header className="w-full relative min-h-[100px]">
      <CardNav
        logo={zatasIcon.src}
        logoAlt="Zatas - Seu Portfólio"
        items={menuItems}
        ease="power3.out"

        colors={{
          base: "var(--color-primary)",
          menu: "var(--color-white)",
          buttonBg: "var(--color-primary-active)",
          buttonText: "var(--color-white)"
        }}

        theme={{
          current: theme,
          onToggle: handleThemeToggle
        }}

        language={{
          current: currentLocale,
          onToggle: handleLanguageToggle
        }}
      />
    </header>
  );
}