import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Send } from "lucide-react";
import OrbitVisualization from "./OrbitVisualization";

const HeroSection = () => {
  return (
    <section className="min-h-screen pt-24 pb-12 px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="gradient-text">Devesh AI Persona</span>
                <br />
                <span className="text-foreground">Your Personal</span>
                <br />
                <span className="text-foreground">Intelligent Companion</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
                Experience the future with a friendly, emotional, and smart AI assistant that understands you. 
                Engage in natural conversations and unlock limitless possibilities.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl">
                Start Conversation
              </Button>
              <Button variant="glass" size="xl">
                Learn More
              </Button>
            </div>

            {/* Search Bar */}
            <div className="mt-8 space-y-4">
              <div className="glass-strong rounded-2xl p-1 glow-soft">
                <div className="flex items-center gap-2 p-3">
                  <Search className="w-5 h-5 text-muted-foreground" />
                  <Input
                    placeholder="Ask me anything..."
                    className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-base"
                  />
                  <Button size="icon" variant="hero" className="rounded-xl">
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Chat Bubbles Preview */}
              <div className="flex gap-3 flex-wrap">
                <div className="glass rounded-xl px-4 py-2 text-sm text-foreground hover:glass-strong transition-all cursor-pointer">
                  💡 Explain quantum computing
                </div>
                <div className="glass rounded-xl px-4 py-2 text-sm text-foreground hover:glass-strong transition-all cursor-pointer">
                  🎨 Create a story
                </div>
                <div className="glass rounded-xl px-4 py-2 text-sm text-foreground hover:glass-strong transition-all cursor-pointer">
                  🚀 Plan my day
                </div>
              </div>
            </div>
          </div>

          {/* Right Orbit Visualization */}
          <div className="hidden lg:flex items-center justify-center h-[600px]">
            <OrbitVisualization />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
