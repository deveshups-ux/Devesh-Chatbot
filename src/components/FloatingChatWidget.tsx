import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingChatWidget = () => {
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <Button
        size="icon"
        className="w-14 h-14 rounded-full bg-gradient-to-br from-pastel-lavender to-pastel-blue text-white shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 animate-pulse-soft"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>
    </div>
  );
};

export default FloatingChatWidget;
