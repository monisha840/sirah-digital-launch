import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Lightbulb, Users, Award } from "lucide-react";

const stats = [
  { value: "500+", label: "Automations Deployed" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "10M+", label: "Tasks Automated Monthly" },
  { value: "60%", label: "Average Cost Reduction" },
];

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "We're committed to democratizing AI automation for businesses of all sizes.",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "Constantly pushing boundaries with cutting-edge AI and automation technologies.",
  },
  {
    icon: Users,
    title: "Client Success",
    description: "Your growth is our success. We measure results by your business outcomes.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Every automation we build is crafted for reliability, scalability, and performance.",
  },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Enhanced Background Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.08),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--accent)/0.05),transparent_70%)]" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, type: "spring" }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider shimmer">About Us</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
            Pioneering the Future of{" "}
            <span className="gradient-text text-glow">Business Automation</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            SIRAH DIGITAL is at the forefront of AI automation, helping businesses transform
            their operations through intelligent systems that work 24/7.
          </p>
        </motion.div>

        {/* Enhanced Stats with animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1, type: "spring" }}
              className="text-center p-6 rounded-2xl glass-premium hover-lift group cursor-pointer"
            >
              <div className="font-display text-3xl sm:text-4xl font-bold gradient-text mb-2 group-hover:text-glow transition-all">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm group-hover:text-foreground transition-colors">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3, type: "spring" }}
            className="p-8 rounded-2xl gradient-border-animated hover-lift group"
          >
            <h3 className="font-display text-2xl font-bold mb-4 group-hover:text-primary transition-colors">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To be the world's most trusted AI automation partner, enabling every business
              to harness the power of artificial intelligence to achieve unprecedented growth
              and efficiency.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4, type: "spring" }}
            className="p-8 rounded-2xl gradient-border-animated hover-lift group"
          >
            <h3 className="font-display text-2xl font-bold mb-4 group-hover:text-primary transition-colors">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To deliver transformative AI automation solutions that eliminate repetitive tasks,
              optimize workflows, and empower businesses to focus on what they do best—growing
              and innovating.
            </p>
          </motion.div>
        </div>

        {/* Enhanced Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1, type: "spring", stiffness: 100 }}
              className="p-6 rounded-2xl bg-card/60 border border-border/50 hover:border-primary/50 transition-all duration-500 hover-lift group float"
              style={{ animationDelay: `${index * 0.5}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/15 to-accent/10 flex items-center justify-center mb-4 group-hover:from-primary/25 group-hover:to-accent/20 transition-all duration-500 group-hover:scale-110 relative">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary to-accent opacity-0 group-hover:opacity-20 blur-lg transition-opacity" />
                <value.icon className="w-6 h-6 text-primary relative z-10 group-hover:scale-110 transition-transform" />
              </div>
              <h4 className="font-display font-semibold text-lg mb-2 group-hover:text-primary transition-colors">{value.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
