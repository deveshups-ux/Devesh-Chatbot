import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import PersonaSection from "@/components/PersonaSection";
import ChatSection from "@/components/ChatSection";
import PricingSection from "@/components/PricingSection";
import TrustedBy from "@/components/TrustedBy";
import FloatingChatWidget from "@/components/FloatingChatWidget";

const Index = () => {
  return (
    <div className="min-h-screen gradient-soft-bg relative overflow-hidden scroll-smooth">
      <Navigation />
      <HeroSection />
      <TrustedBy />
      <FeaturesSection />
      <PersonaSection />
      <ChatSection />
      <PricingSection />
      <FloatingChatWidget />
    </div>
  );
};

export default Index;
