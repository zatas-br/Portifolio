import { IconProps } from '@/types';

export const SunIcon = ({ className }: IconProps) => (
    <svg
        className={className}
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
    >
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M12 5V3M12 21V19M16.95 7.05L18.364 5.636M5.636 18.364L7.05 16.95M19 12H21M3 12H5M16.95 16.95L18.364 18.364M5.636 5.636L7.05 7.05" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
);