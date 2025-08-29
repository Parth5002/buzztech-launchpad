import { CheckCircle, Circle, Users, Calendar, Presentation, Trophy } from "lucide-react";

const timelineEvents = [
  {
    icon: Circle,
    title: "Registrations Open",
    description: "Till 1st September 2025",
    status: "current"
  },
  {
    icon: Users,
    title: "Team Formation",
    description: "Confirm your teams (3-5 members)",
    status: "upcoming"
  },
  {
    icon: Calendar,
    title: "Event Kickoff",
    description: "Week of September 2nd",
    status: "upcoming"
  },
  {
    icon: Presentation,
    title: "50 Days of Building",
    description: "Remote work with periodic check-ins",
    status: "upcoming"
  },
  {
    icon: Trophy,
    title: "Final Pitch & Awards",
    description: "Present your solution and win prizes",
    status: "upcoming"
  }
];

const TimelineSection = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background to-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-4xl md:text-6xl font-bold font-display bg-gradient-primary bg-clip-text text-transparent">
            Event Timeline
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your 50-day journey from idea to launch, with full support along the way.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-primary transform md:-translate-x-0.5" />
          
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div key={index} className="relative flex items-center">
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 w-4 h-4 transform md:-translate-x-2 z-10">
                  <div className={`w-4 h-4 rounded-full ${
                    event.status === 'current' 
                      ? 'bg-primary animate-pulse' 
                      : 'bg-muted-foreground'
                  }`} />
                </div>
                
                {/* Content */}
                <div className={`ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:ml-1/2'
                } max-w-md ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>
                  <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl p-6 shadow-card hover:shadow-neon transition-all duration-300">
                    <div className="flex items-center space-x-3 mb-3">
                      <event.icon className={`h-6 w-6 ${
                        event.status === 'current' ? 'text-primary' : 'text-muted-foreground'
                      }`} />
                      <h3 className="text-xl font-semibold text-foreground">
                        {event.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;