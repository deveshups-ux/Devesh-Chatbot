import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import OrbitVisualization from "./OrbitVisualization";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen pt-32 pb-16 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Text Block */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-display leading-tight text-foreground">
                Meet Devesh AI Persona
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold font-display gradient-text-soft">
                Your Smart, Calm & Lovable AI Companion
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                Ask anything. Learn anything. Plan anything. Your personal AI that grows with you.
              </p>
            </div>

            {/* Search Bar */}
            <div className="space-y-4">
              <div className="glass-soft rounded-2xl p-2 shadow-lg glow-soft border border-pastel-lavender/30">
                <div className="flex items-center gap-3 px-4 py-3">
                  <Search className="w-5 h-5 text-muted-foreground" />
                  <Input
                    placeholder="Ask something…"
                    className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-base placeholder:text-muted-foreground/60"
                  />
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex gap-4 pt-2">
              <Button variant="hero" size="xl" className="shadow-lg">
                Start Chat
              </Button>
            </div>
          </div>

          {/* Right Side - Orbit Visualization */}
          <div className="hidden lg:flex items-center justify-center h-[600px]">
            <OrbitVisualization />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
