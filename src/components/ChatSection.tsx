import { Button } from "@/components/ui/button";
import { MessageSquare, Send } from "lucide-react";

const ChatSection = () => {
  return (
    <section id="chat" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground mb-4">
            Start Your Conversation
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience intelligent, natural conversations that feel personal and meaningful
          </p>
        </div>

        <div className="glass-soft rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="space-y-6">
            {/* Sample Chat Messages */}
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pastel-lavender to-pastel-blue flex items-center justify-center flex-shrink-0">
                <MessageSquare className="w-5 h-5 text-white" />
              </div>
              <div className="glass-soft rounded-2xl rounded-tl-sm px-6 py-4 max-w-md">
                <p className="text-foreground">
                  Hello! I'm Devesh AI. How can I help you today?
                </p>
              </div>
            </div>

            <div className="flex gap-3 justify-end">
              <div className="bg-gradient-to-br from-pastel-lavender to-pastel-blue rounded-2xl rounded-tr-sm px-6 py-4 max-w-md">
                <p className="text-white">
                  Can you help me plan my day?
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pastel-lavender to-pastel-blue flex items-center justify-center flex-shrink-0">
                <MessageSquare className="w-5 h-5 text-white" />
              </div>
              <div className="glass-soft rounded-2xl rounded-tl-sm px-6 py-4 max-w-md">
                <p className="text-foreground">
                  Of course! Let's organize your day efficiently. What are your priorities?
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-8 text-center">
              <Button variant="hero" size="xl" className="shadow-lg">
                <Send className="w-5 h-5 mr-2" />
                Start Chatting Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatSection;
