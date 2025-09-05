import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, ExternalLink, Home, Users, CheckCircle } from "lucide-react";

const RulesSection = () => {
  return (
    <section className="py-24 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-4xl md:text-6xl font-bold font-display bg-gradient-accent bg-clip-text text-transparent">
            Rules & Guidelines
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Simple rules to ensure fair play and maximum learning for everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="bg-gradient-to-br from-card to-muted/20 border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-2xl">
                <Home className="h-6 w-6 text-primary" />
                <span>Work From Home</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Work from home for the entire duration — only report to college when instructed. 
                This gives you the flexibility to work at your own pace while maintaining regular check-ins.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-card to-muted/20 border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-2xl">
                <Users className="h-6 w-6 text-secondary" />
                <span>Team Requirements</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Form teams of max 5 members. Mix different skills - developers, designers, business minds. 
                Diversity in skills leads to stronger solutions.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <BookOpen className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-semibold text-foreground">
                  Complete Rule Book
                </h3>
              </div>
              <p className="text-muted-foreground mb-6 text-lg">
                Get all the details, eligibility criteria, evaluation process, and submission guidelines.
              </p>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                asChild
              >
                <a 
                  href="https://drive.google.com/drive/folders/1kktiv-ewbCXZVw07gyeJnzSHroe953eM?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <BookOpen className="h-5 w-5" />
                  <span>Open Rule Book</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default RulesSection;
