import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  ShoppingCart, 
  Stethoscope, 
  Building2, 
  GraduationCap, 
  Plane, 
  Utensils,
  Home,
  Scale
} from "lucide-react";

const industries = [
  {
    icon: ShoppingCart,
    name: "E-Commerce",
    description: "Automate order processing, customer support, inventory management, and personalized marketing.",
    useCases: ["Abandoned cart recovery", "Order status updates", "Product recommendations"],
  },
  {
    icon: Stethoscope,
    name: "Healthcare",
    description: "Streamline patient communication, appointment scheduling, and administrative workflows.",
    useCases: ["Appointment reminders", "Patient follow-ups", "Medical record processing"],
  },
  {
    icon: Building2,
    name: "Real Estate",
    description: "Automate lead nurturing, property matching, and client communication at scale.",
    useCases: ["Lead qualification", "Property alerts", "Virtual tour scheduling"],
  },
  {
    icon: GraduationCap,
    name: "Education",
    description: "Enhance student engagement with automated enrollment, support, and learning workflows.",
    useCases: ["Enrollment automation", "Course reminders", "Student support bots"],
  },
  {
    icon: Plane,
    name: "Travel & Hospitality",
    description: "Deliver exceptional guest experiences with automated bookings and personalized service.",
    useCases: ["Booking confirmations", "Concierge services", "Review management"],
  },
  {
    icon: Utensils,
    name: "Restaurants & Food",
    description: "Optimize reservations, orders, and customer loyalty with smart automation.",
    useCases: ["Order automation", "Reservation management", "Loyalty programs"],
  },
  {
    icon: Home,
    name: "Home Services",
    description: "Automate scheduling, dispatch, and customer communication for service businesses.",
    useCases: ["Booking systems", "Technician dispatch", "Follow-up surveys"],
  },
  {
    icon: Scale,
    name: "Legal & Professional",
    description: "Streamline client intake, document processing, and case management.",
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
