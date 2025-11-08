type CardNavLink = {
    label: string;
    href: string;
    ariaLabel: string;
};

export type CardNavItem = {
    label: string;
    bgColor: string;
    textColor: string;
    links: CardNavLink[];
};

export interface CardNavProps {
    logo: string;
    logoAlt?: string;
    items: CardNavItem[];
    className?: string;
    ease?: string;
    baseColor?: string;
    menuColor?: string;
    buttonBgColor?: string;
    buttonTextColor?: string;
    onThemeToggle?: () => void;
    onLanguageToggle?: () => void;
    currentTheme?: 'light' | 'dark';
    currentLanguage?: 'pt' | 'en';
}

export interface IconProps {
    className?: string;
}

export interface UseCardNavAnimationProps {
    ease?: string;
    numItems: number;
}

export interface ThemeControls {
    current: String | undefined;
    onToggle: () => void;
}

export interface LanguageControls {
    current: String;
    onToggle: () => void;
}
export interface NavColors {
    base?: string;
    menu?: string;
    buttonBg?: string;
    buttonText?: string;
}

export interface CardNavProps {
    logo: string;
    logoAlt?: string;
    items: CardNavItem[];
    className?: string;
    ease?: string;

    theme: ThemeControls;
    language: LanguageControls;
    colors?: NavColors;
}

export interface ProjectAuthor {
  id?: string;
  name: string;
  avatar?: string;
  role?: string;
  linkedin?: string;
  github?: string;
  instagram?: string;
  portfolio?: string;
  email?: string;
}


export type CategoryID = 'desenvolvimento' | 'design' | 'marketing';

export interface CategoryStatic {
  id: string;
}

export interface CategoryContent {
  title: string;
  description: string;
  tags: string[];
}

export interface Category extends CategoryStatic, CategoryContent {}

export interface ProjectStatic {
  id: string;
  category: string;
  image: string;
  technologies: string[];
  link: string | null;
  gallery: string[];
  authorIds: string[];
}

export interface ProjectContent {
  title: string;
  description: string;
  year: string;
  fullDescription: string;
  client?: string;
}

export interface Project extends ProjectStatic, ProjectContent {}

export interface TeamProfile {
  id: string;
  image: string;
  avatar: string;
  social: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
}

export interface Education {
  institution: string;
  degree: string;
  year: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface MemberContent {
  name: string;
  role: string;
  bio: string;
  skills: string[];
  education: Education[];
  experience: Experience[];
}

export interface TeamMember extends TeamProfile, MemberContent {}