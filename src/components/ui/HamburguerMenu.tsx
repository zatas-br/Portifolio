interface HamburgerMenuProps {
    isOpen: boolean;
    onClick: () => void;
    color?: string;
    className?: string;
}

export const HamburgerMenu = ({ 
    isOpen, 
    onClick, 
    color = '#000',
    className = '' 
}: HamburgerMenuProps) => {
    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onClick();
        }
    };

    return (
        <div
            className={`group h-full flex flex-col items-center justify-center cursor-pointer gap-[6px] ${className}`}
            onClick={onClick}
            onKeyDown={handleKeyDown}
            role="button"
            aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isOpen}
            tabIndex={0}
            style={{ color }}
        >
            <div
                className={`w-[30px] h-[2px] bg-current transition-all duration-500 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] [transform-origin:center] ${
                    isOpen ? 'translate-y-[4px] rotate-45 scale-110' : ''
                } group-hover:opacity-75`}
            />
            <div
                className={`w-[30px] h-[2px] bg-current transition-all duration-500 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] [transform-origin:center] ${
                    isOpen ? '-translate-y-[4px] -rotate-45 scale-110' : ''
                } group-hover:opacity-75`}
            />
        </div>
    );
};