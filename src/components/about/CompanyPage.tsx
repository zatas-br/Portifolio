'use client'

import Link from 'next/link';
import { ABOUT_PAGE_DATA } from '@/src/data/about';
import { useTranslations } from 'next-intl';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface ServiceItem {
  tags: string[];
  image: string;
  projectId?: string;
  projectCategory?: string;
}

interface AboutPageConfig {
  videoUrl: string | null;
  contactHref: string;
  services: ServiceItem[];
  othersButtonHref: string;
  historyButtonHref: string;
  historyImage: string;
}

function Tag({ label }: { label: string }) {
  return (
    <span className="font-serif italic font-normal text-[clamp(13px,1.1vw,20px)] text-[#0D47A1] border-[1.2px] border-[#0D47A1] rounded-full px-5 py-0 inline-flex items-center leading-[1.5] whitespace-nowrap">
      {label}
    </span>
  );
}

function AnimatedLinkButton({
  href,
  children,
  className = '',
  delay = 0,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    gsap.fromTo(
      ref.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, delay, ease: 'power3.out' }
    );
  }, [delay]);

  const handleMouseEnter = () =>
    gsap.to(ref.current, { y: -4, duration: 0.3, ease: 'power2.out' });
  const handleMouseLeave = () =>
    gsap.to(ref.current, { y: 0, duration: 0.3, ease: 'power2.out' });
  const handleMouseDown = () =>
    gsap.to(ref.current, { y: -1, duration: 0.1, ease: 'power2.out' });
  const handleMouseUp = () =>
    gsap.to(ref.current, { y: -4, duration: 0.1, ease: 'power2.out' });

  return (
    <Link
      ref={ref}
      href={href}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      className={`inline-flex items-center justify-center rounded-full bg-[#263238] text-white font-normal no-underline shadow-lg hover:shadow-2xl transition-shadow duration-300 ${className}`}
      style={{ opacity: 0 }}
    >
      {children}
    </Link>
  );
}

export default function AboutPage({ config }: { config?: Partial<AboutPageConfig> }) {
  const t = useTranslations('CompanyPage');
  const cfg: AboutPageConfig = { ...ABOUT_PAGE_DATA, ...config };

  const commitmentItems = t.raw('commitmentItems') as string[];
  const serviceDescriptions = t.raw('serviceDescriptions') as string[];
  const historyParagraphs = t.raw('historyParagraphs') as string[];
  const serviceImageAlts = t.raw('serviceImageAlts') as string[];

  return (
    <div className="bg-[#ECEFF1] font-sans min-h-screen overflow-x-hidden">

      {/* HERO IMAGE — pt-[80px] no mobile para não ficar atrás do menu */}
      <section className="relative w-full bg-[#9CBCE5] overflow-hidden pt-[80px] md:pt-0">
        <img
          src="/images/about/oque-ser-zatas.png"
          alt="O que é ser Zatas?"
          className="w-full h-auto block max-h-[calc(100vh-80px)] object-cover"
        />
      </section>

      {/* HERO CARD + VIDEO */}
      <section className="bg-[#263238] px-[4vw] pt-[4vw] pb-[5.5vw] max-[900px]:px-4 max-[900px]:pt-6 max-[900px]:pb-8">
        <div className="max-w-[1421px] mx-auto bg-[#F0F0F0]
          rounded-[clamp(16px,1.5vw,24px)]
          overflow-hidden
          grid grid-cols-1 md:grid-cols-[1fr_auto]
          shadow-[0_24px_64px_rgba(0,0,0,0.3)]
          min-h-[clamp(300px,55vw,850px)]">

          {/* Texto */}
          <div className="relative px-[clamp(20px,3.5vw,56px)] pt-[clamp(24px,3vw,55px)] pb-[clamp(20px,2.5vw,40px)] flex flex-col justify-between overflow-hidden bg-[#F0F0F0]">

            <div className="relative z-[2]">
              <h2 className="text-[#263238] uppercase text-[28px] md:text-[44px] font-bold font-sans leading-[0.85] tracking-tight mb-[clamp(10px,1.5vw,25px)] max-[900px]:whitespace-normal whitespace-nowrap">
                {t('heroTitle').split('\n').map((line, i, arr) => (
                  <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
                ))}
              </h2>
              <p className="text-[#263238] w-full m-0 text-[16px] font-light leading-relaxed">
                {t('heroSubtitle').split('\n').map((line, i, arr) => (
                  <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
                ))}
              </p>
            </div>

            {/* Pássaro decorativo — só desktop */}
            <div className="absolute bottom-0 left-[16%] w-[136%] pointer-events-none select-none z-[1] drop-shadow-[0_8px_24px_rgba(0,0,0,0.08)] hidden md:block">
              <img
                src="/images/about/fundo-passaro-card-sobre.png"
                alt=""
                aria-hidden
                className="w-full h-auto block opacity-100"
              />
            </div>

            <div className="relative z-[2] mt-6 md:mt-0">
              <AnimatedLinkButton
                href={cfg.contactHref}
                delay={0.3}
                className="text-base md:text-lg px-8 md:px-12 py-[14px] md:py-[22px]"
              >
                {t('contactButton')}
              </AnimatedLinkButton>
            </div>
          </div>

          {/* Vídeo
              Desktop: borda arredondada direita
              Mobile: SEM borda arredondada superior esquerda — apenas inf-esq e ambas inf ficam arredondadas junto com o card pai */}
          <div className="bg-black flex items-center justify-center self-stretch h-full aspect-[9/16] min-h-0 overflow-hidden rounded-none md:rounded-r-[clamp(16px,1.5vw,24px)]">
            {cfg.videoUrl ? (
              <div className="relative w-full h-full">
                <iframe
                  src={cfg.videoUrl}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                <div className="absolute bottom-4 right-4">
                  <a href="https://www.youtube.com/shorts/3irhA3ZwD_0" target="_blank" rel="noopener noreferrer" className="bg-black/60 text-white text-xs px-3 py-2 rounded-full backdrop-blur-sm hover:bg-black/80 transition-colors">{t('viewWithSound')}</a>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center gap-[clamp(10px,1vw,16px)] w-full h-full p-6">
                <div className="flex items-center gap-[clamp(6px,0.6vw,10px)] flex-nowrap">
                  <span className="font-medium text-[clamp(11px,1.1vw,16px)] text-[#263238] whitespace-nowrap">
                    {t('videoLabel')}
                  </span>
                  <button
                    className="w-[clamp(32px,2.8vw,48px)] h-[clamp(32px,2.8vw,48px)] bg-white/85 rounded-full border-none flex items-center justify-center cursor-pointer flex-shrink-0 shadow-[0_2px_12px_rgba(0,0,0,0.15)] pl-0.5"
                    aria-label="Play"
                  >
                    <svg width="14" height="16" viewBox="0 0 14 16" fill="none">
                      <path d="M1 1L13 8L1 15V1Z" fill="#263238" />
                    </svg>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* SEÇÃO ESTRATÉGICA + COMPROMISSO + SERVIÇOS */}
      <section className="bg-[#ECEFF1] pt-[2.5vw] pb-[4vw] pl-[12.7vw] pr-[12vw] max-[900px]:px-5 max-[900px]:pt-8 max-[900px]:pb-8">

        <h2 className="text-[#263238] uppercase text-[28px] md:text-[44px] font-bold font-sans leading-[0.85] tracking-tight mb-[clamp(14px,1.8vw,28px)] max-w-[55vw] max-[900px]:max-w-full">
          {t('strategicTitle')}
        </h2>
        <div className="flex flex-col gap-[clamp(8px,1vw,14px)] max-w-[48.7vw] max-[900px]:max-w-full">
          <p className="text-[#263238] m-0 text-[16px] font-light leading-relaxed">
            {t('strategicDesc1')}
          </p>
          <p className="text-[#263238] m-0 text-[16px] font-light leading-relaxed">
            {t('strategicDesc2')}
          </p>
        </div>

        <h2 className="text-[#263238] uppercase text-[28px] md:text-[44px] font-bold font-sans leading-[0.85] tracking-tight mb-[clamp(12px,1.8vw,28px)] mt-[clamp(24px,4.5vw,72px)]">
          {t('commitmentTitle')}
        </h2>
        <div className="flex flex-col gap-[clamp(0px,0vw,6px)] max-w-[48.7vw] max-[900px]:max-w-full">
          {commitmentItems.map((item, i) => (
            <p key={i} className="text-[#263238] m-0 mb-[2px] text-[16px] font-light leading-relaxed">
              {item}
            </p>
          ))}
          <p className="text-[#263238] m-0 mt-[14px] text-[16px] font-light leading-relaxed">
            {t('commitmentFooter')}
          </p>
        </div>

        <h2 className="text-[#263238] uppercase text-[28px] md:text-[44px] font-bold font-sans leading-[0.85] tracking-tight mb-[clamp(20px,1.8vw,28px)] mt-[clamp(24px,4.5vw,72px)]">
          {t('servicesTitle')}
        </h2>

        <div className="flex flex-col gap-[clamp(32px,5.2vw,75px)] mt-[clamp(16px,3vw,48px)]">
          {cfg.services.map((service, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-[1fr_clamp(72px,10vw,144px)_1fr] items-start gap-5 md:gap-0">

              {/* MOBILE: imagem primeiro (order-1), DESKTOP: col 3 */}
              <div className="order-1 md:order-none md:col-start-3 md:row-start-1 aspect-[666/430] overflow-hidden rounded-none shadow-[0_12px_40px_rgba(0,0,0,0.22)]">
                <img
                  src={service.image}
                  alt={serviceImageAlts[index]}
                  className="w-full h-full object-cover block transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* MOBILE: texto depois (order-2), DESKTOP: col 1 */}
              <div className="order-2 md:order-none md:col-start-1 md:row-start-1 aspect-auto md:aspect-[666/430] bg-transparent flex flex-col justify-start items-start overflow-visible">
                <p className="text-[#263238] mb-[clamp(10px,1vw,16px)] max-w-[26.7vw] max-[900px]:max-w-full text-[16px] font-light leading-relaxed">
                  {serviceDescriptions[index]}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <Tag key={tag} label={tag} />
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        <AnimatedLinkButton
          href={cfg.othersButtonHref}
          delay={0.2}
          className="text-base md:text-lg px-8 md:px-12 py-[14px] md:py-[22px] mt-[clamp(24px,3.5vw,56px)]"
        >
          {t('othersButton')}
        </AnimatedLinkButton>
      </section>

      {/* HISTÓRIA */}
      <section className="bg-[#ECEFF1] px-[5.5vw] pb-[10vw] pt-[3vw] max-[900px]:px-4 max-[900px]:pb-10 max-[900px]:pt-4">
        <div className="w-full max-w-[1580px] mx-auto md:aspect-[1433/546] bg-[#263238] rounded-[clamp(16px,1.5vw,24px)] overflow-hidden grid grid-cols-1 md:grid-cols-[50%_50%] shadow-[0_16px_48px_rgba(0,0,0,0.2)]">
          <div className="w-full h-[200px] md:h-full">
            <img
              src={cfg.historyImage}
              alt={t('historyImageAlt')}
              className="w-full h-full object-cover block"
            />
          </div>
          <div className="px-[clamp(20px,3vw,48px)] py-[clamp(20px,3.5vw,56px)] flex flex-col justify-between h-full box-border text-white">
            <h2 className="uppercase text-[28px] md:text-[44px] font-bold font-sans leading-[0.85] tracking-tight mb-[clamp(12px,1.3vw,20px)]">
              {t('historyCardTitle')}
            </h2>
            <div className="flex flex-col gap-[clamp(10px,0.7vw,10px)] flex-1">
              {historyParagraphs.map((p, i) => (
                <p key={i} className="m-0 text-[16px] font-light leading-relaxed">{p}</p>
              ))}
            </div>
            <div className="flex justify-end mt-[clamp(12px,1.2vw,20px)]">
              <AnimatedLinkButton
                href={cfg.historyButtonHref}
                delay={0.1}
                className="text-[clamp(13px,1vw,18px)] px-[clamp(14px,1.6vw,26px)] py-[clamp(8px,0.75vw,12px)] !bg-white !text-[#263238]"
              >
                {t('teamButton')}
              </AnimatedLinkButton>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}