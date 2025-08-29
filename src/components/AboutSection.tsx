import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Gift, Calendar, Award, Zap, Users } from "lucide-react";

const highlights = [
  {
    icon: Trophy,
    title: "Prizes worth ₹30,000+",
    description: "Win big for your innovation"
  },
  {
    icon: Gift,
    title: "Goodies & Recognition",
    description: "Certificates and exclusive merch"
  },
  {
    icon: Calendar,
    title: "50 Days Building",
    description: "Real-world development time"
  },
  {
    icon: Award,
    title: "GTU 100 Point Benefits",
    description: "Academic recognition"
  },
  {
    icon: Zap,
    title: "SSIP Funding Opportunity",
    description: "Chance to get government funding"
  },
  {
    icon: Users,
    title: "Limited Seats",
    description: "Exclusive for SVIT students"
  }
];

const AboutSection = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background to-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-4xl md:text-6xl font-bold font-display bg-gradient-primary bg-clip-text text-transparent">
            About BuzzTech
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Got an idea? Already have a product? Or ready to launch a real-world business? 
            This is <span className="text-primary font-semibold">YOUR stage!</span> BuzzTech is where dreams turn into reality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <Card 
              key={index} 
              className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-neon transition-all duration-300 group hover:scale-105"
            >
              <CardContent className="p-8 text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center group-hover:animate-pulse">
                  <highlight.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {highlight.title}
                </h3>
                <p className="text-muted-foreground">
                  {highlight.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;