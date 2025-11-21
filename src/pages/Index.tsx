import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import TrustedBy from "@/components/TrustedBy";
import FloatingChatWidget from "@/components/FloatingChatWidget";

const Index = () => {
  return (
    <div className="min-h-screen gradient-soft-bg relative overflow-hidden">
      <Navigation />
      <HeroSection />
      <TrustedBy />
      <FloatingChatWidget />
    </div>
  );
};

export default Index;
