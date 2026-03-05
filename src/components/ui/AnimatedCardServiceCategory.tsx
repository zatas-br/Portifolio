"use client";

import Image from "next/image";

interface AnimatedCardServiceCategoryProps {
    title: string;
    subtitle: string;
    uriImage: string;
    type: 'top' | 'bottom';
}

export default function AnimatedCardServiceCategory({
    title,
    subtitle,
    uriImage,
    type
}: AnimatedCardServiceCategoryProps) {

    const maskStyle = type === 'top'
        ? {
            WebkitMaskImage: 'linear-gradient(to bottom, transparent 20%, black 55%)',
            maskImage: 'linear-gradient(to bottom, transparent 0%, black 35%)'
        }
        : {
            WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 45%)',
            maskImage: 'linear-gradient(to top, transparent 0%, black 45%)'
        };

    return (
        <div className="relative w-full max-w-[320px] h-[520px] bg-white border border-gray-100 rounded-[60px] overflow-hidden flex flex-col shadow-sm transition-transform duration-300 hover:scale-[1.02]">
            <div className="absolute inset-0 w-full h-full" style={maskStyle}>
                <Image
                    src={uriImage}
                    alt={title}
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            <div className={`relative z-10 px-10 flex flex-col h-full ${type === 'top' ? 'pt-5' : 'justify-end pb-5'}`}>
                <h2 className="text-2xl font-bold text-gray-800 leading-tight mb-2">
                    {title}
                </h2>
                <p className="text-[13px] text-gray-500 leading-snug font-medium max-w-[200px]">
                    {subtitle}
                </p>
            </div>
        </div>
    );
}