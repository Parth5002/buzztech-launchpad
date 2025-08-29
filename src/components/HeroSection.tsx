import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  const scrollToRegistration = () => {
    document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 tech-grid opacity-20" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full animate-float" />
      <div className="absolute bottom-32 right-16 w-16 h-16 bg-secondary/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/3 right-20 w-12 h-12 bg-accent/20 rounded-full animate-float" style={{ animationDelay: '4s' }} />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex justify-center animate-glow">
              <img 
                src="/lovable-uploads/ca005c8a-30f2-452d-83a9-cbfad4309d90.png" 
                alt="BuzzTech 2025" 
                className="max-w-full h-auto max-h-32 md:max-h-48 object-contain"
              />
            </div>
            <p className="text-2xl md:text-3xl font-light text-foreground/90 max-w-3xl mx-auto relative">
              <span 
                className="inline-block overflow-hidden whitespace-nowrap border-r-2 animate-typing"
                style={{ 
                  borderRightColor: 'hsl(var(--primary))',
                  animation: 'typing 3s steps(40) 1s both, blink 1s infinite'
                }}
              >
                Your Idea. Your Hustle. Your Launch.
              </span>
            </p>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Got an idea? Already have a product? Or ready to launch a real-world business? 
            This is YOUR stage! BuzzTech is where dreams turn into reality.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 gradient-primary hover:scale-105 transition-transform shadow-neon"
              onClick={scrollToRegistration}
            >
              Register Now
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default HeroSection;