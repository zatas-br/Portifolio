'use client'

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface AnimatedButtonProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  className?: string;
}

const AnimatedButton = ({
  children,
  icon,
  variant = 'primary',
  onClick,
  className = ''
}: AnimatedButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const isPrimary = variant === 'primary';

  useEffect(() => {
    const delay = isPrimary ? 1.7 : 1.85;
    
    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, delay, ease: 'power3.out' }
    );
  }, [isPrimary]);

  const handleMouseEnter = () => {
    gsap.to(buttonRef.current, { y: -4, duration: 0.3, ease: 'power2.out' });
  };

  const handleMouseLeave = () => {
    gsap.to(buttonRef.current, { y: 0, duration: 0.3, ease: 'power2.out' });
  };

  const handleMouseDown = () => gsap.to(buttonRef.current, { y: -1, duration: 0.1, ease: 'power2.out' });
  const handleMouseUp = () => gsap.to(buttonRef.current, { y: -4, duration: 0.1, ease: 'power2.out' });

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      className={`
        group relative overflow-hidden
        px-12 py-5.5 rounded-full font-normal text-lg
        flex items-center justify-center gap-3 w-full sm:w-auto sm:min-w-[220px]
        cursor-pointer transition-shadow duration-300
        shadow-lg hover:shadow-2xl
        bg-dark-blue text-white
        font-sans
        ${className}
      `}
      style={{ opacity: 0 }}
    >
      <span className="relative z-10">
        {children}
      </span>

      {icon && (
        <span className="relative z-10 flex items-center">
          {icon}
        </span>
      )}
    </button>
  );
};

export default AnimatedButton;