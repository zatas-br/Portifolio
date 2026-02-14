import Hero from '@/src/components/sections/Home/Hero';
import HowWorkingSection from '@/src/components/sections/Home/HowWorking';
import ResultSection from '@/src/components/sections/Home/Results';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Zatas',
};

export default function HomePage() {
  return (
    <div className="inset-0 overflow-y">
      <Hero />
      <ResultSection />
      <HowWorkingSection/>
    </div>
  );
}