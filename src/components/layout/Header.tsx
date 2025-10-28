'use client'

import { useState } from 'react';
import CardNav from '@/src/components/menu/cardNav';
import zatasIcon from '@/public/images/Identidade_visual/icon-zatas-white.svg';
import { useTranslations, useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';
import { useRouter } from '@/src/i18n/navigation';

export default function Header() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const currentLocale = useLocale(); // Usado para o estado 'current' do botão
  const router = useRouter(); 
  const fullPathname = usePathname();

  const locales = ['pt-br', 'en-us'];

  const handleThemeToggle = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark');
  };

  const handleLanguageToggle = () => {
    // 2. Descubra qual locale está ATUALMENTE na URL
    let currentLocaleOnPath = locales.find(loc => 
      fullPathname === `/${loc}` || fullPathname.startsWith(`/${loc}/`)
    );
    
    // Se não encontrar (ex: raiz '/'), use o hook useLocale como fallback
    if (!currentLocaleOnPath) {
      currentLocaleOnPath = currentLocale; 
    }

    // 3. Calcule o novo idioma
    const newLanguage = currentLocaleOnPath === 'pt-br' ? 'en-us' : 'pt-br';

    // 4. Limpe o path usando o locale que ENCONTRAMOS
    const regex = new RegExp(`^/${currentLocaleOnPath}`);
    let newPath = fullPathname.replace(regex, '');

    // 5. Garanta que a raiz seja "/"
    if (newPath === '') {
      newPath = '/';
    }

    // 6. Faça o push correto
    // Ex: router.push("/sobre", { locale: "en-us" })
    // Ex: router.push("/", { locale: "en-us" })
    router.push(newPath, { locale: newLanguage });
    router.refresh();
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
        { label: t('about.links.2.label'), href: '/careers', ariaLabel: t('about.links.2.ariaLabel') }
      ]
    },
    {
      label: t('services.label'),
      bgColor: "var(--color-primary-active)",
      textColor: "var(--color-surface)",
      links: [
       { label: 'Desenvolvimento', href: '/services/desenvolvimento', ariaLabel: 'Ver projetos de desenvolvimento' },
      { label: 'Design', href: '/services/design', ariaLabel: 'Ver projetos de design' },
      { label: 'Marketing', href: '/services/marketing', ariaLabel: 'Ver projetos de marketing' }
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