import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.jpeg";

const navLinks = [
  { name: "Hub", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Industries", path: "/industries" },
  { name: "Why Us", path: "/why-us" },
  { name: "Process", path: "/process" },
  { name: "Team", path: "/team" },
  { name: "Contact", path: "/contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? "glass-premium py-3 shadow-premium"
        : "bg-transparent py-5"
        }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <motion.img
            src={logo}
            alt="SIRAH DIGITAL"
            className="w-10 h-10 rounded-lg object-cover ring-2 ring-primary/20 group-hover:ring-primary/50 transition-all duration-300"
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <span className="font-display font-bold text-xl text-foreground">
            SIRAH <span className="gradient-text">DIGITAL</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`relative text-foreground/90 hover:text-foreground transition-all duration-300 text-sm font-semibold tracking-wide group ${location.pathname === link.path ? "text-primary" : ""
                }`}
            >
              <span className="relative z-10 transition-transform duration-300 group-hover:scale-105 inline-block">
                {link.name}
              </span>
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary transition-all duration-300 ease-out ${location.pathname === link.path ? "w-full shadow-[0_0_8px_hsl(var(--primary))]" : "w-0 group-hover:w-full group-hover:shadow-[0_0_8px_hsl(var(--primary))]"
                }`} />
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button variant="hero" size="lg" asChild className="glow-primary hover-lift group">
            <Link to="/contact" className="flex items-center gap-2">
              Book Free Consultation
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-foreground p-2 hover:bg-primary/10 rounded-lg transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Enhanced Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden glass-premium border-t border-border/30"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`text-foreground/90 hover:text-foreground transition-all duration-300 text-lg font-semibold py-2 px-4 hover:bg-primary/10 rounded-lg ${location.pathname === link.path ? "text-primary bg-primary/10" : ""
                      }`}
                  >
                    {link.name}
                  </motion.div>
                </Link>
              ))}
              <Button variant="hero" size="lg" className="mt-4 glow-primary" asChild>
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Book Free Consultation
                </Link>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
