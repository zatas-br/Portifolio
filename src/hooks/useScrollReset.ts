'use client'

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';


export function useScrollReset() {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
  }, [pathname]);
}

export default useScrollReset;