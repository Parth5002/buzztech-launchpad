import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Who can participate?",
    answer: "Any SVIT student can participate. You need to form teams of 3-5 members. Mix different skills like development, design, and business for the best results."
  },
  {
    question: "Do I need a startup idea before joining?",
    answer: "Not mandatory! You can build from scratch here. We have tracks for both beginners starting from zero and those who already have a product to scale."
  },
  {
    question: "What is the benefit?",
    answer: "Prizes worth ₹30,000+, certificates, GTU 100 points benefit, exclusive goodies, and a chance to get SSIP government funding for your startup idea."
  },
  {
    question: "Is it offline or online?",
    answer: "Mostly online (work from home) with occasional college visits when instructed. This gives you flexibility while ensuring proper guidance."
  },
  {
    question: "What if I don't have technical skills?",
    answer: "Perfect! We encourage diverse teams. You can contribute with business planning, marketing, design, or market research. Technical skills are helpful but not mandatory."
  },
  {
    question: "How much time commitment is required?",
    answer: "It's a 50-day program where you can work at your own pace. Most successful teams spend 2-3 hours daily, but you can adjust based on your schedule."
  }
];

const FAQSection = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background to-card">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-4xl md:text-6xl font-bold font-display bg-gradient-primary bg-clip-text text-transparent">
            FAQ
          </h2>
          <p className="text-xl text-muted-foreground">
            Got questions? We've got answers. Here are the most common questions about BuzzTech 2025.
          </p>
        </div>

        <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 shadow-card">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border/30 rounded-lg px-6 bg-card/30"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary transition-colors">
                  ❓ {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pt-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;