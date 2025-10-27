'use client';

import { CardNavProps } from '@/types';
import { useCardNavAnimation } from '../../hooks/useCardNavAnimation';
import { CardNavTop } from './components/CardNavTop';
import { CardNavContent } from './components/CardNavContent';

const CardNav = ({
    logo,
    logoAlt = 'Logo',
    items,
    className = '',
    ease = 'power3.out',
    theme,
    language,
    colors = {}
}: CardNavProps) => {
    const {
        base: baseColor = '#fff',
        menu: menuColor = '#000',
        buttonBg: buttonBgColor,
        buttonText: buttonTextColor
    } = colors;

    const processedItems = (items || []).slice(0, 3);

    const { navRef, setCardRef, isHamburgerOpen, isExpanded, toggleMenu } =
        useCardNavAnimation({
            ease,
            numItems: processedItems.length,
        });

    return (
        <div
            className={`card-nav-container absolute left-1/2 -translate-x-1/2 w-[90%] max-w-[800px] z-[99] top-[1.2em] md:top-[2em] ${className}`}
        >
            <nav
                ref={navRef}
                className={`card-nav ${isExpanded ? 'open' : ''} block h-[60px] p-0 rounded-xl shadow-md relative overflow-hidden will-change-[height]`}
                style={{ backgroundColor: baseColor }}
            >
                <CardNavTop
                    logo={logo}
                    logoAlt={logoAlt}
                    menuColor={menuColor}
                    buttonBgColor={buttonBgColor || baseColor}
                    buttonTextColor={buttonTextColor || menuColor}
                    currentTheme={theme.current}
                    currentLanguage={language.current}
                    isHamburgerOpen={isHamburgerOpen}
                    onThemeToggle={theme.onToggle}
                    onLanguageToggle={language.onToggle}
                    onMenuToggle={toggleMenu}
                />

                <CardNavContent
                    items={processedItems}
                    isExpanded={isExpanded}
                    setCardRef={setCardRef}
                />
            </nav>
        </div>
    );
};

export default CardNav;