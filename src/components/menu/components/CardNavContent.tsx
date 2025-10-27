import { CardNavItem } from '@/types';
import { CardNavCard } from './CardNavCard';

interface CardNavContentProps {
    items: CardNavItem[];
    isExpanded: boolean;
    setCardRef: (i: number) => (el: HTMLDivElement | null) => void;
}

export const CardNavContent = ({
    items,
    isExpanded,
    setCardRef
}: CardNavContentProps) => {
    return (
        <div
            className={`card-nav-content absolute left-0 right-0 top-[60px] bottom-0 p-2 flex flex-col items-stretch gap-2 justify-start z-[1] ${
                isExpanded ? 'visible pointer-events-auto' : 'invisible pointer-events-none'
            } md:flex-row md:items-end md:gap-[12px]`}
            aria-hidden={!isExpanded}
        >
            {items.map((item, idx) => (
                <CardNavCard
                    key={`${item.label}-${idx}`}
                    item={item}
                    ref={setCardRef(idx)}
                />
            ))}
        </div>
    );
};