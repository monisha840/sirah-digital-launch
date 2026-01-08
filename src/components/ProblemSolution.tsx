import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  XCircle,
  CheckCircle,
  Clock,
  UserX,
  Gauge,
  Unplug,
  Zap,
  MessageSquare,
  Link2,
  TrendingUp
} from "lucide-react";

const problems = [
  { icon: Clock, text: "Manual processes eating up time" },
  { icon: UserX, text: "Missed leads and opportunities" },
  { icon: Gauge, text: "Slow response times" },
  { icon: Unplug, text: "Disconnected tools and systems" },
];

const solutions = [
  { icon: Zap, text: "24/7 intelligent automation" },
  { icon: MessageSquare, text: "Instant AI-powered responses" },
  { icon: Link2, text: "Seamless system integrations" },
  { icon: TrendingUp, text: "Scalable, growing workflows" },
];

export const ProblemSolution = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--accent)/0.05),transparent_70%)]" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider shimmer">The Transformation</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
            From Chaos to{" "}
            <span className="gradient-text text-glow">Automated Excellence</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Problem Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 rounded-2xl bg-destructive/5 border border-destructive/30 relative overflow-hidden group hover:border-destructive/50 transition-all duration-500"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-destructive/15 rounded-full blur-3xl group-hover:blur-2xl group-hover:scale-125 transition-all duration-500" />

            <div className="flex items-center gap-3 mb-6 relative z-10">
              <div className="w-12 h-12 rounded-xl bg-destructive/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <XCircle className="w-6 h-6 text-destructive group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="font-display text-2xl font-bold text-destructive">The Problem</h3>
            </div>

            <ul className="space-y-4">
              {problems.map((problem, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-background/50 border border-destructive/10 hover:border-destructive/30 transition-all duration-300 group/item"
                >
                  <problem.icon className="w-5 h-5 text-destructive shrink-0 group-hover/item:scale-110 transition-transform" />
                  <span className="text-muted-foreground">{problem.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Solution Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 rounded-2xl bg-primary/5 border border-primary/30 relative overflow-hidden group hover:border-primary/50 transition-all duration-500 hover-lift"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/15 rounded-full blur-3xl group-hover:blur-2xl group-hover:scale-125 transition-all duration-500 glow-primary" />

            <div className="flex items-center gap-3 mb-6 relative z-10">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 glow-soft">
                <CheckCircle className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="font-display text-2xl font-bold text-primary">Our AI Solution</h3>
            </div>

            <ul className="space-y-4">
              {solutions.map((solution, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-background/50 border border-primary/10 hover:border-primary/40 transition-all duration-300 group/item hover-lift"
                >
                  <solution.icon className="w-5 h-5 text-primary shrink-0 group-hover/item:scale-110 transition-transform" />
                  <span className="text-foreground">{solution.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
