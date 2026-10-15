import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import WhatIsIncludedSection from '@/components/WhatIsIncludedSection';
import TreatmentsSection from '@/components/TreatmentsSection';
import PlansSection from '@/components/PlansSection';
import ExperiencesSection from '@/components/ExperiencesSection';
import TrustSection from '@/components/TrustSection';
import PricingSection from '@/components/PricingSection';
import FaqSection from '@/components/FaqSection';
import FinalCtaSection from '@/components/FinalCtaSection';
import Footer from '@/components/Footer';
import MobileStickyCTA from '@/components/MobileStickyCTA';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-dvh">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <ProblemSection />
        <HowItWorksSection />
        <TreatmentsSection />
        <WhatIsIncludedSection />
        <PlansSection />
        <ExperiencesSection />
        <TrustSection />
        <PricingSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <Footer />
      <MobileStickyCTA />
    </div>
  );
}
