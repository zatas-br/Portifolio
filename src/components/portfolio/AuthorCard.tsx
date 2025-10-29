'use client'

import { ProjectAuthor } from '@/types';
import { FaLinkedin, FaGithub, FaInstagram, FaGlobe, FaEnvelope } from 'react-icons/fa';

interface AuthorCardProps {
  author: ProjectAuthor;
  variant?: 'default' | 'compact' | 'detailed';
}

// Função para gerar iniciais do nome
const getInitials = (name: string) => {
  return name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
};

// Função para gerar cor baseada no nome
const getColorFromName = (name: string) => {
  const colors = [
    'bg-blue-500',
    'bg-purple-500',
    'bg-pink-500',
    'bg-green-500',
    'bg-yellow-500',
    'bg-red-500',
    'bg-indigo-500',
    'bg-teal-500',
    'bg-orange-500',
    'bg-cyan-500'
  ];
  
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  
  const index = Math.abs(hash) % colors.length;
  return colors[index];
};

export default function AuthorCard({ author, variant = 'default' }: AuthorCardProps) {
  // Criar array de links sociais que existem
  const socialLinks = [];
  
  if (author.linkedin) {
    socialLinks.push({
      key: 'linkedin',
      url: author.linkedin,
      icon: FaLinkedin,
      label: 'LinkedIn',
      color: 'hover:bg-[#0077b5]'
    });
  }
  
  if (author.github) {
    socialLinks.push({
      key: 'github',
      url: author.github,
      icon: FaGithub,
      label: 'GitHub',
      color: 'hover:bg-gray-700'
    });
  }
  
  if (author.instagram) {
    socialLinks.push({
      key: 'instagram',
      url: author.instagram,
      icon: FaInstagram,
      label: 'Instagram',
      color: 'hover:bg-pink-500'
    });
  }
  
  if (author.portfolio) {
    socialLinks.push({
      key: 'portfolio',
      url: author.portfolio,
      icon: FaGlobe,
      label: 'Portfolio',
      color: 'hover:bg-primary'
    });
  }
  
  if (author.email) {
    socialLinks.push({
      key: 'email',
      url: author.email,
      icon: FaEnvelope,
      label: 'Email',
      color: 'hover:bg-primary',
      isEmail: true
    });
  }

  const hasAnySocial = socialLinks.length > 0;

  // Versão compacta (inline)
  if (variant === 'compact') {
    return (
      <div className="flex items-center gap-3">
        {/* Avatar */}
        {author.avatar ? (
          <img
            src={author.avatar}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover flex-shrink-0"
          />
        ) : (
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 ${getColorFromName(author.name)}`}
          >
            {getInitials(author.name)}
          </div>
        )}

        {/* Info */}
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-text text-sm truncate">
            {author.name}
          </h4>
          {author.role && (
            <p className="text-xs text-text-muted truncate">
              {author.role}
            </p>
          )}
        </div>
      </div>
    );
  }

  // Versão detalhada (card completo)
  if (variant === 'detailed') {
    return (
      <div className="bg-surface border border-border rounded-xl p-6 hover:border-primary transition-all hover:shadow-lg group">
        <div className="flex flex-col items-center text-center">
          {/* Avatar */}
          {author.avatar ? (
            <img
              src={author.avatar}
              alt={author.name}
              className="w-20 h-20 rounded-full object-cover mb-4 group-hover:scale-110 transition-transform"
            />
          ) : (
            <div
              className={`w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 ${getColorFromName(author.name)} group-hover:scale-110 transition-transform`}
            >
              {getInitials(author.name)}
            </div>
          )}

          {/* Info */}
          <h4 className="font-bold text-text text-lg mb-1 group-hover:text-primary transition-colors">
            {author.name}
          </h4>
          {author.role && (
            <p className="text-sm text-text-muted mb-4">
              {author.role}
            </p>
          )}

          {/* Social Links */}
          {hasAnySocial && (
            <div className="flex gap-2 flex-wrap justify-center">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                const href = social.isEmail ? `mailto:${social.url}` : social.url;

                return (
                  <a
                    key={social.key}
                    href={href}
                    target={social.isEmail ? undefined : "_blank"}
                    rel={social.isEmail ? undefined : "noopener noreferrer"}
                    className={`w-9 h-9 bg-surface-alt rounded-lg flex items-center justify-center text-text-muted hover:text-white transition-all cursor-pointer ${social.color}`}
                    aria-label={`${social.label} de ${author.name}`}
                    title={social.label}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </div>
    );
  }

  // Versão padrão (card horizontal)
  return (
    <div className="bg-surface border border-border rounded-xl p-4 hover:border-primary transition-all hover:shadow-lg group">
      <div className="flex flex-col gap-3">
        <div className="flex items-start gap-3">
          {/* Avatar */}
          {author.avatar ? (
            <img
              src={author.avatar}
              alt={author.name}
              className="w-12 h-12 rounded-full object-cover flex-shrink-0 group-hover:scale-110 transition-transform"
            />
          ) : (
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 ${getColorFromName(author.name)} group-hover:scale-110 transition-transform`}
            >
              {getInitials(author.name)}
            </div>
          )}

          {/* Info */}
          <div className="flex-1 min-w-0">
            <h4 className="font-bold text-text text-sm truncate group-hover:text-primary transition-colors">
              {author.name}
            </h4>
            {author.role && (
              <p className="text-xs text-text-muted truncate">
                {author.role}
              </p>
            )}
          </div>
        </div>

        {/* Social Links */}
        {hasAnySocial && (
          <div className="flex gap-1.5 flex-wrap">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              const href = social.isEmail ? `mailto:${social.url}` : social.url;

              return (
                <a
                  key={social.key}
                  href={href}
                  target={social.isEmail ? undefined : "_blank"}
                  rel={social.isEmail ? undefined : "noopener noreferrer"}
                  className={`w-7 h-7 bg-surface-alt rounded-lg flex items-center justify-center text-text-muted hover:text-white transition-all cursor-pointer ${social.color}`}
                  aria-label={`${social.label} de ${author.name}`}
                  title={social.label}
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}