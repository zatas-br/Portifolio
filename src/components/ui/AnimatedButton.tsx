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
  const bgRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLSpanElement>(null);
  const isPrimary = variant === 'primary';

  useEffect(() => {
    const delay = isPrimary ? 1.7 : 1.85;
    
    gsap.fromTo(
      buttonRef.current,
      { 
        opacity: 0, 
        y: 30 
      },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8,
        delay: delay,
        ease: 'power3.out'
      }
    );
  }, [isPrimary]);

  const handleMouseEnter = () => {
    if (!buttonRef.current || !bgRef.current) return;

    gsap.to(bgRef.current, {
      scaleX: 1,
      duration: 0.4,
      ease: 'power2.out'
    });

    gsap.to(buttonRef.current, {
      scale: 1.05,
      duration: 0.3,
      ease: 'power2.out'
    });

    if (iconRef.current) {
      gsap.to(iconRef.current, {
        x: 5,
        duration: 0.3,
        ease: 'power2.out'
      });
    }
  };

  const handleMouseLeave = () => {
    if (!buttonRef.current || !bgRef.current) return;

    gsap.to(bgRef.current, {
      scaleX: 0,
      duration: 0.4,
      ease: 'power2.out'
    });

    gsap.to(buttonRef.current, {
      scale: 1,
      duration: 0.3,
      ease: 'power2.out'
    });

    if (iconRef.current) {
      gsap.to(iconRef.current, {
        x: 0,
        duration: 0.3,
        ease: 'power2.out'
      });
    }
  };

  const handleMouseDown = () => {
    gsap.to(buttonRef.current, {
      scale: 0.95,
      duration: 0.1,
      ease: 'power2.out'
    });
  };

  const handleMouseUp = () => {
    gsap.to(buttonRef.current, {
      scale: 1.05,
      duration: 0.1,
      ease: 'power2.out'
    });
  };

  const baseStyles = isPrimary
    ? 'bg-primary text-white border-2 border-primary'
    : 'bg-white text-gray-900 border-2 border-gray-900';

  const bgColor = isPrimary ? 'bg-primary-hover' : 'bg-gray-900';
  const textColorOnHover = isPrimary ? '' : 'group-hover:text-white';

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
        px-8 py-4 rounded-xl font-semibold text-base
        flex items-center justify-center gap-3 w-full sm:w-auto sm:min-w-[220px]
        cursor-pointer transition-shadow duration-300
        shadow-lg hover:shadow-2xl
        ${baseStyles}
        ${className}
      `}
      style={{ opacity: 0 }}
    >
      <div
        ref={bgRef}
        className={`absolute inset-0 ${bgColor} origin-left`}
        style={{ transform: 'scaleX(0)' }}
      />
      <span className={`relative z-10 transition-colors duration-300 ${textColorOnHover}`}>
        {children}
      </span>
      
      {icon && (
        <span 
          ref={iconRef}
          className={`relative z-10 flex items-center transition-colors duration-300 ${textColorOnHover}`}
        >
          {icon}
        </span>
      )}
    </button>
  );
};

export default AnimatedButton;