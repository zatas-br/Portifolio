// 📁 src/hooks/useScrollReset.ts
'use client'

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Hook que reseta o scroll para o topo sempre que a rota mudar
 * Resolve problemas com navegação e scroll memorizado
 */
export function useScrollReset() {
  const pathname = usePathname();

  useEffect(() => {
    // Força scroll para o topo com comportamento instantâneo
    window.scrollTo({ top: 0, behavior: 'instant' });
    
    // Garante que o body não tenha estilos residuais
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
  }, [pathname]);
}

export default useScrollReset;