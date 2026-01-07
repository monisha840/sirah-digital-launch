import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Heart, 
  Briefcase, 
  Users
} from "lucide-react";

const industries = [
  {
    icon: Heart,
    name: "IVF & Fertility",
    description: "Automate patient journeys, appointment scheduling, and personalized communication for fertility clinics.",
    useCases: ["Patient intake automation", "Treatment reminders", "Follow-up coordination"],
  },
  {
    icon: Briefcase,
    name: "Agencies",
    description: "Streamline client management, project workflows, and reporting with intelligent automation.",
    useCases: ["Client onboarding", "Task automation", "Performance reporting"],
  },
  {
    icon: Users,
    name: "Professional Services",
    description: "Optimize client intake, document processing, and billing workflows for service firms.",
    useCases: ["Client intake forms", "Document automation", "Billing reminders"],
  },
];

export const Industries = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="industries" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(var(--accent)/0.08),transparent_60%)]" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Industries</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
            AI Automation for{" "}
            <span className="gradient-text">Every Industry</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We've helped businesses across diverse industries unlock the power of AI automation. 
            Here's how we can help yours.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 rounded-2xl bg-card/30 border border-border/30 hover:bg-card/50 hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <industry.icon className="w-6 h-6 text-primary" />
              </div>

              <h3 className="font-display text-lg font-semibold mb-2">{industry.name}</h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{industry.description}</p>

              <div className="space-y-1.5">
                {industry.useCases.map((useCase, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <div className="w-1 h-1 rounded-full bg-primary/60" />
                    {useCase}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
