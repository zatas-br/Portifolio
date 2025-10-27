'use client'

import { useState } from 'react';
import CardNav from '../menu/CardNav';
import zatasIcon from '@/public/images/Identidade_visual/icon-zatas-blue.svg';
import { useTranslations } from 'next-intl';

export default function Header() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [language, setLanguage] = useState<'pt' | 'en'>('pt');
  

  const handleThemeToggle = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    // Aqui você pode adicionar a lógica para mudar o tema do site
    document.documentElement.classList.toggle('dark');
    console.log('Tema alterado para:', newTheme);
  };

  const handleLanguageToggle = () => {
    const newLanguage = language === 'pt' ? 'en' : 'pt';
    setLanguage(newLanguage);
    // Aqui você pode integrar com next-intl ou sua solução de i18n
    console.log('Idioma alterado para:', newLanguage);
  };

  const t = useTranslations('CardNav');

  const menuItems = [
    {
      label: t('about.label'),
      bgColor: "var(--color-primary)",
      textColor: "var(--color-surface)",
      links: [
        { label: t('about.links.0.label'), href: '/about', ariaLabel: t('about.links.0.ariaLabel') },
        { label: t('about.links.1.label'), href: '/team', ariaLabel: t('about.links.1.ariaLabel') },
        { label: t('about.links.2.label'), href: '/careers', ariaLabel: t('about.links.2.ariaLabel') }
      ]
    },
    {
      label: t('services.label'),
      bgColor: "var(--color-primary-hover)",
      textColor: "var(--color-surface)",
      links: [
        { label: t('services.links.0.label'), href: '/services/development', ariaLabel: t('services.links.0.ariaLabel') },
        { label: t('services.links.1.label'), href: '/services/design', ariaLabel: t('services.links.1.ariaLabel') },
        { label: t('services.links.2.label'), href: '/services/consulting', ariaLabel: t('services.links.2.ariaLabel') }
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
          base: "var(--color-surface)",
          menu: "var(--color-text)",
          buttonBg: "var(--color-primary)",
          buttonText: "var(--color-surface)"
        }}

        theme={{
          current: theme,
          onToggle: handleThemeToggle
        }}

        language={{
          current: language,
          onToggle: handleLanguageToggle
        }}
      />
    </header>
  );
}