'use client'

import { useEffect, useRef, useState, memo } from 'react';
import { 
  FaTimes,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaGraduationCap,
  FaBriefcase,
  FaCode,
  FaUsers,
  FaChevronDown
} from 'react-icons/fa';
import { useTranslations } from 'next-intl';
import { TeamMember } from '@/types';
import gsap from 'gsap';

interface TeamMemberModalProps {
  member: TeamMember | null;
  onClose: () => void;
}

const TeamMemberModal = memo(({ member, onClose }: TeamMemberModalProps) => {
  const t = useTranslations('TeamPage');
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const scrollContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (member && modalRef.current) {
      gsap.fromTo(modalRef.current, 
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.3, ease: 'power2.out' }
      );
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';

      setTimeout(() => {
        if (scrollContentRef.current) {
          const hasScroll = scrollContentRef.current.scrollHeight > scrollContentRef.current.clientHeight;
          setShowScrollIndicator(hasScroll);
        }
      }, 100);
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.documentElement.style.overflow = 'unset';
    };
  }, [member]);

  const handleScroll = () => {
    if (scrollContentRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollContentRef.current;
      const isNearBottom = scrollTop + clientHeight >= scrollHeight - 100;
      if (showScrollIndicator && isNearBottom) {
        setShowScrollIndicator(false);
      } else if (!showScrollIndicator && !isNearBottom && scrollHeight > clientHeight) {
        setShowScrollIndicator(true);
      }
    }
  };

  const handleClose = () => {
    if (scrollContentRef.current) {
      scrollContentRef.current.scrollTop = 0;
    }
    onClose();
  };

  if (!member) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-0 md:p-4"
      onClick={handleClose}
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="bg-surface rounded-none md:rounded-3xl max-w-4xl w-full h-screen md:h-auto md:max-h-[90vh] relative border-0 md:border-2 md:border-border overflow-hidden flex flex-col"
      >
        <button
          onClick={handleClose}
          aria-label={t('modal.closeLabel')}
          className="absolute top-12 right-4 md:top-6 md:right-6 w-12 h-12 md:w-10 md:h-10 bg-surface-alt hover:bg-border rounded-full flex items-center justify-center transition-colors z-[101] cursor-pointer shadow-lg md:shadow-none"
        >
          <FaTimes className="w-6 h-6 md:w-5 md:h-5 text-text" />
        </button>

        <div className="grid md:grid-cols-3 h-full md:h-auto overflow-hidden">
          <div className="bg-gradient-to-br from-start-gradient to-final-gradient text-white p-6 md:p-8 rounded-none md:rounded-l-3xl pt-20 md:pt-8 pb-4 md:pb-8 flex-shrink-0 md:flex-shrink">
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 md:w-full md:h-auto md:aspect-square object-cover rounded-xl md:rounded-2xl mb-3 md:mb-6 border-4 border-white/20 mx-auto"
            />
            <h2 className="text-xl md:text-2xl font-bold mb-1 md:mb-2">{member.name}</h2>
            <p className="text-white/80 mb-3 md:mb-6 text-sm md:text-base">{member.role}</p>
            
            <div className="flex gap-2 md:gap-3 justify-center md:justify-start">
              {member.social.linkedin && (
                <a
                  href={member.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-colors cursor-pointer"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaLinkedin className="w-4 h-4 md:w-5 md:h-5" />
                </a>
              )}
              {member.social.github && (
                <a
                  href={member.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-colors cursor-pointer"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaGithub className="w-4 h-4 md:w-5 md:h-5" />
                </a>
              )}
              {member.social.twitter && (
                <a
                  href={member.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-colors cursor-pointer"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaTwitter className="w-4 h-4 md:w-5 md:h-5" />
                </a>
              )}
            </div>
          </div>

          <div className="md:col-span-2 relative flex-1 md:flex-none overflow-hidden md:max-h-[calc(90vh-4rem)]">
            <div
              ref={scrollContentRef}
              onScroll={handleScroll}
              className="h-full overflow-y-auto scrollbar-hide p-6 md:p-8"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
              }}
            >
              <div className="mb-6 md:mb-8">
                <h3 className="text-lg md:text-xl font-bold text-text mb-2 md:mb-3 flex items-center gap-2">
                  <FaUsers className="w-4 h-4 md:w-5 md:h-5 text-primary-v2" />
                  {t('modal.about')}
                </h3>
                <p className="text-text-muted leading-relaxed text-sm md:text-base">{member.bio}</p>
              </div>

              <div className="mb-6 md:mb-8">
                <h3 className="text-lg md:text-xl font-bold text-text mb-2 md:mb-3 flex items-center gap-2">
                  <FaCode className="w-4 h-4 md:w-5 md:h-5 text-primary-v2" />
                  {t('modal.skills')}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {member.skills.map(skill => (
                    <span key={skill} className="bg-surface-alt border border-border text-icons px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium hover:border-primary transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6 md:mb-8">
                <h3 className="text-lg md:text-xl font-bold text-text mb-2 md:mb-3 flex items-center gap-2">
                  <FaGraduationCap className="w-4 h-4 md:w-5 md:h-5 text-primary-v2" />
                  {t('modal.education')}
                </h3>
                <div className="space-y-3 md:space-y-4">
                  {member.education.map((edu, i) => (
                    <div key={i} className="border-l-4 border-primary-v2 pl-3 md:pl-4 py-2 bg-surface-alt/50 rounded-r-lg pr-3 md:pr-4">
                      <h4 className="font-bold text-text text-sm md:text-base">{edu.degree}</h4>
                      <p className="text-text-muted text-xs md:text-sm">{edu.institution}</p>
                      <p className="text-xs text-text-muted/70">{edu.year}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pb-20 md:pb-4">
                <h3 className="text-lg md:text-xl font-bold text-text mb-2 md:mb-3 flex items-center gap-2">
                  <FaBriefcase className="w-4 h-4 md:w-5 md:h-5 text-primary-v2" />
                  {t('modal.experience')}
                </h3>
                <div className="space-y-4 md:space-y-6">
                  {member.experience.map((exp, i) => (
                    <div key={i} className="border-l-4 border-border pl-3 md:pl-4 py-2 hover:border-primary-v2 transition-colors">
                      <h4 className="font-bold text-text text-sm md:text-base">{exp.role}</h4>
                      <p className="text-primary-v2 font-medium text-sm md:text-base">{exp.company}</p>
                      <p className="text-xs md:text-sm text-text-muted/70 mb-2">{exp.period}</p>
                      <p className="text-text-muted text-xs md:text-sm leading-relaxed">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {showScrollIndicator && (
              <div className="absolute bottom-6 md:bottom-4 left-1/2 -translate-x-1/2 pointer-events-none">
                <div className="animate-bounce text-primary-v2 bg-surface/80 backdrop-blur-sm rounded-full p-2 shadow-lg">
                  <FaChevronDown className="w-5 h-5 md:w-6 md:h-6" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
});

TeamMemberModal.displayName = 'TeamMemberModal';

export default TeamMemberModal;