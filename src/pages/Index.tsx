import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TracksSection from "@/components/TracksSection";
import TimelineSection from "@/components/TimelineSection";
import RulesSection from "@/components/RulesSection";
import FAQSection from "@/components/FAQSection";
import RegistrationSection from "@/components/RegistrationSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <TracksSection />
      <TimelineSection />
      <RulesSection />
      <FAQSection />
      <RegistrationSection />
      <Footer />
    </div>
  );
};

export default Index;