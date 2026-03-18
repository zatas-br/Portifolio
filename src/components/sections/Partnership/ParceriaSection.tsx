"use client";

import { useTranslations } from "next-intl";
import { PARTNERSHIP_TYPES_IMAGES, PARTNERSHIP_REASONS_ICONS } from "@/src/data/home";

const ParceriaSection = () => {
  const t = useTranslations('PartnershipsPage.opportunity');

  const typesOfPartnershipLocalized = [
    { title: t('types.socios'), image: PARTNERSHIP_TYPES_IMAGES.socios },
    { title: t('types.investidores'), image: PARTNERSHIP_TYPES_IMAGES.investidores },
    { title: t('types.comerciais'), image: PARTNERSHIP_TYPES_IMAGES.comerciais },
  ];

  const contentLocalized = [
    {
      title: t('reasons.growth.title'),
      iconUri: PARTNERSHIP_REASONS_ICONS.growth,
      describe: t('reasons.growth.description'),
    },
    {
      title: t('reasons.team.title'),
      iconUri: PARTNERSHIP_REASONS_ICONS.team,
      describe: t('reasons.team.description'),
    },
    {
      title: t('reasons.service.title'),
      iconUri: PARTNERSHIP_REASONS_ICONS.service,
      describe: t('reasons.service.description'),
    },
    {
      title: t('reasons.innovation.title'),
      iconUri: PARTNERSHIP_REASONS_ICONS.innovation,
      describe: t('reasons.innovation.description'),
    },
  ];

  return (
    <section className="flex flex-col justify-center w-full px-5 md:px-20 py-16 md:py-0 md:h-[100vh] gap-12">

      <div className="flex flex-col gap-5 md:gap-6">
        <div className="flex flex-col items-start">
          <span className="text-text-blue relative z-10 -mb-1 md:-mb-2 text-[20px] md:text-[32px] font-serif italic leading-none">
            {t('label')}
          </span>
          <span className="text-slate-900 uppercase text-[28px] md:text-[44px] font-bold font-sans leading-[0.85] tracking-tight">
            {t('title')}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:hidden">
          {typesOfPartnershipLocalized.map((item, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-xl border border-slate-100/50 py-6 px-5 flex items-center justify-center gap-3 min-h-[80px]">
              <img src={item.image} alt="Icone de parceria" className="w-8 h-8 flex-shrink-0" />
              <span className="font-bold text-slate-800 text-sm leading-tight font-sans">{item.title}</span>
            </div>
          ))}
        </div>

        <div className="hidden md:grid grid-cols-3 gap-6">
          {typesOfPartnershipLocalized.map((item, i) => (
            <div key={i} className="bg-white rounded-3xl shadow-xl border border-slate-100/50 h-[40vh] flex items-center justify-center gap-4">
              <img src={item.image} alt="Icone de parceria" className="w-16 h-16" />
              <span className="font-bold text-slate-800 text-2xl font-sans">{item.title}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-5 md:gap-6">
        <div className="flex flex-col items-end w-full text-right">
          <span className="text-text-blue relative z-10 -mb-1 md:-mb-2 text-[20px] md:text-[32px] font-serif italic leading-none">
            {t('whyLabel')}
          </span>
          <h2 className="text-slate-900 uppercase text-[28px] md:text-[44px] font-bold font-sans leading-[0.85] tracking-tight">
            <span className="md:hidden">
              {t('whyTitle').split('\n').map((line, i, arr) => (
                <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
              ))}
            </span>
            <span className="hidden md:inline">
              {t('whyTitle').replace('\n', ' ')}
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
          {contentLocalized.map((item, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col gap-3 border border-slate-100/50">
              <div className="flex justify-between items-start gap-3">
                <h3 className="font-bold text-slate-800 text-sm leading-tight flex-1 font-sans">{item.title}</h3>
                <img src={item.iconUri} alt="Icone de parceria" className="w-8 h-8 flex-shrink-0" />
              </div>
              <p className="text-slate-500 text-[16px] font-light leading-relaxed">{item.describe}</p>
            </div>
          ))}
        </div>

        <div className="hidden md:grid grid-cols-2 2xl:grid-cols-4 gap-6">
          {contentLocalized.map((item, i) => (
            <div key={i} className="bg-white rounded-3xl shadow-sm hover:shadow-md transition-shadow p-8 flex flex-col gap-4 border border-slate-100/50">
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-slate-800 text-base w-2/3 leading-tight font-sans">{item.title}</h3>
                <img src={item.iconUri} alt="Icone de parceria" className="w-10 h-10" />
              </div>
              <p className="text-slate-500 text-[16px] font-light leading-relaxed">
                {item.describe}
              </p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default ParceriaSection;