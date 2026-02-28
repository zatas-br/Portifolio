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
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.4, ease: 'power3.out' }
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
            scale: 0.95,
            duration: 0.3,
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
      className="fixed inset-0 bg-[#1E1E1E]/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4 md:p-8"
      onClick={handleClose}
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-[35px] max-w-5xl w-full h-[90vh] md:h-auto md:max-h-[85vh] relative overflow-hidden flex flex-col md:flex-row shadow-2xl"
      >
        <button
          onClick={handleClose}
          aria-label={t('modal.closeLabel')}
          className="absolute top-4 right-4 z-[101] w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors cursor-pointer text-[#1E1E1E]"
        >
          <FaTimes className="w-5 h-5" />
        </button>

        <div className="w-full md:w-[35%] bg-[#F5F7F8] p-8 flex flex-col items-center text-center md:items-start md:text-left border-b md:border-b-0 md:border-r border-gray-200 overflow-y-auto">

            <div className="w-40 md:w-full h-auto rounded-[25px] overflow-hidden mb-6 shadow-md bg-white">
                <img
                src={member.image}
                alt={member.name}
                className="w-full h-auto block"
                />
            </div>
            
            <h2 className="text-[28px] font-bold text-[#1E1E1E] leading-tight mb-2 uppercase font-sans">
                {member.name}
            </h2>
            <p className="text-[16px] text-[#0D47A1] font-serif italic mb-6">
                {member.role}
            </p>
            
            <div className="flex gap-4 justify-center md:justify-start mt-auto md:mt-0">
                {member.social.linkedin && (
                <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white border border-gray-200 hover:border-[#0D47A1] hover:text-[#0D47A1] text-[#1E1E1E] rounded-full flex items-center justify-center transition-all cursor-pointer shadow-sm"
                    onClick={(e) => e.stopPropagation()}
                >
                    <FaLinkedin className="w-5 h-5" />
                </a>
                )}
                {member.social.github && (
                <a
                    href={member.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white border border-gray-200 hover:border-[#0D47A1] hover:text-[#0D47A1] text-[#1E1E1E] rounded-full flex items-center justify-center transition-all cursor-pointer shadow-sm"
                    onClick={(e) => e.stopPropagation()}
                >
                    <FaGithub className="w-5 h-5" />
                </a>
                )}
                {member.social.twitter && (
                <a
                    href={member.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white border border-gray-200 hover:border-[#0D47A1] hover:text-[#0D47A1] text-[#1E1E1E] rounded-full flex items-center justify-center transition-all cursor-pointer shadow-sm"
                    onClick={(e) => e.stopPropagation()}
                >
                    <FaTwitter className="w-5 h-5" />
                </a>
                )}
            </div>
        </div>

        <div className="flex-1 relative overflow-hidden bg-white">
            <div
              ref={scrollContentRef}
              onScroll={handleScroll}
              className="h-full overflow-y-auto p-8 md:p-10 space-y-8 scrollbar-custom"
            >
              <div>
                <h3 className="text-[20px] font-bold text-[#1E1E1E] mb-4 flex items-center gap-3 uppercase font-sans border-b pb-2 border-gray-100">
                  <FaUsers className="w-5 h-5 text-[#0D47A1]" />
                  {t('modal.about')}
                </h3>
                <p className="text-[16px] text-gray-600 leading-relaxed font-serif">
                    {member.bio}
                </p>
              </div>

              <div>
                <h3 className="text-[20px] font-bold text-[#1E1E1E] mb-4 flex items-center gap-3 uppercase font-sans border-b pb-2 border-gray-100">
                  <FaCode className="w-5 h-5 text-[#0D47A1]" />
                  {t('modal.skills')}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {member.skills.map(skill => (
                    <span key={skill} className="bg-[#E3F2FD] text-[#0D47A1] px-4 py-2 rounded-full text-[14px] font-medium font-sans border border-transparent hover:border-[#0D47A1] transition-colors cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {member.education && member.education.length > 0 && (
                <div>
                  <h3 className="text-[20px] font-bold text-[#1E1E1E] mb-4 flex items-center gap-3 uppercase font-sans border-b pb-2 border-gray-100">
                    <FaGraduationCap className="w-5 h-5 text-[#0D47A1]" />
                    {t('modal.education')}
                  </h3>
                  <div className="space-y-4">
                    {member.education.map((edu, i) => (
                      <div key={i} className="pl-4 border-l-2 border-[#0D47A1]">
                        <h4 className="font-bold text-[#1E1E1E] text-[16px]">{edu.degree}</h4>
                        <p className="text-gray-600 text-[14px] font-serif italic">{edu.institution}</p>
                        <p className="text-gray-400 text-[12px] mt-1">{edu.year}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="pb-8">
                <h3 className="text-[20px] font-bold text-[#1E1E1E] mb-4 flex items-center gap-3 uppercase font-sans border-b pb-2 border-gray-100">
                  <FaBriefcase className="w-5 h-5 text-[#0D47A1]" />
                  {t('modal.experience')}
                </h3>
                <div className="space-y-6">
                  {member.experience.map((exp, i) => (
                    <div key={i} className="group">
                      <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-1">
                          <h4 className="font-bold text-[#1E1E1E] text-[16px] group-hover:text-[#0D47A1] transition-colors">{exp.role}</h4>
                          <span className="text-gray-400 text-[12px] font-mono">{exp.period}</span>
                      </div>
                      <p className="text-[#0D47A1] font-medium text-[14px] mb-2">{exp.company}</p>
                      <p className="text-gray-600 text-[14px] leading-relaxed font-serif">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {showScrollIndicator && (
              <div className="absolute bottom-6 right-8 pointer-events-none transition-opacity duration-300">
                <div className="animate-bounce text-[#0D47A1] bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg border border-gray-100">
                  <FaChevronDown className="w-5 h-5" />
                </div>
              </div>
            )}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-custom::-webkit-scrollbar {
          width: 6px;
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