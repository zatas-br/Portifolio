import { forwardRef } from 'react';
import { ArrowUpRight } from '@/src/components/icons/ArrowUpRight';
import { CardNavItem } from '@/types';

interface CardNavCardProps {
    item: CardNavItem;
}

export const CardNavCard = forwardRef<HTMLDivElement, CardNavCardProps>(
    ({ item }, ref) => {
        return (
            <div
                ref={ref}
                className="nav-card select-none relative flex flex-col gap-2 p-[12px_16px] rounded-[calc(0.75rem-0.2rem)] min-w-0 flex-[1_1_auto] h-auto min-h-[60px] md:h-full md:min-h-0 md:flex-[1_1_0%]"
                style={{ backgroundColor: item.bgColor, color: item.textColor }}
            >
                <div className="nav-card-label font-normal tracking-[-0.5px] text-[18px] md:text-[22px]">
                    {item.label}
                </div>
                <div className="nav-card-links mt-auto flex flex-col gap-[2px]">
                    {item.links?.map((lnk, i) => (
                        <a
                            key={`${lnk.label}-${i}`}
                            className="nav-card-link inline-flex items-center gap-[6px] no-underline cursor-pointer transition-opacity duration-300 hover:opacity-75 text-[15px] md:text-[16px]"
                            href={lnk.href}
                            aria-label={lnk.ariaLabel}
                        >
                            <ArrowUpRight className="nav-card-link-icon shrink-0" aria-hidden="true" />
                            {lnk.label}
                        </a>
                    ))}
                </div>
            </div>
        );
    }
);

CardNavCard.displayName = 'CardNavCard';