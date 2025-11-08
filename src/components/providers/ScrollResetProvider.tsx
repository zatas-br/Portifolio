'use client'

import { useScrollReset } from '@/src/hooks/useScrollReset';

export default function ScrollResetProvider({
  children
}: {
  children: React.ReactNode
}) {
  useScrollReset();
  return <>{children}</>;
}