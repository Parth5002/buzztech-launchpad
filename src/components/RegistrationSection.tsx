import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Rocket, ExternalLink, Clock, Calendar } from "lucide-react";
import { useEffect, useState } from "react";

const RegistrationSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-09-01T23:59:59');
    
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;
      
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="registration" className="py-24 px-4 bg-gradient-to-b from-card to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-4xl md:text-6xl font-bold font-display bg-gradient-accent bg-clip-text text-transparent">
            Ready to Launch?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't miss out on this opportunity to turn your ideas into reality. Limited seats available!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Countdown */}
          <Card className="bg-gradient-to-br from-destructive/10 to-primary/10 border-primary/30">
            <CardContent className="p-8 text-center">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <Clock className="h-8 w-8 text-primary animate-pulse" />
                <h3 className="text-2xl font-bold text-foreground">Registration Deadline</h3>
              </div>
              
              <div className="mb-6">
                <p className="text-lg text-muted-foreground mb-4">Time remaining:</p>
                <div className="grid grid-cols-4 gap-4">
                  <div className="bg-card rounded-lg p-4">
                    <div className="text-3xl font-bold text-primary">{timeLeft.days}</div>
                    <div className="text-sm text-muted-foreground">Days</div>
                  </div>
                  <div className="bg-card rounded-lg p-4">
                    <div className="text-3xl font-bold text-secondary">{timeLeft.hours}</div>
                    <div className="text-sm text-muted-foreground">Hours</div>
                  </div>
                  <div className="bg-card rounded-lg p-4">
                    <div className="text-3xl font-bold text-accent">{timeLeft.minutes}</div>
                    <div className="text-sm text-muted-foreground">Minutes</div>
                  </div>
                  <div className="bg-card rounded-lg p-4">
                    <div className="text-3xl font-bold text-primary">{timeLeft.seconds}</div>
                    <div className="text-sm text-muted-foreground">Seconds</div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-center space-x-2 text-destructive font-semibold">
                <Calendar className="h-5 w-5" />
                <span>Register before 1st September 2025!</span>
              </div>
            </CardContent>
          </Card>

          {/* Registration CTA */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                Your Innovation Journey Starts Here
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Join hundreds of ambitious students turning their ideas into reality. 
                With mentorship, resources, and a chance to win ₹30,000+ in prizes, 
                this is your launchpad to entrepreneurial success.
              </p>
            </div>
            
            <div className="space-y-4">
              <Button 
                size="lg" 
                className="text-xl px-12 py-8 gradient-primary hover:scale-110 transition-all duration-300 shadow-neon animate-pulse-slow"
                asChild
              >
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdrXg6j6U_JZvqTSewvpNqw1uRe5k2W8ycgHBdutuW-l3GC5Q/viewform?usp=header"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3"
                >
                  <Rocket className="h-6 w-6" />
                  <span>Register Now</span>
                  <ExternalLink className="h-5 w-5" />
                </a>
              </Button>
              
              <p className="text-sm text-muted-foreground">
                🔥 Limited seats • First come, first served • SVIT students only
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;