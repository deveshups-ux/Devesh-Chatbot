import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "Perfect for getting started",
      features: [
        "100 messages per month",
        "Basic AI responses",
        "Email support",
        "Mobile app access",
      ],
    },
    {
      name: "Pro",
      price: "$19",
      description: "For power users",
      features: [
        "Unlimited messages",
        "Advanced AI capabilities",
        "Priority support",
        "Custom persona settings",
        "Voice conversations",
        "API access",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For teams and organizations",
      features: [
        "Everything in Pro",
        "Dedicated support",
        "Custom integrations",
        "Team collaboration",
        "Advanced analytics",
        "SLA guarantee",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`glass-soft rounded-3xl p-8 shadow-lg transition-all duration-300 ${
                plan.popular ? "ring-2 ring-pastel-lavender shadow-xl scale-105" : "hover:shadow-xl"
              }`}
            >
              {plan.popular && (
                <div className="inline-block bg-gradient-to-r from-pastel-lavender to-pastel-blue text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold font-display text-foreground mb-2">
                {plan.name}
              </h3>
              <div className="mb-4">
                <span className="text-4xl font-bold gradient-text-soft">{plan.price}</span>
                {plan.price !== "Custom" && (
                  <span className="text-muted-foreground">/month</span>
                )}
              </div>
              <p className="text-muted-foreground mb-6">{plan.description}</p>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-pastel-lavender flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? "hero" : "soft"}
                size="lg"
                className="w-full"
              >
                {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
