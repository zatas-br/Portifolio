'use client';

import CardNav from '../menu/cardNav';
import zatasLogo from '@/public/images/Identidade_visual/icon-zatas-white.svg'

export default function Header() {
  const menuItems = [
    {
      label: "Sobre",
      bgColor: "var(--color-white)",
      textColor: "var(--color-text)",
      links: [
        { label: "Empresa", href: "/sobre", ariaLabel: "Sobre a Empresa Zatas" },
        { label: "Equipe", href: "/equipe", ariaLabel: "Conheça nossa Equipe" },
        { label: "Carreiras", href: "/carreiras", ariaLabel: "Oportunidades de Carreira" }
      ]
    },
    {
      label: "Serviços", 
      bgColor: "var(--color-white)",
      textColor: "var(--color-text)",
      links: [
        { label: "Desenvolvimento", href: "/servicos/desenvolvimento", ariaLabel: "Desenvolvimento Web" },
        { label: "Design", href: "/servicos/design", ariaLabel: "Design e UX/UI" },
        { label: "Consultoria", href: "/servicos/consultoria", ariaLabel: "Consultoria Tech" }
      ]
    },
    {
      label: "Contato",
      bgColor: "var(--color-white)",
      textColor: "var(--color-text)",
      links: [
        { label: "Email", href: "mailto:contato@zatas.com.br", ariaLabel: "Envie um email" },
        { label: "WhatsApp", href: "https://wa.me/5516000000000", ariaLabel: "Fale pelo WhatsApp" },
        { label: "LinkedIn", href: "https://linkedin.com/company/zatas", ariaLabel: "Conecte no LinkedIn" }
      ]
    }
  ];

  return (
    <header className="w-full relative min-h-[100px]">
      <CardNav 
        logo={zatasLogo.src}
        logoAlt="Zatas - Seu Portfólio"
        items={menuItems}
        baseColor="var(--color-primary)"
        menuColor="var(--color-white)"
        buttonBgColor="var(--color-white)"
        buttonTextColor="var(--color-text)"
        ease="power3.out"
      />
    </header>
  );
}