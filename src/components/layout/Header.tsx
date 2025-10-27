'use client';

import { useState } from 'react';
import CardNav from '../menu/cardNav';
import zatasIcon from '@/public/images/Identidade_visual/icon-zatas-blue.svg';

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

  // Textos traduzidos
  const translations = {
    pt: {
      about: {
        label: "Sobre",
        links: [
          { label: "Empresa", href: "/sobre", ariaLabel: "Sobre a Empresa Zatas" },
          { label: "Equipe", href: "/equipe", ariaLabel: "Conheça nossa Equipe" },
          { label: "Carreiras", href: "/carreiras", ariaLabel: "Oportunidades de Carreira" }
        ]
      },
      services: {
        label: "Serviços",
        links: [
          { label: "Desenvolvimento", href: "/servicos/desenvolvimento", ariaLabel: "Desenvolvimento Web" },
          { label: "Design", href: "/servicos/design", ariaLabel: "Design e UX/UI" },
          { label: "Consultoria", href: "/servicos/consultoria", ariaLabel: "Consultoria Tech" }
        ]
      },
      contact: {
        label: "Contato",
        links: [
          { label: "Email", href: "mailto:contato@zatas.com.br", ariaLabel: "Envie um email" },
          { label: "WhatsApp", href: "https://wa.me/5516000000000", ariaLabel: "Fale pelo WhatsApp" },
          { label: "LinkedIn", href: "https://linkedin.com/company/zatas", ariaLabel: "Conecte no LinkedIn" }
        ]
      }
    },
    en: {
      about: {
        label: "About",
        links: [
          { label: "Company", href: "/about", ariaLabel: "About Zatas Company" },
          { label: "Team", href: "/team", ariaLabel: "Meet our Team" },
          { label: "Careers", href: "/careers", ariaLabel: "Career Opportunities" }
        ]
      },
      services: {
        label: "Services",
        links: [
          { label: "Development", href: "/services/development", ariaLabel: "Web Development" },
          { label: "Design", href: "/services/design", ariaLabel: "Design and UX/UI" },
          { label: "Consulting", href: "/services/consulting", ariaLabel: "Tech Consulting" }
        ]
      },
      contact: {
        label: "Contact",
        links: [
          { label: "Email", href: "mailto:contact@zatas.com.br", ariaLabel: "Send us an email" },
          { label: "WhatsApp", href: "https://wa.me/5516000000000", ariaLabel: "Chat on WhatsApp" },
          { label: "LinkedIn", href: "https://linkedin.com/company/zatas", ariaLabel: "Connect on LinkedIn" }
        ]
      }
    }
  };

  const t = translations[language];

  const menuItems = [
    {
      label: t.about.label,
      bgColor: "var(--color-primary)",
      textColor: "var(--color-surface)",
      links: t.about.links
    },
    {
      label: t.services.label,
      bgColor: "var(--color-primary-hover)",
      textColor: "var(--color-surface)",
      links: t.services.links
    },
    {
      label: t.contact.label,
      bgColor: "var(--color-primary-active)",
      textColor: "var(--color-surface)",
      links: t.contact.links
    }
  ];

  return (
    <header className="w-full relative min-h-[100px]">
      <CardNav 
        logo={zatasIcon.src}
        logoAlt="Zatas - Seu Portfólio"
        items={menuItems}
        baseColor="var(--color-surface)"
        menuColor="var(--color-text)"
        buttonBgColor="var(--color-primary)"
        buttonTextColor="var(--color-surface)"
        ease="power3.out"
        onThemeToggle={handleThemeToggle}
        onLanguageToggle={handleLanguageToggle}
        currentTheme={theme}
        currentLanguage={language}
      />
    </header>
  );
}