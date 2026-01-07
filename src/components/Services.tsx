import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Bot, 
  MessageSquare, 
  Workflow, 
  Target, 
  Calendar, 
  Smartphone, 
  Puzzle,
  ArrowRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Bot,
    title: "AI Business Automation",
    description: "End-to-end automation of your business processes using intelligent AI systems that learn and adapt.",
    features: ["Process Mapping", "Workflow Optimization", "AI Decision Making", "Performance Analytics"],
  },
  {
    icon: MessageSquare,
    title: "AI Chatbot Development",
    description: "Custom AI chatbots for sales, support, and lead generation that work 24/7 on your behalf.",
    features: ["Sales Automation", "Customer Support", "Lead Qualification", "Multi-platform Integration"],
  },
  {
    icon: Workflow,
    title: "CRM & Workflow Automation",
    description: "Streamline your CRM with intelligent workflows that nurture leads and close deals automatically.",
    features: ["Lead Scoring", "Pipeline Automation", "Follow-up Sequences", "Deal Tracking"],
  },
  {
    icon: Target,
    title: "Marketing Automation",
    description: "AI-powered marketing campaigns that personalize content and optimize conversions in real-time.",
    features: ["Email Campaigns", "Social Media Automation", "A/B Testing", "Personalization"],
  },
  {
    icon: Calendar,
    title: "Appointment & Lead Management",
    description: "Automated booking systems and lead management that never miss an opportunity.",
    features: ["Smart Scheduling", "Reminder Systems", "Lead Distribution", "Calendar Integration"],
  },
  {
    icon: Smartphone,
    title: "WhatsApp, Email & SMS Automation",
    description: "Multi-channel communication automation that engages customers on their preferred platforms.",
    features: ["Broadcast Campaigns", "Drip Sequences", "Two-way Messaging", "Template Management"],
  },
  {
    icon: Puzzle,
    title: "Custom AI Integrations",
    description: "Bespoke AI solutions tailored to your unique business needs and existing tech stack.",
    features: ["API Integrations", "Custom AI Models", "Data Pipelines", "Legacy System Connection"],
  },
];

export const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
            AI Automation Solutions{" "}
            <span className="gradient-text">Built for Growth</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From chatbots to complete workflow automation, we deliver AI solutions 
            that transform how your business operates.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              <h3 className="font-display text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm mb-5 leading-relaxed">{service.description}</p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:gap-3 transition-all duration-200"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">
            Not sure which service is right for you?
          </p>
          <Button variant="hero" size="lg" asChild>
            <a href="#contact">Get a Free Consultation</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
