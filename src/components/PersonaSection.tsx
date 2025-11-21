import { Heart, Smile, Target, Sparkles } from "lucide-react";

const PersonaSection = () => {
  const traits = [
    { icon: Heart, label: "Empathetic" },
    { icon: Smile, label: "Friendly" },
    { icon: Target, label: "Focused" },
    { icon: Sparkles, label: "Creative" },
  ];

  return (
    <section id="persona" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground mb-4">
            Meet Your AI Persona
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Devesh AI adapts to your personality and communication style
          </p>
        </div>

        <div className="glass-soft rounded-3xl p-12 shadow-xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-pastel-lavender to-pastel-blue shadow-lg mb-6">
              <Smile className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-2xl font-bold font-display gradient-text-soft mb-4">
              Calm, Smart & Lovable
            </h3>
            <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto">
              Your AI companion is designed to be emotionally intelligent, understanding, 
              and always ready to help you achieve your goals with a gentle, supportive approach.
            </p>
          </div>

          <div className="flex justify-center gap-8 flex-wrap">
            {traits.map((trait, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-2"
              >
                <div className="w-16 h-16 rounded-2xl glass-soft flex items-center justify-center shadow-md glow-hover">
                  <trait.icon className="w-7 h-7 text-pastel-lavender" />
                </div>
                <span className="text-sm font-medium text-foreground">{trait.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonaSection;
