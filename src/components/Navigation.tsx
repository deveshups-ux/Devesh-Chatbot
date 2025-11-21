import { Button } from "@/components/ui/button";
import { Brain } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-soft border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-pastel-lavender to-pastel-blue shadow-md">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold font-display text-foreground">Devesh AI</span>
          </div>

          {/* Menu Items */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-foreground/80 hover:text-foreground transition-colors font-medium text-sm">
              Home
            </a>
            <a href="#features" className="text-foreground/80 hover:text-foreground transition-colors font-medium text-sm">
              Features
            </a>
            <a href="#persona" className="text-foreground/80 hover:text-foreground transition-colors font-medium text-sm">
              Persona
            </a>
            <a href="#chat" className="text-foreground/80 hover:text-foreground transition-colors font-medium text-sm">
              Chat
            </a>
            <a href="#pricing" className="text-foreground/80 hover:text-foreground transition-colors font-medium text-sm">
              Pricing
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="default" className="hidden md:inline-flex">
              Login
            </Button>
            <Button variant="hero" size="default">
              Start Now
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
