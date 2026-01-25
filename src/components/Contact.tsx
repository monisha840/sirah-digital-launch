import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Calendar,
  ArrowRight,
  CheckCircle2,
  RefreshCcw,
} from "lucide-react";
import { toast } from "sonner";

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Use absolute URL from env if provided, otherwise default to relative for internal Vercel/Proxy routing
  const API_URL = import.meta.env.VITE_BACKEND_URL || "";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      company: formData.get("company"),
      message: formData.get("message"),
    };

    try {
      // Robust URL construction: ensures either /api/leads or absolute URL/api/leads
      const endpoint = API_URL ? `${API_URL}/api/leads` : "/api/leads";

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        toast.success(
          result.message || "Thank you! We'll be in touch within 4 hours."
        );
        setIsSubmitted(true);
        (e.target as HTMLFormElement).reset();
      } else {
        toast.error(result.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error(
        "Failed to send message. Please try again or email us at support@sirahdigital.in"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(var(--primary)/0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--accent)/0.08),transparent_50%)]" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider shimmer">
            Get Started
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
            Ready to{" "}
            <span className="gradient-text text-glow">
              Automate Your Growth?
            </span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Book a free consultation call with our AI automation experts and
            discover how we can transform your business.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30">
              <Calendar className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-display text-xl font-semibold mb-2">
                Book Free Consultation
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                45 minutes strategy call with our AI experts.
              </p>
              <Button variant="hero" className="w-full" asChild>
                <a
                  href="https://tidycal.com/1r8o7ez/sirah-digital"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Schedule Now <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4">
                <Mail className="text-primary" />
                <a href="mailto:support@sirahdigital.in">
                  support@sirahdigital.in
                </a>
              </div>
              <div className="flex gap-4">
                <Phone className="text-primary" />
                <a href="tel:+919789961631">+91 97899 61631</a>
              </div>
              <div className="flex gap-4">
                <MapPin className="text-primary" />
                <span>
                  Chennai, Tamil Nadu – 600044
                </span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            {!isSubmitted ? (
              <form
                onSubmit={handleSubmit}
                className="p-8 rounded-2xl bg-card/60 border"
              >
                <h3 className="text-2xl font-semibold mb-6">
                  Send us a message
                </h3>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <Input name="firstName" required placeholder="First Name" />
                  <Input name="lastName" required placeholder="Last Name" />
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <Input name="email" type="email" required placeholder="Email" />
                  <Input name="phone" required placeholder="Phone" />
                </div>

                <Input
                  name="company"
                  placeholder="Company"
                  className="mb-4"
                />

                <Textarea
                  name="message"
                  required
                  placeholder="Your automation needs"
                  className="mb-6"
                />

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? "Sending..." : "Submit"}
                </Button>
              </form>
            ) : (
              <div className="p-12 text-center">
                <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">
                  Form Submitted!
                </h3>
                <Button onClick={() => setIsSubmitted(false)} variant="outline">
                  <RefreshCcw className="w-4 h-4 mr-2" />
                  Send Another
                </Button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
