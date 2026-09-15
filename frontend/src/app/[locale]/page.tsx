import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ClinicSpacesSection from '@/components/ClinicSpacesSection';
import ComparisonSection from '@/components/ComparisonSection';
import FeaturesSection from '@/components/FeaturesSection';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import MobileStickyCTA from '@/components/MobileStickyCTA';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-dvh">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <ClinicSpacesSection />
        <ComparisonSection />
        <FeaturesSection />
        <ContactForm />
      </main>
      <Footer />
      <MobileStickyCTA />
    </div>
  );
}
