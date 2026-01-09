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
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(var(--accent)/0.08),transparent_50%)]" />

      {/* Animated Background Motion Graphics */}
      <motion.div
        animate={{
          x: [-100, 100, -100],
          y: [-50, 50, -50],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-primary/5 to-accent/5 blur-[100px] opacity-40"
      />
      <motion.div
        animate={{
          x: [100, -100, 100],
          y: [50, -50, 50],
          scale: [1.2, 1, 1.2],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-gradient-to-br from-accent/5 to-primary/5 blur-[120px] opacity-30"
      />
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-20"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent blur-[80px]" style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }} />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider shimmer">Our Process</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
            From Discovery to{" "}
            <span className="gradient-text text-glow">Deployment</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
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
              className={`relative flex items-center gap-8 mb-12 last:mb-0 ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
            >
              {/* Content Card */}
              <div className={`flex-1 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                <div className="inline-block p-6 rounded-2xl bg-card/60 border border-border/50 hover:border-primary/40 transition-all duration-500 group hover-lift">
                  <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? "lg:flex-row-reverse" : ""}`}>
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/15 to-accent/10 flex items-center justify-center group-hover:from-primary/25 group-hover:to-accent/20 transition-all group-hover:scale-110">
                      <step.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="font-display text-3xl font-bold gradient-text group-hover:text-glow transition-all">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Enhanced Center Dot */}
              <div className="hidden lg:flex items-center justify-center w-5 h-5 rounded-full bg-gradient-to-br from-primary to-accent shadow-lg glow-primary z-10 pulse-glow" />

              {/* Spacer for alternating layout */}
              <div className="hidden lg:block flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
