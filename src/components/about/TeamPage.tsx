// 📁 src/components/about/TeamPage.tsx

'use client'

import { useState, useEffect, useRef } from 'react';
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
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div ref={headerRef} className="bg-gradient-to-br from-blue-50 to-white border-b border-gray-100 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Nossa Equipe</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Conheça os fundadores que tornam tudo isso possível
          </p>
        </div>
      </div>

      {/* Team Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM_MEMBERS.map((member, index) => (
            <div
              key={member.id}
              ref={el => cardsRef.current[index] = el}
              onClick={() => setSelectedMember(member)}
              className="group cursor-pointer"
            >
              <div className="bg-white border-2 border-gray-100 rounded-2xl overflow-hidden hover:border-blue-500 transition-all duration-300 hover:shadow-xl">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm line-clamp-3">{member.bio}</p>
                  <div className="mt-4 text-blue-600 font-medium flex items-center gap-1">
                    Ver currículo
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
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
            className="bg-white rounded-3xl max-w-4xl w-full my-8 relative"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-6 right-6 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors z-10"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="grid md:grid-cols-3">
              {/* Left - Photo & Basic Info */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8 rounded-l-3xl">
                <img
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  className="w-full aspect-square object-cover rounded-2xl mb-6"
                />
                <h2 className="text-2xl font-bold mb-2">{selectedMember.name}</h2>
                <p className="text-blue-100 mb-6">{selectedMember.role}</p>
                
                {/* Social Links */}
                <div className="flex gap-3">
                  {selectedMember.social.linkedin && (
  <a // <-- Faltava esta tag
    href={selectedMember.social.linkedin}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-colors"
  >
    <span className="text-sm">in</span>
  </a>
)}
                  {selectedMember.social.github && (
                    <a
                      href={selectedMember.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-colors"
                    >
                      <span className="text-sm">gh</span>
                    </a>
                  )}
                  {selectedMember.social.twitter && (
                    <a
                      href={selectedMember.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-colors"
                    >
                      <span className="text-sm">tw</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Right - Detailed Info */}
              <div className="md:col-span-2 p-8 max-h-[80vh] overflow-y-auto">
                {/* Bio */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Sobre</h3>
                  <p className="text-gray-600 leading-relaxed">{selectedMember.bio}</p>
                </div>

                {/* Skills */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Especialidades</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedMember.skills.map(skill => (
                      <span key={skill} className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Education */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Formação</h3>
                  <div className="space-y-4">
                    {selectedMember.education.map((edu, i) => (
                      <div key={i} className="border-l-4 border-blue-600 pl-4">
                        <h4 className="font-bold text-gray-900">{edu.degree}</h4>
                        <p className="text-gray-600">{edu.institution}</p>
                        <p className="text-sm text-gray-500">{edu.year}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Experience */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Experiência</h3>
                  <div className="space-y-6">
                    {selectedMember.experience.map((exp, i) => (
                      <div key={i} className="border-l-4 border-gray-200 pl-4">
                        <h4 className="font-bold text-gray-900">{exp.role}</h4>
                        <p className="text-blue-600 font-medium">{exp.company}</p>
                        <p className="text-sm text-gray-500 mb-2">{exp.period}</p>
                        <p className="text-gray-600">{exp.description}</p>
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