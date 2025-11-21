import { Brain, Sparkles, Zap, MessageSquare, Cpu, Star } from "lucide-react";

const OrbitVisualization = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Center Core */}
      <div className="relative z-10">
        <div className="glass-strong rounded-full p-8 glow-purple animate-pulse-glow">
          <div className="flex flex-col items-center gap-2">
            <Brain className="w-12 h-12 text-neon-purple" />
            <span className="text-lg font-bold gradient-text">Devesh AI</span>
            <span className="text-xs text-muted-foreground">Persona</span>
          </div>
        </div>
      </div>

      {/* Orbit Ring 1 */}
      <div className="absolute w-64 h-64 rounded-full border-2 border-neon-purple/20 animate-rotate-slow">
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <div className="glass rounded-full p-3 glow-purple">
            <Sparkles className="w-6 h-6 text-neon-purple" />
          </div>
        </div>
        <div className="absolute top-1/2 -right-4 -translate-y-1/2">
          <div className="glass rounded-full p-3 glow-blue">
            <Zap className="w-6 h-6 text-neon-blue" />
          </div>
        </div>
      </div>

      {/* Orbit Ring 2 */}
      <div className="absolute w-80 h-80 rounded-full border-2 border-neon-blue/20" style={{ animation: "rotateSlow 25s linear infinite reverse" }}>
        <div className="absolute top-1/2 -left-4 -translate-y-1/2">
          <div className="glass rounded-full p-3 glow-pink">
            <MessageSquare className="w-6 h-6 text-neon-pink" />
          </div>
        </div>
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2">
          <div className="glass rounded-full p-3 glow-blue">
            <Cpu className="w-6 h-6 text-neon-blue" />
          </div>
        </div>
      </div>

      {/* Orbit Ring 3 */}
      <div className="absolute w-96 h-96 rounded-full border-2 border-neon-pink/20 animate-rotate-slow">
        <div className="absolute top-8 right-8">
          <div className="glass rounded-full p-3 glow-purple animate-float">
            <Star className="w-6 h-6 text-neon-purple" />
          </div>
        </div>
        <div className="absolute bottom-8 left-8">
          <div className="glass rounded-full p-3 glow-pink animate-float" style={{ animationDelay: "1s" }}>
            <Star className="w-6 h-6 text-neon-pink" />
          </div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute w-2 h-2 bg-neon-purple/50 rounded-full top-1/4 left-1/4 animate-float" style={{ animationDelay: "0.5s" }} />
      <div className="absolute w-2 h-2 bg-neon-blue/50 rounded-full top-3/4 right-1/4 animate-float" style={{ animationDelay: "1.5s" }} />
      <div className="absolute w-2 h-2 bg-neon-pink/50 rounded-full bottom-1/4 right-1/3 animate-float" style={{ animationDelay: "2s" }} />
    </div>
  );
};

export default OrbitVisualization;
