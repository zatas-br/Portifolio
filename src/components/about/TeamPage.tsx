'use client'

import { useState, useEffect, useRef } from 'react';
import { 
  FaTimes,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaGraduationCap,
  FaBriefcase,
  FaCode,
  FaUsers,
  FaExternalLinkAlt,
  FaArrowRight
} from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';
import { TEAM_MEMBERS } from '@/src/data/team';
import { TeamMember } from '@/types';
import { usePortfolioAnimations } from '@/src/hooks/usePortfolioAnimations';
import gsap from 'gsap';

export default function TeamPage() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const modalRef = useRef<HTMLDivElement>(null);
  const { animateFadeIn, animateEnter } = usePortfolioAnimations();

  useEffect(() => {
    animateFadeIn(headerRef.current, 0);
    animateEnter(cardsRef.current, 0.15);
  }, []);

  useEffect(() => {
    if (selectedMember && modalRef.current) {
      gsap.fromTo(modalRef.current, 
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.3, ease: 'power2.out' }
      );
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedMember]);

  return (
    <div className="min-h-screen bg-surface">
      {/* Header */}
      <div ref={headerRef} className="bg-gradient-to-br from-start-gradient to-final-gradient border-b border-border py-16 md:py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <FaUsers className="w-8 h-8 text-white" />
            <h1 className="text-4xl md:text-5xl font-bold text-white">Nossa Equipe</h1>
          </div>
          <p className="text-lg md:text-xl text-gray max-w-2xl mx-auto">
            Conheça os fundadores que tornam tudo isso possível
          </p>
        </div>
      </div>

      {/* Team Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {TEAM_MEMBERS.map((member, index) => (
            <div
              key={member.id}
              ref={el => cardsRef.current[index] = el}
              onClick={() => setSelectedMember(member)}
              className="group cursor-pointer"
            >
              <div className="bg-surface border-2 border-border rounded-2xl overflow-hidden hover:border-primary transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <div className="aspect-square overflow-hidden bg-surface-alt">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-text mb-2 group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-3 text-sm">{member.role}</p>
                  <p className="text-text-muted text-sm line-clamp-3 leading-relaxed mb-4">{member.bio}</p>
                  <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                    Ver perfil
                    <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div 
            ref={modalRef}
            className="bg-surface rounded-3xl max-w-4xl w-full my-8 relative border-2 border-border"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 bg-surface-alt hover:bg-border rounded-full flex items-center justify-center transition-colors z-10 cursor-pointer"
            >
              <FaTimes className="w-5 h-5 text-text" />
            </button>

            <div className="grid md:grid-cols-3">
              {/* Left - Photo & Basic Info */}
              <div className="bg-gradient-to-br from-start-gradient to-final-gradient text-white p-6 md:p-8 rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none">
                <img
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  className="w-full aspect-square object-cover rounded-2xl mb-6 border-4 border-white/20"
                />
                <h2 className="text-2xl font-bold mb-2">{selectedMember.name}</h2>
                <p className="text-white/80 mb-6">{selectedMember.role}</p>
                
                {/* Social Links */}
                <div className="flex gap-3">
                  {selectedMember.social.linkedin && (
                    <a
                      href={selectedMember.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-colors cursor-pointer"
                    >
                      <FaLinkedin className="w-5 h-5" />
                    </a>
                  )}
                  {selectedMember.social.github && (
                    <a
                      href={selectedMember.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-colors cursor-pointer"
                    >
                      <FaGithub className="w-5 h-5" />
                    </a>
                  )}
                  {selectedMember.social.twitter && (
                    <a
                      href={selectedMember.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-colors cursor-pointer"
                    >
                      <FaTwitter className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Right - Detailed Info */}
              <div className="md:col-span-2 p-6 md:p-8 max-h-[70vh] md:max-h-[80vh] overflow-y-auto">
                {/* Bio */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-text mb-3 flex items-center gap-2">
                    <FaUsers className="w-5 h-5 text-primary" />
                    Sobre
                  </h3>
                  <p className="text-text-muted leading-relaxed">{selectedMember.bio}</p>
                </div>

                {/* Skills */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-text mb-3 flex items-center gap-2">
                    <FaCode className="w-5 h-5 text-primary" />
                    Especialidades
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedMember.skills.map(skill => (
                      <span key={skill} className="bg-surface-alt border border-border text-primary px-4 py-2 rounded-lg text-sm font-medium hover:border-primary transition-colors">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Education */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-text mb-3 flex items-center gap-2">
                    <FaGraduationCap className="w-5 h-5 text-primary" />
                    Formação
                  </h3>
                  <div className="space-y-4">
                    {selectedMember.education.map((edu, i) => (
                      <div key={i} className="border-l-4 border-primary pl-4 py-2 bg-surface-alt/50 rounded-r-lg pr-4">
                        <h4 className="font-bold text-text">{edu.degree}</h4>
                        <p className="text-text-muted">{edu.institution}</p>
                        <p className="text-sm text-text-muted/70">{edu.year}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Experience */}
                <div>
                  <h3 className="text-xl font-bold text-text mb-3 flex items-center gap-2">
                    <FaBriefcase className="w-5 h-5 text-primary" />
                    Experiência
                  </h3>
                  <div className="space-y-6">
                    {selectedMember.experience.map((exp, i) => (
                      <div key={i} className="border-l-4 border-border pl-4 py-2 hover:border-primary transition-colors">
                        <h4 className="font-bold text-text">{exp.role}</h4>
                        <p className="text-primary font-medium">{exp.company}</p>
                        <p className="text-sm text-text-muted/70 mb-2">{exp.period}</p>
                        <p className="text-text-muted text-sm leading-relaxed">{exp.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}