import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    content: "SIRAH DIGITAL transformed our entire sales process. We've seen a 300% increase in qualified leads and our team now focuses on closing deals instead of chasing prospects.",
    rating: 5,
    image: null,
  },
  {
    name: "Michael Chen",
    role: "Operations Director, ScaleUp Co.",
    content: "The AI chatbot they built handles 80% of our customer inquiries automatically. Our support costs dropped by 60% while customer satisfaction increased.",
    rating: 5,
    image: null,
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Head, GrowthLab",
    content: "Their marketing automation system is incredible. We're now running personalized campaigns at scale that would have been impossible before. ROI has been phenomenal.",
    rating: 5,
    image: null,
  },
  {
    name: "David Thompson",
    role: "Founder, InnovateCo",
    content: "From consultation to deployment, the SIRAH team was exceptional. They understood our unique challenges and delivered a solution that exceeded expectations.",
    rating: 5,
    image: null,
  },
];

const caseStudies = [
  {
    metric: "300%",
    label: "Increase in Leads",
    company: "E-Commerce Brand",
  },
  {
    metric: "60%",
    label: "Cost Reduction",
    company: "SaaS Company",
  },
  {
    metric: "40hrs",
    label: "Saved Weekly",
    company: "Real Estate Agency",
  },
  {
    metric: "10x",
    label: "Response Speed",
    company: "Healthcare Provider",
  },
];

export const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
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
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
            Trusted by{" "}
            <span className="gradient-text">Industry Leaders</span>
          </h2>
          <p className="text-muted-foreground text-lg">
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
            <div key={index} className="text-center p-6 rounded-2xl gradient-border">
              <div className="font-display text-3xl sm:text-4xl font-bold gradient-text mb-1">
                {study.metric}
              </div>
              <div className="text-foreground font-medium text-sm mb-1">{study.label}</div>
              <div className="text-muted-foreground text-xs">{study.company}</div>
            </div>
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
              className="p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all duration-300"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-primary/30 mb-4" />

              {/* Content */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center">
                  <span className="font-display font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-muted-foreground text-sm">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
