import { Cpu, Cloud, Shield, Sparkles, Zap, Globe } from "lucide-react";

const TrustedBy = () => {
  return (
    <section className="py-12 px-6">
      <div className="container mx-auto max-w-5xl">
        <p className="text-center text-sm text-muted-foreground/60 mb-8 font-medium">
          Trusted by innovators worldwide
        </p>
        <div className="flex items-center justify-center gap-12 flex-wrap opacity-40">
          <div className="flex items-center gap-2">
            <Cloud className="w-6 h-6 text-muted-foreground" />
            <span className="text-sm font-medium text-muted-foreground">CloudTech</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-6 h-6 text-muted-foreground" />
            <span className="text-sm font-medium text-muted-foreground">SecureAI</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-muted-foreground" />
            <span className="text-sm font-medium text-muted-foreground">InnovateLab</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-6 h-6 text-muted-foreground" />
            <span className="text-sm font-medium text-muted-foreground">FastCore</span>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="w-6 h-6 text-muted-foreground" />
            <span className="text-sm font-medium text-muted-foreground">GlobalNet</span>
          </div>
          <div className="flex items-center gap-2">
            <Cpu className="w-6 h-6 text-muted-foreground" />
            <span className="text-sm font-medium text-muted-foreground">TechFlow</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
