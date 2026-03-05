'use client';

import { Link } from '@/src/i18n/navigation';

interface CardNavTopProps {
    logo: string;
    logoAlt: string;
    menuColor: string;
    buttonBgColor: string;
    buttonTextColor: string;
    currentLanguage: String;
    isHamburgerOpen: boolean;
    onLanguageToggle?: () => void;
    onMenuToggle: () => void;
}

export const CardNavTop = ({
    logo,
    logoAlt,
    menuColor,
    buttonBgColor,
    buttonTextColor,
    currentLanguage,
    isHamburgerOpen,
    onLanguageToggle,
    onMenuToggle
}: CardNavTopProps) => {
    return (
        <div className="card-nav-top absolute inset-x-0 top-0 h-[60px] flex items-center justify-between p-2 z-[2]">
            <div className="flex items-center gap-2">
                <button
                    type="button"
                    onClick={onLanguageToggle}
                    className="flex items-center justify-center w-[38px] h-[38px] md:w-auto md:px-3 md:h-[44px] rounded-[calc(0.75rem-0.2rem)] font-semibold text-xs md:text-sm transition-all duration-300 hover:opacity-90 md:hover:scale-105 active:scale-95"
                    style={{ backgroundColor: buttonBgColor, color: buttonTextColor }}
                    aria-label={currentLanguage === 'pt-br' ? 'Switch to English' : 'Mudar para Português'}
                >
                    {currentLanguage === 'pt-br' ? 'EN' : 'PT'}
                </button>
            </div>

            <div className="logo-container absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <Link href="/">
                    <img src={logo} alt={logoAlt} className="logo h-[24px] md:h-[28px]" />
                </Link>
            </div>

            <div className="flex items-center">
                <div
                    className="w-[38px] h-[38px] md:w-[44px] md:h-[44px] flex items-center justify-center cursor-pointer"
                    onClick={onMenuToggle}
                    role="button"
                    aria-label={isHamburgerOpen ? 'Fechar menu' : 'Abrir menu'}
                >
                    <div className="flex flex-col gap-[6px] w-[24px] md:w-[30px]">
                        <div
                            className={`h-[2px] bg-current transition-all duration-500 [transform-origin:center] ${
                                isHamburgerOpen ? 'translate-y-[4px] rotate-45' : ''
                            }`}
                            style={{ color: menuColor }}
                        />
                        <div
                            className={`h-[2px] bg-current transition-all duration-500 [transform-origin:center] ${
                                isHamburgerOpen ? '-translate-y-[4px] -rotate-45' : ''
                            }`}
                            style={{ color: menuColor }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};