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
        { opacity: 0, scale: 0.97 },
        { opacity: 1, scale: 1, duration: 0.35, ease: 'power3.out' }
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
      const isNearBottom = scrollTop + clientHeight >= scrollHeight - 50;
      if (showScrollIndicator && isNearBottom) {
        setShowScrollIndicator(false);
      } else if (!showScrollIndicator && !isNearBottom && scrollHeight > clientHeight) {
        setShowScrollIndicator(true);
      }
    }
  };

  const handleClose = () => {
    if (modalRef.current) {
      gsap.to(modalRef.current, {
        opacity: 0,
        scale: 0.97,
        duration: 0.25,
        ease: 'power2.in',
        onComplete: onClose
      });
    } else {
      onClose();
    }
  };

  if (!member) return null;

  return (
    <div
      className="fixed inset-0 bg-[#1E1E1E]/70 backdrop-blur-sm z-[100] flex items-center justify-center p-0 md:p-6"
      onClick={handleClose}
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-full h-full md:rounded-[28px] md:max-w-5xl md:h-[92vh] relative overflow-hidden flex flex-col md:flex-row shadow-2xl"
      >
        <button
          onClick={handleClose}
          aria-label={t('modal.closeLabel')}
          className="absolute top-4 right-4 z-[101] w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors cursor-pointer text-[#1E1E1E]"
        >
          <FaTimes className="w-4 h-4" />
        </button>

        <div className="w-full md:w-[32%] bg-[#263238] flex flex-col items-center text-center md:items-start md:text-left border-b md:border-b-0 md:border-r border-gray-200 overflow-y-auto px-6 pt-10 pb-6 md:px-8 md:pt-10 md:pb-8">

          <div className="md:hidden w-24 h-24 rounded-2xl overflow-hidden mb-5 shadow-md bg-white flex-shrink-0 mx-auto">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="hidden md:block w-full aspect-square rounded-2xl overflow-hidden mb-5 shadow-lg bg-white flex-shrink-0">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover"
            />
          </div>

          <h2 className="text-[22px] md:text-[20px] font-bold text-white leading-tight mb-1 uppercase font-sans">
            {member.name}
          </h2>
          <p className="text-[14px] text-white/70 font-serif italic mb-4">
            {member.role}
          </p>

          <div className="flex gap-3 justify-center md:justify-start">
            {member.social.linkedin && (
              <a
                href={member.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-all cursor-pointer"
                onClick={(e) => e.stopPropagation()}
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
            )}
            {member.social.github && (
              <a
                href={member.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-all cursor-pointer"
                onClick={(e) => e.stopPropagation()}
              >
                <FaGithub className="w-4 h-4" />
              </a>
            )}
            {member.social.twitter && (
              <a
                href={member.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-all cursor-pointer"
                onClick={(e) => e.stopPropagation()}
              >
                <FaTwitter className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        <div className="flex-1 relative overflow-hidden bg-white">
          <div
            ref={scrollContentRef}
            onScroll={handleScroll}
            className="h-full overflow-y-auto px-6 py-8 md:px-10 md:py-10 space-y-7 scrollbar-custom"
          >
            <div>
              <h3 className="text-[15px] font-bold text-[#1E1E1E] mb-3 flex items-center gap-2 uppercase font-sans border-b pb-2 border-gray-100">
                <FaUsers className="w-4 h-4 text-[#263238]" />
                {t('modal.about')}
              </h3>
              <p className="text-[15px] text-gray-600 leading-relaxed font-serif">
                {member.bio}
              </p>
            </div>

            <div>
              <h3 className="text-[15px] font-bold text-[#1E1E1E] mb-3 flex items-center gap-2 uppercase font-sans border-b pb-2 border-gray-100">
                <FaCode className="w-4 h-4 text-[#263238]" />
                {t('modal.skills')}
              </h3>
              <div className="flex flex-wrap gap-2">
                {member.skills.map(skill => (
                  <span key={skill} className="bg-[#263238]/10 text-[#263238] px-3 py-1.5 rounded-full text-[13px] font-medium font-sans border border-transparent hover:border-[#263238] transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {member.education && member.education.length > 0 && (
              <div>
                <h3 className="text-[15px] font-bold text-[#1E1E1E] mb-3 flex items-center gap-2 uppercase font-sans border-b pb-2 border-gray-100">
                  <FaGraduationCap className="w-4 h-4 text-[#263238]" />
                  {t('modal.education')}
                </h3>
                <div className="space-y-4">
                  {member.education.map((edu, i) => (
                    <div key={i} className="pl-4 border-l-2 border-[#263238]">
                      <h4 className="font-bold text-[#1E1E1E] text-[15px]">{edu.degree}</h4>
                      <p className="text-gray-500 text-[13px] font-serif italic">{edu.institution}</p>
                      <p className="text-gray-400 text-[12px] mt-0.5">{edu.year}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="pb-8">
              <h3 className="text-[15px] font-bold text-[#1E1E1E] mb-3 flex items-center gap-2 uppercase font-sans border-b pb-2 border-gray-100">
                <FaBriefcase className="w-4 h-4 text-[#263238]" />
                {t('modal.experience')}
              </h3>
              <div className="space-y-5">
                {member.experience.map((exp, i) => (
                  <div key={i} className="group">
                    <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-1">
                      <h4 className="font-bold text-[#1E1E1E] text-[15px] group-hover:text-[#263238] transition-colors">{exp.role}</h4>
                      <span className="text-gray-400 text-[12px] font-mono">{exp.period}</span>
                    </div>
                    <p className="text-[#263238] font-medium text-[13px] mb-1.5">{exp.company}</p>
                    <p className="text-gray-500 text-[13px] leading-relaxed font-serif">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {showScrollIndicator && (
            <div className="absolute bottom-6 right-8 pointer-events-none transition-opacity duration-300">
              <div className="animate-bounce text-[#263238] bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg border border-gray-100">
                <FaChevronDown className="w-4 h-4" />
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-custom::-webkit-scrollbar {
          width: 5px;
        }
        .scrollbar-custom::-webkit-scrollbar-track {
          background: transparent;
        }
        .scrollbar-custom::-webkit-scrollbar-thumb {
          background-color: #E0E0E0;
          border-radius: 20px;
        }
        .scrollbar-custom::-webkit-scrollbar-thumb:hover {
          background-color: #BDBDBD;
        }
      `}</style>
    </div>
  );
});

TeamMemberModal.displayName = 'TeamMemberModal';

export default TeamMemberModal;