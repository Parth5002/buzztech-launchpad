import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Rocket, TrendingUp } from "lucide-react";

const tracks = [
  {
    icon: Rocket,
    title: "Launch from Zero",
    description: "Start your entrepreneurial journey from scratch. We'll guide you through ideation, validation, and building your first product.",
    features: ["Idea Generation", "Market Research", "MVP Development", "Business Planning"]
  },
  {
    icon: TrendingUp,
    title: "Scale Your Product",
    description: "Already have a product? Take it to the next level with marketing strategies, user acquisition, and business growth tactics.",
    features: ["Marketing Strategy", "User Acquisition", "Product Scaling", "Revenue Growth"]
  }
];

const TracksSection = () => {
  return (
    <section className="py-24 px-4 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-4xl md:text-6xl font-bold font-display bg-gradient-accent bg-clip-text text-transparent">
            Choose Your Track
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you're starting fresh or scaling up, we have the perfect track for your entrepreneurial journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {tracks.map((track, index) => (
            <Card 
              key={index}
              className="bg-gradient-to-br from-card to-muted/20 border-border/50 hover:shadow-card transition-all duration-500 group hover:scale-105"
            >
              <CardHeader className="text-center pb-6">
                <div className="mx-auto w-20 h-20 bg-gradient-accent rounded-full flex items-center justify-center group-hover:animate-glow mb-4">
                  <track.icon className="h-10 w-10 text-accent-foreground" />
                </div>
                <CardTitle className="text-2xl md:text-3xl font-display text-foreground">
                  {track.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {track.description}
                </p>
                <div className="space-y-3">
                  <h4 className="text-primary font-semibold">What you'll work on:</h4>
                  <ul className="space-y-2">
                    {track.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TracksSection;