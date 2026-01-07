import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Rocket, 
  Shield, 
  Headphones, 
  BarChart3, 
  Zap, 
  RefreshCw 
} from "lucide-react";

const reasons = [
  {
    icon: Rocket,
    title: "Results-Driven Approach",
    description: "We focus on measurable outcomes. Every automation we build is designed to deliver ROI from day one.",
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description: "Your data is protected with bank-level encryption and compliance with industry standards.",
  },
  {
    icon: Headphones,
    title: "24/7 Dedicated Support",
    description: "Our team is always available to ensure your automations run smoothly and efficiently.",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Optimization",
    description: "Continuous monitoring and optimization ensure your systems improve over time.",
  },
  {
    icon: Zap,
    title: "Rapid Implementation",
    description: "From discovery to deployment in weeks, not months. Start seeing results faster.",
  },
  {
    icon: RefreshCw,
    title: "Scalable Solutions",
    description: "Our solutions grow with your business, from startup to enterprise scale.",
  },
];

export const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
              The SIRAH DIGITAL{" "}
              <span className="gradient-text">Advantage</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              We're not just another automation agency. We're your strategic partner 
              in digital transformation, committed to delivering solutions that actually 
              move the needle for your business.
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div>
                <div className="font-display text-3xl font-bold gradient-text">5+</div>
                <div className="text-muted-foreground text-sm">Years Experience</div>
              </div>
              <div>
                <div className="font-display text-3xl font-bold gradient-text">200+</div>
                <div className="text-muted-foreground text-sm">Happy Clients</div>
              </div>
              <div>
                <div className="font-display text-3xl font-bold gradient-text">24/7</div>
                <div className="text-muted-foreground text-sm">Support Available</div>
              </div>
            </div>
          </motion.div>

          {/* Right - Features Grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                className="p-5 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                  <reason.icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-display font-semibold mb-2">{reason.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
