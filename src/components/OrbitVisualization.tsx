import { Brain, Sparkles, Zap, MessageSquare, Lightbulb, Star } from "lucide-react";

const OrbitVisualization = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Center Core */}
      <div className="relative z-10">
        <div className="glass-soft rounded-full p-10 shadow-xl">
          <div className="flex flex-col items-center gap-3">
            <Brain className="w-14 h-14 text-pastel-lavender" />
            <div className="text-center">
              <div className="text-xl font-bold font-display gradient-text-soft">Devesh AI</div>
              <div className="text-sm text-muted-foreground font-medium">Persona</div>
            </div>
          </div>
        </div>
      </div>

      {/* Orbit Ring 1 - Inner */}
      <div className="absolute w-72 h-72 rounded-full border-2 border-pastel-lavender/30 animate-rotate-gentle">
        <div className="absolute -top-5 left-1/2 -translate-x-1/2">
          <div className="glass-soft rounded-full p-4 shadow-lg glow-hover">
            <Sparkles className="w-6 h-6 text-pastel-lavender" />
          </div>
        </div>
        <div className="absolute top-1/2 -right-5 -translate-y-1/2">
          <div className="glass-soft rounded-full p-4 shadow-lg glow-hover">
            <Zap className="w-6 h-6 text-pastel-blue" />
          </div>
        </div>
      </div>

      {/* Orbit Ring 2 - Middle */}
      <div className="absolute w-96 h-96 rounded-full border-2 border-pastel-blue/30" style={{ animation: "rotateGentle 35s linear infinite reverse" }}>
        <div className="absolute top-1/2 -left-5 -translate-y-1/2">
          <div className="glass-soft rounded-full p-4 shadow-lg glow-hover">
            <MessageSquare className="w-6 h-6 text-pastel-pink" />
          </div>
        </div>
        <div className="absolute -bottom-5 left-1/2 -translate-x-1/2">
          <div className="glass-soft rounded-full p-4 shadow-lg glow-hover">
            <Lightbulb className="w-6 h-6 text-pastel-blue" />
          </div>
        </div>
      </div>

      {/* Orbit Ring 3 - Outer */}
      <div className="absolute w-[28rem] h-[28rem] rounded-full border-2 border-pastel-pink/20 animate-rotate-gentle">
        <div className="absolute top-12 right-12">
          <div className="glass-soft rounded-full p-3 shadow-lg animate-float-gentle">
            <Star className="w-5 h-5 text-pastel-lavender" />
          </div>
        </div>
        <div className="absolute bottom-12 left-12">
          <div className="glass-soft rounded-full p-3 shadow-lg animate-float-gentle" style={{ animationDelay: "2s" }}>
            <Star className="w-5 h-5 text-pastel-pink" />
          </div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute w-2 h-2 bg-pastel-lavender/40 rounded-full top-1/4 left-1/4 animate-float-gentle" style={{ animationDelay: "1s" }} />
      <div className="absolute w-2 h-2 bg-pastel-blue/40 rounded-full top-3/4 right-1/4 animate-float-gentle" style={{ animationDelay: "3s" }} />
      <div className="absolute w-2 h-2 bg-pastel-pink/40 rounded-full bottom-1/4 right-1/3 animate-float-gentle" style={{ animationDelay: "4s" }} />
    </div>
  );
};

export default OrbitVisualization;
