'use client'

import CardNav from '@/src/components/menu/cardNav';
import zatasIcon from '@/public/images/Identidade_visual/icon-zatas-white.svg';
import { useTranslations, useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';
import { useRouter } from '@/src/i18n/navigation';
import { CONTACT_INFO } from '@/src/data/config';

export default function Header() {
  const currentLocale = useLocale();
  const router = useRouter();
  const fullPathname = usePathname();

  const locales = ['pt-br', 'en-us'];

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

  const cardBg = "#1a2529";
  const cardText = "#ffffff";

  const menuItems = [
    {
      label: t('about.label'),
      bgColor: cardBg,
      textColor: cardText,
      links: [
        { label: t('about.links.0.label'), href: '/about', ariaLabel: t('about.links.0.ariaLabel'), external: false },
        { label: t('about.links.1.label'), href: '/team', ariaLabel: t('about.links.1.ariaLabel'), external: false },
        { label: t('about.links.2.label'), href: '/partnerships', ariaLabel: t('about.links.2.ariaLabel'), external: false }
      ]
    },
    {
      label: t('services.label'),
      bgColor: cardBg,
      textColor: cardText,
      links: [
        { label: t('services.links.0.label'), href: '/services/desenvolvimento', ariaLabel: t('services.links.0.ariaLabel'), external: false },
        { label: t('services.links.1.label'), href: '/services/design', ariaLabel: t('services.links.1.ariaLabel'), external: false },
        { label: t('services.links.2.label'), href: '/services/marketing', ariaLabel: t('services.links.2.ariaLabel'), external: false }
      ]
    },
    {
      label: t('contact.label'),
      bgColor: cardBg,
      textColor: cardText,
      links: [
        { label: t('contact.links.0.label'), href: `mailto:${CONTACT_INFO.EMAIL}`, ariaLabel: t('contact.links.0.ariaLabel'), external: true },
        { label: t('contact.links.1.label'), href: CONTACT_INFO.WHATSAPP, ariaLabel: t('contact.links.1.ariaLabel'), external: true },
        { label: t('contact.links.2.label'), href: CONTACT_INFO.LINKEDIN, ariaLabel: t('contact.links.2.ariaLabel'), external: true }
      ]
    }
  ];

  return (
    <header className="w-full min-h-[100px] absolute">
      <CardNav
        logo={zatasIcon.src}
        logoAlt="Zatas - Seu Portfólio"
        items={menuItems}
        ease="power3.out"

        colors={{
          base: "#263238",       
          menu: "#ffffff",       
          buttonBg: "#1a2529",   
          buttonText: "#ffffff"  
        }}

        language={{
          current: currentLocale,
          onToggle: handleLanguageToggle
        }}
      />
    </header>
  );
}