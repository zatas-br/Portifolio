import iconZatas from '@/public/images/Identidade_visual/icon-zatas-white.svg';
import menuIcon from '@/public/images/Identidade_visual/menu.svg';

export default function Header() {
    return (
        <header className="w-19/20 p-2 my-8 bg-primary text-white flex justify-between rounded-md">
            <img src={iconZatas.src} alt="Logo" className="h-5"/>
            <img src={menuIcon.src} alt="Logo" className="h-5"/>
        </header>
    );
}