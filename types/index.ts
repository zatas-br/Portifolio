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
    current: 'light' | 'dark';
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

export interface Project {
  id: string;
  title: string;
  category: 'desenvolvimento' | 'design' | 'marketing';
  image: string;
  description: string;
  year: number;
  author: string;
  technologies: string[];
  fullDescription: string;
  gallery: string[];
  client?: string;
  link?: string;
}

export interface Category {
  id: string;
  title: string;
  icon: string;
  description: string;
}