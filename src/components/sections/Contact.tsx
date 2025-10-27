

import iconZatasTraced from '@/public/images/Identidade_visual/zatas-blue-traced.svg';
import iconZatas from '@/public/images/Identidade_visual/icon-zatas-blue.svg';

export default function Contact() {
    return(
        <div>
            <img src={iconZatasTraced.src} alt="Logo" className="h-40 opacity-50 absolute bottom-100 left-190 rotate-18" />
            <img src={iconZatas.src} alt="Logo" className="h-40 opacity-50 md:absolute inset-x-10 top-35 -rotate-16"/>

            
        </div>
    )
}