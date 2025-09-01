import { Zap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border/50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center space-y-6">
          <div className="flex items-center justify-center space-x-3">
            <Zap className="h-8 w-8 text-primary animate-pulse" />
            <h3 className="text-2xl font-bold font-display bg-gradient-primary bg-clip-text text-transparent">
              BuzzTech 2025
            </h3>
            <Zap className="h-8 w-8 text-primary animate-pulse" />
          </div>
          
          <p className="text-xl text-muted-foreground font-semibold">
            Turning Ideas into Reality
          </p>
          
          <div className="space-y-2">
            <p className="text-foreground font-medium">
              Organized by <span className="text-primary">SVIT</span>
            </p>
            <p className="text-muted-foreground">
              Sardar Vallabhbhai Institute of Technology
            </p>
          </div>
          
          <div className="pt-8 border-t border-border/30">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <p className="text-muted-foreground text-sm">
                © 2025 BuzzTech. All rights reserved.
              </p>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
  <span>Contact:</span>

  {/* Email */}
  <a 
    href="mailto:businessthon2004@gmail.com" 
    className="text-primary hover:text-primary/80 transition-colors"
  >
    businessthon2004@gmail.com
  </a>

  {/* Instagram */}
  <a 
    href="https://www.instagram.com/buzz.tech2025/" 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-primary hover:text-primary/80 transition-colors"
  >
    Instagram
  </a>

  {/* LinkedIn */}
  <a 
    href="https://www.linkedin.com/company/buzz-tech2025/about/" 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-primary hover:text-primary/80 transition-colors"
  >
    LinkedIn
  </a>
</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
