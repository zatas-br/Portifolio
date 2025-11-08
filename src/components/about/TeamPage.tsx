'use client'

import { useState, useEffect, useRef } from 'react';
import { 
  FaUsers,
  FaArrowRight
} from 'react-icons/fa';
import { TEAM_AUTHORS } from '@/src/data/team';
import { useMessages, useTranslations } from 'next-intl';
import { TeamMember, ProjectAuthor } from '@/types';
import { usePortfolioAnimations } from '@/src/hooks/usePortfolioAnimations';
import TeamMemberModal from './TeamMemberModal';

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
  const { animateFadeIn, animateEnter } = usePortfolioAnimations();

  const allowedIds = [
    'antony-brito',
    'bruno-santiago',
    'gabriel-cardoso',
    'thiago-bryan'
  ];

  useEffect(() => {
    animateFadeIn(headerRef.current, 0);
    animateEnter(cardsRef.current, 0.15);
  }, [animateEnter, animateFadeIn]);

  const filteredAuthors = Object.entries(TEAM_AUTHORS).filter(([id, profile]) => {
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
    <div className="min-h-screen bg-surface">
      <div ref={headerRef} className="bg-gradient-to-br from-start-gradient to-final-gradient border-b border-border py-12 md:py-16 lg:py-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 md:gap-3 mb-3 md:mb-4">
            <FaUsers className="w-6 h-6 md:w-8 md:h-8 text-white" />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">{t('title')}</h1>
          </div>
          <p className="text-base md:text-lg lg:text-xl text-gray max-w-2xl mx-auto px-4">
            {t('description')}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {filteredAuthors.map(([id, profile], index) => (
            <div
              key={id}
              ref={el => { cardsRef.current[index] = el; }}
              onClick={() => handleSelectMember({ ...profile, id })}
              className="group cursor-pointer"
            >
              <div className="bg-surface border-2 border-border rounded-xl md:rounded-2xl overflow-hidden hover:border-primary-v2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <div className="aspect-square overflow-hidden bg-surface-alt">
                  <img
                    src={profile.avatar}
                    alt={t(`members.${id}.name`)}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-text mb-1 md:mb-2 group-hover:text-primary-v2 transition-colors">
                    {t(`members.${id}.name`)}
                  </h3>
                  <p className="text-primary-v2 font-medium mb-2 md:mb-3 text-xs md:text-sm">{t(`members.${id}.role`)}</p>
                  <p className="text-text-muted text-xs md:text-sm line-clamp-3 leading-relaxed mb-3 md:mb-4">{t(`members.${id}.bio`)}</p>
                  <div className="flex items-center gap-2 text-primary-v2 font-semibold text-xs md:text-sm">
                    {t('card.viewProfile')}
                    <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <TeamMemberModal
        member={selectedMember}
        onClose={() => setSelectedMember(null)}
      />
    </div>
  );
}