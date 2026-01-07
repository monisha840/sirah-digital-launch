import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Heart, 
  Briefcase, 
  Users,
  Stethoscope,
  Brain,
  Baby,
  Pill,
  Apple,
  Scan,
  Leaf
} from "lucide-react";
import { Button } from "@/components/ui/button";

const industries = [
  {
    icon: Baby,
    name: "IVF & Fertility Clinics",
    description: "Streamline patient journeys with automated appointment booking, treatment reminders, and personalized follow-ups for fertility treatments.",
    useCases: ["Patient intake automation", "IVF cycle reminders", "Follow-up coordination"],
  },
  {
    icon: Stethoscope,
    name: "Dental Practices",
    description: "Automate appointment scheduling, patient reminders, and treatment follow-ups to keep your dental practice running smoothly.",
    useCases: ["Appointment booking", "Treatment reminders", "Patient recall systems"],
  },
  {
    icon: Leaf,
    name: "Ayurveda & Homeopathy",
    description: "Manage consultations, treatment plans, and patient communications with AI-powered automation for holistic healthcare.",
    useCases: ["Consultation scheduling", "Treatment tracking", "Patient engagement"],
  },
  {
    icon: Brain,
    name: "Psychology & Mental Health",
    description: "Simplify session booking, patient intake, and follow-up care with sensitive, automated communication workflows.",
    useCases: ["Session scheduling", "Intake forms", "Wellness check-ins"],
  },
  {
    icon: Heart,
    name: "Gynecology & Women's Health",
    description: "Automate appointment management, health reminders, and patient communication for women's healthcare practices.",
    useCases: ["Appointment automation", "Health reminders", "Patient follow-ups"],
  },
  {
    icon: Scan,
    name: "Radiology & Diagnostics",
    description: "Streamline report delivery, appointment scheduling, and patient notifications for diagnostic centers.",
    useCases: ["Report notifications", "Scan scheduling", "Result follow-ups"],
  },
  {
    icon: Apple,
    name: "Nutrition & Wellness",
    description: "Automate client consultations, diet plan reminders, and progress tracking for nutritionists and wellness coaches.",
    useCases: ["Diet plan reminders", "Progress tracking", "Client follow-ups"],
  },
  {
    icon: Pill,
    name: "Pharmacy & Healthcare Retail",
    description: "Manage prescription refills, inventory alerts, and customer communications with intelligent automation.",
    useCases: ["Refill reminders", "Order notifications", "Customer engagement"],
  },
  {
    icon: Briefcase,
    name: "Marketing & Digital Agencies",
    description: "Streamline client onboarding, project management, and reporting with AI-powered workflow automation.",
    useCases: ["Client onboarding", "Task automation", "Performance reporting"],
  },
  {
    icon: Users,
    name: "Professional Services",
    description: "Automate client intake, document processing, and billing workflows for law firms, consultants, and accountants.",
    useCases: ["Client intake forms", "Document automation", "Invoice reminders"],
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
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Industries We Serve</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
            AI Automation for{" "}
            <span className="gradient-text">Every Industry</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From healthcare clinics to digital agencies, we help businesses across industries 
            save time and grow faster with smart AI automation solutions.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group p-5 rounded-2xl bg-card/30 border border-border/30 hover:bg-card/50 hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
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

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Don't see your industry? We create custom AI solutions for any business.
          </p>
          <Button variant="heroOutline" size="lg" asChild>
            <a href="#contact">Discuss Your Needs</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
