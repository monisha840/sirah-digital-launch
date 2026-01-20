import { motion } from "framer-motion";
import { Facebook, MessageCircle, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpeg";

const footerLinks = {
  company: [
    { name: "About Us", href: "#about" },
    { name: "Our Process", href: "#process" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ],
  services: [
    { name: "AI Business Automation", href: "#services" },
    { name: "Chatbot Development", href: "#services" },
    { name: "CRM Automation", href: "#services" },
    { name: "Marketing Automation", href: "#services" },
  ],
  resources: [
    { name: "FAQ", href: "#" },
    { name: "Support", href: "#contact" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/share/1C8e4h74gr/", label: "Facebook" },
  { icon: MessageCircle, href: "https://wa.link/zebr1n", label: "WhatsApp" },
  { icon: Instagram, href: "https://www.instagram.com/sirah_digital?igsh=MWdqMHNscWNsdTFucg==", label: "Instagram" },
  { icon: Youtube, href: "https://www.youtube.com/@riyazlive", label: "YouTube" },
];

export const Footer = () => {
  return (
    <footer className="py-16 border-t border-border/30 relative overflow-hidden">
      {/* Enhanced Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-2">
            <a href="#home" className="flex items-center gap-3 mb-4 group">
              <motion.img
                src={logo}
                alt="SIRAH DIGITAL"
                className="w-12 h-12 rounded-lg object-cover ring-2 ring-primary/30 group-hover:ring-primary/60 transition-all shadow-lg"
                whileHover={{ scale: 1.05 }}
              />
              <span className="font-display font-bold text-xl text-foreground">
                SIRAH <span className="gradient-text">DIGITAL</span>
              </span>
            </a>
            <p className="text-muted-foreground text-sm mb-6 max-w-sm">
              Transforming businesses with intelligent AI automation solutions.
              We help you work smarter, scale faster, and grow without limits.
            </p>

            <Button variant="hero" size="lg" asChild className="mb-6 glow-primary hover-lift">
              <a href="https://tidycal.com/1r8o7ez/sirah-digital" target="_blank" rel="noopener noreferrer">Book Free Consultation</a>
            </Button>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all duration-300 glow-soft group">
                  <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors duration-300 hover:translate-x-1 inline-block">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors duration-300 hover:translate-x-1 inline-block">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="font-display font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <a href="mailto:support@sirahdigital.in" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  support@sirahdigital.in
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <a href="tel:+919789961631" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  +91 97899 61631
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="text-muted-foreground text-sm">
                  8th Floor, Innovate, Featherlite – The Address, 200 Feet Radial Rd, Zamin Pallavaram, Chennai, Tamil Nadu – 600044
                </span>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground text-sm hover:text-foreground transition-colors duration-200 inline-flex items-center gap-1"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} SIRAH DIGITAL. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
