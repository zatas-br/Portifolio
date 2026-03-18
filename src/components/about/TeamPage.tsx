'use client'

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { TEAM_AUTHORS } from '@/src/data/team';
import { useMessages, useTranslations } from 'next-intl';
import { TeamMember, ProjectAuthor } from '@/types';
import { usePortfolioAnimations } from '@/src/hooks/usePortfolioAnimations';
import TeamMemberModal from './TeamMemberModal';
import Header from '@/src/components/layout/Header';

type Education = { institution: string; degree: string; year: string; };
type Experience = { company: string; role: string; period: string; description: string; };
type MemberContent = {
  name: string;
  role: string;
  bio: string;
  skills: string[];
  education: Education[];
  experience: Experience[];
};
type Messages = {
  TeamPage: {
    members: {
      [key: string]: MemberContent;
    }
  }
};

export default function TeamPage() {
  const t = useTranslations('TeamPage');
  const messages = useMessages() as Messages;
  const memberContentData = messages.TeamPage.members;

  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const hasAnimated = useRef(false);
  const { animateFadeIn, animateEnter } = usePortfolioAnimations();

  const allowedIds = [
    'antony-brito',
    'bruno-santiago',
    'gabriel-cardoso',
    'thiago-bryan'
  ];

  useEffect(() => {
    if (!hasAnimated.current) {
      if (headerRef.current) animateFadeIn(headerRef.current, 0.1);
      if (cardsRef.current.length > 0) animateEnter(cardsRef.current, 0.3);
      hasAnimated.current = true;
    }
  }, [animateEnter, animateFadeIn]);

  const filteredAuthors = Object.entries(TEAM_AUTHORS).filter(([id]) => {
    return allowedIds.includes(id);
  });

  const handleSelectMember = (profile: ProjectAuthor & { id: string }) => {
    const content = memberContentData[profile.id];
    if (content) {
      const fullMember: TeamMember = {
        ...content,
        id: profile.id,
        image: profile.avatar || '',
        avatar: profile.avatar || '',
        social: {
          linkedin: profile.linkedin,
          github: profile.github,
        },
      };
      setSelectedMember(fullMember);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-white text-[#1E1E1E]">
      <Header />
      <div className="max-w-[1800px] mx-auto px-6 min-h-screen pt-56 xl:pt-58 pb-24 relative z-10 flex flex-col items-center xl:items-start justify-start">

        <header ref={headerRef} className="text-left mb-6 w-full max-w-[1600px] mx-auto xl:px-0 px-4 opacity-0">
          <p className="relative z-20 text-[32px] text-[#0D47A1] font-serif italic leading-none m-0 -mb-[9px]">
            {t("titleSmall")}
          </p>
          <h1 className="relative z-10 text-[44px] font-bold font-sans text-[#1E1E1E] uppercase leading-[0.85] tracking-tight m-0">
            {t("titleLarge")}
          </h1>
        </header>

        <div className="w-full max-w-[1600px] mx-auto flex flex-col items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 2xl:gap-[40px] justify-items-center w-full">
            {filteredAuthors.map(([id, profile], index) => (
              <div
                key={id}
                ref={el => { cardsRef.current[index] = el; }}
                className="relative opacity-0 w-full"
              >
                {index === 3 && (
                  <div className="hidden 2xl:block absolute -right-[245px] -bottom-[845px] w-[320%] h-[320%] -z-10 pointer-events-none">
                    <Image
                      src="/images/fundo-tela-equipe.png"
                      alt="Fundo Pássaro"
                      fill
                      className="object-contain opacity-100"
                    />
                  </div>
                )}

                <div
                  className="relative group cursor-pointer w-full aspect-[6/7] rounded-[35px] overflow-hidden shadow-[0px_3px_12px_0px_rgba(0,0,0,0.7)] bg-gray-100"
                  style={{ maxWidth: '360px', margin: '0 auto' }}
                  onClick={() => handleSelectMember({ ...profile, id })}
                >
                  <img
                    src={profile.avatar}
                    alt={t(`members.${id}.name`)}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div
                    className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[305px] max-w-[85%] h-[72px] bg-[#263238]/70 backdrop-blur-sm rounded-[15px] flex flex-col justify-center px-5 py-2 shadow-md transition-all duration-300 group-hover:bg-[#263238]/85"
                  >
                    <h3 className="font-bold text-[20px] text-white font-sans leading-tight uppercase">
                      {t(`members.${id}.name`)}
                    </h3>

                    <div className="flex justify-between items-center mt-1 w-full">
                      <span className="font-serif italic text-[14px] text-white max-w-[60%] truncate">
                        {t(`members.${id}.role`)}
                      </span>
                      <span className="font-serif italic text-[14px] text-white flex items-center gap-1 group-hover:underline whitespace-nowrap">
                        {t('card.viewProfile')} &rarr;
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <TeamMemberModal
        member={selectedMember}
        onClose={() => setSelectedMember(null)}
      />
    </div>
  );
}