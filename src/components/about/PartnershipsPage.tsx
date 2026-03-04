import HeroSection from "../sections/Partnership/HeroSection";
import ExpertiseSection from "../sections/Partnership/ExpertiseSection";
import ParceriaSection from "../sections/Partnership/ParceriaSection";


export default function PartinerShipPage() {
  return (
    <main className="w-full bg-white-background overflow-x-hidden">
      <HeroSection />
      <ParceriaSection />
      <ExpertiseSection />
    </main>
  );
}