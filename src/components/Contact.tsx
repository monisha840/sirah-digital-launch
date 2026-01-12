import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Calendar, ArrowRight } from "lucide-react";
import { toast } from "sonner";

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      company: formData.get('company'),
      message: formData.get('message')
    };

    try {
      // Send to Node.js backend
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (response.ok && result.success) {
        toast.success(result.message || "Thank you! We'll be in touch within 24 hours.");
        (e.target as HTMLFormElement).reset();
      } else {
        toast.error(result.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error("Failed to send message. Please try again or email us directly at support@sirahdigital.in");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(var(--primary)/0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--accent)/0.08),transparent_50%)]" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider shimmer">Get Started</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
            Ready to{" "}
            <span className="gradient-text text-glow">Automate Your Growth?</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Book a free consultation call with our AI automation experts
            and discover how we can transform your business.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* CTA Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 hover:border-primary/50 transition-all duration-500 glow-soft group">
              <Calendar className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-primary transition-colors">Book Free Consultation</h3>
              <p className="text-muted-foreground text-sm mb-4">
                45 minutes strategy call with our AI experts. No obligations, just value.
              </p>
              <Button variant="hero" className="w-full glow-primary" asChild>
                <a href="https://tidycal.com/1r8o7ez/sirah-digital" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                  Schedule Now <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all duration-300 group hover-lift">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/15 to-accent/10 flex items-center justify-center shrink-0 group-hover:from-primary/25 group-hover:to-accent/20 transition-all">
                  <Mail className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <div className="font-medium mb-1">Email Us</div>
                  <a href="mailto:support@sirahdigital.in" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                    support@sirahdigital.in
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all duration-300 group hover-lift">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/15 to-accent/10 flex items-center justify-center shrink-0 group-hover:from-primary/25 group-hover:to-accent/20 transition-all">
                  <Phone className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <div className="font-medium mb-1">Call Us</div>
                  <a href="tel:+919789961631" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                    +91 97899 61631
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all duration-300 group hover-lift">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/15 to-accent/10 flex items-center justify-center shrink-0 group-hover:from-primary/25 group-hover:to-accent/20 transition-all">
                  <MapPin className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <div className="font-medium mb-1">Location</div>
                  <span className="text-muted-foreground text-sm">
                    8th Floor, Innovate, Featherlite – The Address<br />
                    200 Feet Radial Rd, Zamin Pallavaram<br />
                    Chennai, Tamil Nadu – 600044
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-card/60 border border-border/50 glass-premium">
              <input type="hidden" name="_subject" value="New Contact Form Submission – Sirah Digital" />
              <h3 className="font-display text-2xl font-semibold mb-6 gradient-text">Send us a message</h3>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name *</label>
                  <Input
                    name="firstName"
                    required
                    placeholder="John"
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name *</label>
                  <Input
                    name="lastName"
                    required
                    placeholder="Doe"
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <Input
                    name="email"
                    type="email"
                    required
                    placeholder="john@company.com"
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone *</label>
                  <Input
                    name="phone"
                    type="tel"
                    required
                    placeholder="+1 (234) 567-890"
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Company</label>
                <Input
                  name="company"
                  placeholder="Your Company Name"
                  className="bg-background/50 border-border/50 focus:border-primary"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Tell us about your automation needs *</label>
                <Textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Describe your business challenges and what you'd like to automate..."
                  className="bg-background/50 border-border/50 focus:border-primary resize-none"
                />
              </div>

              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full glow-primary hover-glow"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    SUBMIT <Send className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>

              <p className="text-muted-foreground text-xs text-center mt-4">
                We'll respond within 24 hours. Your information is safe with us.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
