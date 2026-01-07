import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Lightbulb, Code, Rocket, LineChart } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery & Analysis",
    description: "We dive deep into your business processes, identifying automation opportunities and defining clear objectives.",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Strategy & Design",
    description: "Our team designs a custom automation blueprint tailored to your specific needs and goals.",
  },
  {
    number: "03",
    icon: Code,
    title: "Development & Integration",
    description: "We build and integrate your AI automation solutions with your existing tools and systems.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Testing & Deployment",
    description: "Rigorous testing ensures everything works perfectly before going live in your environment.",
  },
  {
    number: "05",
    icon: LineChart,
    title: "Optimization & Scale",
    description: "Continuous monitoring, optimization, and scaling as your business grows and evolves.",
  },
];

export const Process = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.08),transparent_50%)]" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Process</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
            From Discovery to{" "}
            <span className="gradient-text">Deployment</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Our proven 5-step process ensures smooth implementation and 
            measurable results from your AI automation investment.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connection Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-accent/50 to-primary/50 -translate-x-1/2" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative flex items-center gap-8 mb-12 last:mb-0 ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              {/* Content Card */}
              <div className={`flex-1 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                <div className="inline-block p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/30 transition-colors duration-300">
                  <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? "lg:flex-row-reverse" : ""}`}>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="font-display text-3xl font-bold text-muted-foreground/30">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Center Dot */}
              <div className="hidden lg:flex items-center justify-center w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/50 z-10" />

              {/* Spacer for alternating layout */}
              <div className="hidden lg:block flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
