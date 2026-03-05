'use client'

import Link from 'next/link';
import { ABOUT_PAGE_DATA } from '@/src/data/about';
import { useTranslations } from 'next-intl';

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

export default function AboutPage({ config }: { config?: Partial<AboutPageConfig> }) {
  const t = useTranslations('CompanyPage');
  const cfg: AboutPageConfig = { ...ABOUT_PAGE_DATA, ...config };

  const commitmentItems = t.raw('commitmentItems') as string[];
  const serviceDescriptions = t.raw('serviceDescriptions') as string[];
  const historyParagraphs = t.raw('historyParagraphs') as string[];
  const serviceImageAlts = t.raw('serviceImageAlts') as string[];

  return (
    <div className="bg-[#ECEFF1] font-sans min-h-screen overflow-x-hidden">

      <section className="relative w-full bg-[#B8D4E8] overflow-hidden">
        <img
          src="/images/about/oque-ser-zatas.png"
          alt="O que é ser Zatas?"
          className="w-full h-auto block max-h-[calc(100vh-80px)] object-cover transform -translate-y-111px]"
        />
      </section>

      <section className="bg-[#263238] px-[5.5vw] pt-[4vw] pb-[5.5vw]">
        <div className="max-w-[1421px] mx-auto bg-[#F0F0F0] rounded-[clamp(16px,1.5vw,24px)] overflow-hidden grid grid-cols-1 md:grid-cols-[1fr_auto] shadow-[0_24px_64px_rgba(0,0,0,0.3)] min-h-[clamp(450px,55vw,850px)]">

          <div className="relative px-[clamp(24px,3.5vw,56px)] pt-[55px] pb-[40px] flex flex-col justify-between overflow-hidden bg-[#F0F0F0]">

            <div className="relative z-[2]">
              <div className="inline-block">
                <h2 className="font-bold text-[clamp(32px,4vw,52px)] text-[#263238] leading-[1.1] uppercase mb-[clamp(15px,1.5vw,25px)] whitespace-nowrap">
                  {t('heroTitle').split('\n').map((line, i, arr) => (
                    <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
                  ))}
                </h2>

                <p className="font-light text-[clamp(20px,1.05vw,15px)] text-[#263238] leading-[1.35] w-full m-0">
                  {t('heroSubtitle').split('\n').map((line, i, arr) => (
                    <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
                  ))}
                </p>
              </div>
            </div>

            <div className="absolute bottom-0 left-[16%] w-[136%] pointer-events-none select-none z-[1] drop-shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
              <img
                src="/images/about/fundo-passaro-card-sobre.png"
                alt=""
                aria-hidden
                className="w-full h-auto block opacity-100"
              />
            </div>

            <div className="relative z-[2]">
              <Link href={cfg.contactHref} className="font-normal text-[clamp(18px,1vw,22px)] bg-[#263238] text-white px-12 py-5 rounded-full inline-flex items-center no-underline hover:brightness-125 transition-all shadow-lg">
                {t('contactButton')}
              </Link>
            </div>
          </div>

          <div className="bg-[#B8D4E8] flex items-center justify-center self-stretch h-full aspect-[9/16] min-h-[400px] md:min-h-0 overflow-hidden">
            {cfg.videoUrl ? (
              <div className="relative w-full h-full group">
                <iframe
                  src={cfg.videoUrl}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href="https://www.youtube.com/shorts/3irhA3ZwD_0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black/60 text-white text-xs px-3 py-2 rounded-full backdrop-blur-sm hover:bg-black/80 transition-colors"
                  >
                    Ver com som
                  </a>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center gap-[clamp(10px,1vw,16px)] w-full h-full p-6">
                <div className="flex items-center gap-[clamp(6px,0.6vw,10px)] flex-nowrap">
                  <span className="font-medium text-[clamp(11px,1.1vw,16px)] text-[#263238] whitespace-nowrap">
                    {t('videoLabel')}
                  </span>
                  <button className="w-[clamp(32px,2.8vw,48px)] h-[clamp(32px,2.8vw,48px)] bg-white/85 rounded-full border-none flex items-center justify-center cursor-pointer flex-shrink-0 shadow-[0_2px_12px_rgba(0,0,0,0.15)] pl-0.5" aria-label="Play">
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

      <section className="bg-[#ECEFF1] pt-[2.5vw] pb-[4vw] pl-[12.7vw] pr-[12vw] max-[900px]:px-6 max-[900px]:pt-10 max-[900px]:pb-8">
        <h2 className="font-bold text-[clamp(22px,3vw,44px)] text-[#263238] uppercase leading-[1.15] mb-[clamp(50px,1.8vw,28px)] max-w-[55vw] max-[900px]:max-w-full">
          {t('strategicTitle')}
        </h2>
        <div className="flex flex-col gap-[clamp(8px,1vw,14px)] max-w-[48.7vw] max-[900px]:max-w-full">
          <p className="font-light text-[clamp(19px,1.1vw,16px)] text-[#263238] leading-[1.25] m-0">
            {t('strategicDesc1')}
          </p>
          <p className="font-light text-[clamp(19px,1.1vw,16px)] text-[#263238] leading-[1.25] m-0">
            {t('strategicDesc2')}
          </p>
        </div>

        <h2 className="font-bold text-[clamp(22px,3vw,44px)] text-[#263238] uppercase leading-[1.15] mb-[clamp(16px,1.8vw,28px)] mt-[clamp(40px,4.5vw,72px)]">
          {t('commitmentTitle')}
        </h2>
        <div className="flex flex-col gap-[clamp(0px,0vw,6px)] max-w-[48.7vw] max-[900px]:max-w-full">
          {commitmentItems.map((item, i) => (
            <p key={i} className="font-light text-[clamp(19px,1.1vw,16px)] text-[#263238] leading-[1.25] m-0 mb-[2px]">
              {item}
            </p>
          ))}
          <p className="font-light text-[clamp(19px,1.1vw,16px)] text-[#263238] leading-[1.75] m-0 mt-[14px]">
            {t('commitmentFooter')}
          </p>
        </div>

        <h2 className="font-bold text-[clamp(22px,3vw,44px)] text-[#263238] uppercase leading-[1.15] mb-[clamp(90px,1.8vw,28px)] mt-[clamp(40px,4.5vw,72px)]">
          {t('servicesTitle')}
        </h2>

        <div className="flex flex-col gap-[clamp(40px,5.2vw,75px)] mt-[clamp(28px,3vw,48px)]">
          {cfg.services.map((service, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-[1fr_clamp(72px,10vw,144px)_1fr] items-start">

              <div className="col-start-1 aspect-[666/430] bg-transparent flex flex-col justify-start items-start overflow-visible">
                <div className="p-0 mt-0">
                  <p className="font-light text-[clamp(19px,1.1vw,16px)] text-[#263238] leading-[1.25] mb-[clamp(10px,1vw,16px)] max-w-[26.7vw] max-[900px]:max-w-full">
                    {serviceDescriptions[index]}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <Tag key={tag} label={tag} />
                    ))}
                  </div>
                </div>
              </div>

              <div className="md:col-start-3 aspect-[666/430] overflow-hidden rounded-none shadow-[0_12px_40px_rgba(0,0,0,0.22)] max-[900px]:col-start-1 relative group">
                <img
                  src={service.image}
                  alt={serviceImageAlts[index]}
                  className="w-full h-full object-cover block transition-transform duration-500 group-hover:scale-105"
                />
                {service.projectId && service.projectCategory && (
                  <Link
                    href={`/services/${service.projectCategory}/${service.projectId}`}
                    className="absolute inset-0 flex items-center justify-center bg-[#263238]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <span className="bg-white text-[#263238] font-semibold text-sm px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors">
                      Ver detalhes do projeto &rarr;
                    </span>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        <Link
          href={cfg.othersButtonHref}
          className="font-normal text-[clamp(24px,1.1vw,16px)] text-white bg-[#263238] border-2 border-[#263238] px-[clamp(43px,2.2vw,36px)] py-[clamp(26px,0.9vw,14px)] rounded-full inline-flex items-center no-underline mt-[clamp(32px,3.5vw,56px)]"
        >
          {t('othersButton')}
        </Link>
      </section>

      <section className="bg-[#ECEFF1] px-[5.5vw] pb-[10vw] pt-[3vw] max-[900px]:px-6 max-[900px]:pb-12">
        <div className="w-full max-w-[1580px] mx-auto aspect-[1433/546] bg-[#263238] rounded-[clamp(16px,1.5vw,24px)] overflow-hidden grid grid-cols-1 md:grid-cols-[50%_50%] shadow-[0_16px_48px_rgba(0,0,0,0.2)] max-[900px]:aspect-auto">
          <div className="w-full h-full max-[900px]:h-[220px]">
            <img src={cfg.historyImage} alt={t('historyImageAlt')} className="w-full h-full object-cover block" />
          </div>
          <div className="px-[clamp(24px,3vw,48px)] py-[clamp(24px,3.5vw,56px)] flex flex-col justify-between h-full box-border text-white">
            <h2 className="font-bold text-[clamp(22px,2.8vw,52px)] uppercase leading-[1.15] mb-[clamp(38px,1.3vw,20px)]">
              {t('historyCardTitle')}
            </h2>
            <div className="flex flex-col gap-[clamp(16px,0.7vw,10px)] flex-1">
              {historyParagraphs.map((p, i) => (
                <p key={i} className="font-light text-[clamp(22px,1.3vw,18px)] leading-[1.3] m-0">{p}</p>
              ))}
            </div>
            <div className="flex justify-end mt-[clamp(12px,1.2vw,20px)]">
              <Link href={cfg.historyButtonHref} className="font-normal text-[clamp(16px,1vw,18px)] bg-[#ffffff] text-[#263238] px-[clamp(16px,1.6vw,26px)] py-[clamp(8px,0.75vw,12px)] rounded-full">
                {t('teamButton')}
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}