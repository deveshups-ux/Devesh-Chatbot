import { Brain, Sparkles, MessageSquare, Zap } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Brain,
      title: "Smart Intelligence",
      description: "Advanced AI that understands context and learns from every interaction.",
    },
    {
      icon: Sparkles,
      title: "Creative Companion",
      description: "Generate ideas, stories, and solutions with creative AI assistance.",
    },
    {
      icon: MessageSquare,
      title: "Natural Conversation",
      description: "Chat naturally like talking to a friend who truly understands you.",
    },
    {
      icon: Zap,
      title: "Instant Answers",
      description: "Get accurate responses and insights in real-time, whenever you need.",
    },
  ];

  return (
    <section id="features" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground mb-4">
            Why Choose Devesh AI
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience AI companionship that adapts to your needs and grows with you
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-soft rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 glow-hover"
            >
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pastel-lavender to-pastel-blue flex items-center justify-center shadow-md">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold font-display text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
