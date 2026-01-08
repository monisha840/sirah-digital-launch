import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Rebecca Martinez",
    role: "Medical Director, FertilityCare Clinic",
    content: "SIRAH DIGITAL revolutionized our patient communication. Appointment no-shows dropped by 45% and our staff now focuses on patient care instead of administrative tasks.",
    rating: 5,
    image: null,
  },
  {
    name: "Dr. James Wilson",
    role: "CEO, Advanced IVF Center",
    content: "The AI-powered patient journey automation has been transformative. Our patients receive timely reminders and personalized care coordination 24/7.",
    rating: 5,
    image: null,
  },
  {
    name: "Sarah Thompson",
    role: "Operations Manager, Healthcare Solutions",
    content: "Their healthcare automation expertise is unmatched. We've streamlined our entire patient intake process and improved satisfaction scores by 40%.",
    rating: 5,
    image: null,
  },
  {
    name: "Dr. Michael Chen",
    role: "Founder, Wellness Medical Group",
    content: "From consultation to deployment, the SIRAH team understood healthcare compliance requirements perfectly. The solution exceeded all our expectations.",
    rating: 5,
    image: null,
  },
];

const caseStudies = [
  {
    metric: "45%",
    label: "Fewer No-Shows",
    company: "Fertility Clinic",
  },
  {
    metric: "60%",
    label: "Cost Reduction",
    company: "Healthcare Provider",
  },
  {
    metric: "40hrs",
    label: "Saved Weekly",
    company: "Medical Practice",
  },
  {
    metric: "10x",
    label: "Response Speed",
    company: "IVF Center",
  },
];

export const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--accent)/0.06),transparent_70%)]" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider shimmer">Testimonials</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
            Real Results from{" "}
            <span className="gradient-text text-glow">AI Automation</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Don't just take our word for it. Here's what our clients have to say
            about working with SIRAH DIGITAL.
          </p>
        </motion.div>

        {/* Case Study Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1, type: "spring" }}
              className="text-center p-6 rounded-2xl gradient-border-animated hover-lift group cursor-pointer">
              <div className="font-display text-3xl sm:text-4xl font-bold gradient-text mb-1 group-hover:text-glow transition-all">
                {study.metric}
              </div>
              <div className="text-foreground font-medium text-sm mb-1 group-hover:text-primary transition-colors">{study.label}</div>
              <div className="text-muted-foreground text-xs group-hover:text-foreground transition-colors">{study.company}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="p-6 rounded-2xl bg-card/60 border border-border/50 hover:border-primary/40 transition-all duration-500 hover-lift group relative overflow-hidden"
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content */}
              <div className="relative z-10">
                {/* Enhanced Quote Icon */}
                <Quote className="w-8 h-8 text-primary/30 mb-4 group-hover:text-primary/50 group-hover:scale-110 transition-all" />

                {/* Content */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  "{testimonial.content}"
                </p>

                {/* Enhanced Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary group-hover:scale-110 transition-transform" style={{ transitionDelay: `${i * 50}ms` }} />
                  ))}
                </div>

                {/* Enhanced Author */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center ring-2 ring-primary/20 group-hover:ring-primary/50 transition-all">
                    <span className="font-display font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold group-hover:text-primary transition-colors">{testimonial.name}</div>
                    <div className="text-muted-foreground text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
