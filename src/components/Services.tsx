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
    description: "Let AI handle your repetitive tasks so you can focus on growing your business. We automate everything from data entry to complex workflows.",
    features: ["Process Automation", "Smart Workflows", "AI Decision Making", "Real-time Analytics"],
  },
  {
    icon: MessageSquare,
    title: "AI Chatbot Development",
    description: "Never miss a customer inquiry again. Our AI chatbots answer questions, qualify leads, and book appointments 24/7.",
    features: ["Sales Automation", "Customer Support", "Lead Qualification", "Multi-platform Support"],
  },
  {
    icon: Workflow,
    title: "CRM & Workflow Automation",
    description: "Turn your CRM into a powerful sales machine. Automatically follow up with leads, track deals, and close more sales.",
    features: ["Lead Scoring", "Pipeline Automation", "Follow-up Sequences", "Deal Tracking"],
  },
  {
    icon: Target,
    title: "Marketing Automation",
    description: "Send the right message to the right person at the right time. AI-powered campaigns that boost engagement and sales.",
    features: ["Email Campaigns", "Social Media Automation", "A/B Testing", "Smart Personalization"],
  },
  {
    icon: Calendar,
    title: "Appointment & Lead Management",
    description: "Fill your calendar automatically. Smart booking systems that schedule appointments and manage leads without manual work.",
    features: ["Smart Scheduling", "Reminder Systems", "Lead Distribution", "Calendar Sync"],
  },
  {
    icon: Smartphone,
    title: "WhatsApp, Email & SMS Automation",
    description: "Reach customers on their favorite channels. Automated messages that feel personal and drive action.",
    features: ["Broadcast Campaigns", "Drip Sequences", "Two-way Messaging", "Template Management"],
  },
  {
    icon: Puzzle,
    title: "Custom AI Integrations",
    description: "Got unique needs? We build custom AI solutions that fit your business perfectly and work with your existing tools.",
    features: ["API Integrations", "Custom AI Models", "Data Pipelines", "System Connections"],
  },
];

export const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.05),transparent_70%)]" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, type: "spring" }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider shimmer">Our Services</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
            AI Automation Solutions{" "}
            <span className="gradient-text text-glow">Built for Growth</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            From chatbots to complete workflow automation, we deliver AI solutions
            that transform how your business operates.
          </p>
        </motion.div>

        {/* Enhanced Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              className="group relative p-6 rounded-2xl bg-card/60 border border-border/50 hover:border-primary/50 transition-all duration-500 hover-lift overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

              {/* Content */}
              <div className="relative z-10">
                <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-all duration-500 group-hover:rotate-3">
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary to-accent opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
                  <service.icon className="w-7 h-7 text-primary relative z-10" />
                </div>

                <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                <p className="text-muted-foreground text-sm mb-5 leading-relaxed">{service.description}</p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground group/item">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary group-hover/item:scale-125 transition-transform" />
                      <span className="group-hover/item:text-foreground transition-colors">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="group/btn hover:scale-105 hover:translate-x-1 transition-all duration-300 border-primary/30 hover:border-primary/60"
                >
                  <a href="/contact" className="flex items-center gap-2">
                    Connect <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>

              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 glow-soft pointer-events-none" />
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
          <Button variant="hero" size="lg" asChild className="glow-primary hover-lift">
            <a href="https://tidycal.com/1r8o7ez/sirah-digital" target="_blank" rel="noopener noreferrer">Get a Free Consultation</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
