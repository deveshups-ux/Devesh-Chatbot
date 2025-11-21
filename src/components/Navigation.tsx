import { Button } from "@/components/ui/button";
import { Brain } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-strong border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-neon-purple to-neon-blue glow-purple">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold gradient-text">DAI</span>
          </div>

          {/* Menu Items */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </a>
            <a href="#features" className="text-foreground hover:text-primary transition-colors font-medium">
              Features
            </a>
            <a href="#persona" className="text-foreground hover:text-primary transition-colors font-medium">
              Persona
            </a>
            <a href="#chat" className="text-foreground hover:text-primary transition-colors font-medium">
              Chat
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="hidden md:inline-flex">
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
