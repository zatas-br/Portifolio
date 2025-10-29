
import Hero from '@/src/components/sections/Hero';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Zatas',
};

export default function HomePage() {
  return (
    <>
      <Hero />
    </>
  );
}