import { Link } from '@/src/i18n/navigation';
import { SunIcon, MoonIcon } from '../../icons';
import { HamburgerMenu } from '../../ui/HamburguerMenu';

interface CardNavTopProps {
    logo: string;
    logoAlt: string;
    menuColor: string;
    buttonBgColor: string;
    buttonTextColor: string;
    currentTheme: String | undefined;
    currentLanguage: String;
    isHamburgerOpen: boolean;
    onThemeToggle?: () => void;
    onLanguageToggle?: () => void;
    onMenuToggle: () => void;
}

export const CardNavTop = ({
    logo,
    logoAlt,
    menuColor,
    buttonBgColor,
    buttonTextColor,
    currentTheme,
    currentLanguage,
    isHamburgerOpen,
    onThemeToggle,
    onLanguageToggle,
    onMenuToggle
}: CardNavTopProps) => {
    return (
        <div className="card-nav-top absolute inset-x-0 top-0 h-[60px] flex items-center justify-between p-2 pl-[0.5rem] md:pl-[1.1rem] pr-[0.5rem] z-[2]">
            {/* Lado Esquerdo: Botões de Tema e Idioma */}
            <div className="flex items-center gap-2">
                {/* Botão de Tema */}
                <button
                    type="button"
                    onClick={onThemeToggle}
                    className="flex items-center justify-center w-[38px] h-[38px] md:w-[44px] md:h-[44px] rounded-[calc(0.75rem-0.2rem)] transition-all duration-300 hover:opacity-90 md:hover:scale-105 active:scale-95"
                    style={{ backgroundColor: buttonBgColor, color: buttonTextColor }}
                    aria-label={currentTheme === 'light' ? 'Mudar para tema escuro' : 'Mudar para tema claro'}
                >
                    {currentTheme === 'light' ? 
                        <MoonIcon className="w-[18px] h-[18px] md:w-[20px] md:h-[20px]" /> : 
                        <SunIcon className="w-[18px] h-[18px] md:w-[20px] md:h-[20px]" />
                    }
                </button>

                {/* Botão de Idioma */}
                <button
                    type="button"
                    onClick={onLanguageToggle}
                    className="flex items-center justify-center w-[38px] h-[38px] md:w-auto md:px-3 md:h-[44px] rounded-[calc(0.75rem-0.2rem)] font-semibold text-xs md:text-sm transition-all duration-300 hover:opacity-90 md:hover:scale-105 active:scale-95"
                    style={{ backgroundColor: buttonBgColor, color: buttonTextColor }}
                    aria-label={currentLanguage === 'pt-br' ? 'Mudar para inglês' : 'Mudar para português'}
                >
                    {currentLanguage === 'pt-br' ? 'EN' : 'PT'}
                </button>
            </div>

            {/* Centro: Logo */}
            <div className="logo-container absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <Link href="/">
                    <img src={logo} alt={logoAlt} className="logo h-[24px] md:h-[28px]" />
                </Link>
            </div>

            {/* Lado Direito: Menu Hambúrguer */}
            <HamburgerMenu
                isOpen={isHamburgerOpen}
                onClick={onMenuToggle}
                color={menuColor}
            />
        </div>
    );
};