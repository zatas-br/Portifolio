import ContactSection from '@/src/components/sections/Home/Contact';
import FooterHomeSection from '@/src/components/sections/Home/Footer';
import Hero from '@/src/components/sections/Home/Hero';
import HowWorkingSection from '@/src/components/sections/Home/HowWorking';
import ResultSection from '@/src/components/sections/Home/Results';
import ServiceSection from '@/src/components/sections/Home/Service';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Zatas',
};

export default function HomePage() {
  return (
    <div className="inset-0 overflow-y">
      <Hero />
      <ResultSection />
      <ServiceSection />
      <HowWorkingSection/>
      <ContactSection/>
      <FooterHomeSection/>
    </div>
  );
}