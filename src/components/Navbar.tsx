import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.jpeg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navLinks = [
  { name: "Hub", path: "/" },
  {
    name: "What We Offer",
    children: [
      { name: "Services", path: "/services" },
      { name: "Our Solutions", path: "/our-solutions" },
    ]
  },
  { name: "Industries", path: "/industries" },
  { name: "Why Us", path: "/why-us" },
  { name: "Process", path: "/process" },
  { name: "Brains", path: "/team" },
  { name: "Contact", path: "/contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileSubmenu = (name: string) => {
    setMobileSubmenuOpen(mobileSubmenuOpen === name ? null : name);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? "glass-premium py-3 shadow-premium bg-slate-950/80"
        : "bg-transparent py-5"
        }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <motion.img
            src={logo}
            alt="SIRAH DIGITAL"
            className="w-12 h-12 rounded-lg object-cover ring-2 ring-primary/30 group-hover:ring-primary/60 transition-all duration-300 shadow-lg"
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <span className="font-display font-bold text-xl text-foreground">
            SIRAH <span className="gradient-text">DIGITAL</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            if (link.children) {
              return (
                <DropdownMenu key={link.name}>
                  <DropdownMenuTrigger className="flex items-center gap-1 text-foreground/90 hover:text-foreground transition-all duration-300 text-sm font-semibold tracking-wide group outline-none">
                    <span className="relative z-10 transition-transform duration-300 group-hover:scale-105 inline-block">
                      {link.name}
                    </span>
                    <ChevronDown className="w-4 h-4 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="glass-premium p-2 rounded-xl mt-2 w-48 shadow-premium z-50">
                    {link.children.map((child) => (
                      <DropdownMenuItem key={child.name} asChild className="focus:bg-white/10 focus:text-primary cursor-pointer rounded-lg">
                        <Link to={child.path} className={`w-full font-medium ${location.pathname === child.path ? "text-primary" : "text-white"}`}>
                          {child.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              );
            }

            return (
              <Link
                key={link.name}
                to={link.path!}
                className={`relative text-foreground/90 hover:text-foreground transition-all duration-300 text-sm font-semibold tracking-wide group ${location.pathname === link.path ? "text-primary" : ""
                  }`}
              >
                <span className="relative z-10 transition-transform duration-300 group-hover:scale-105 inline-block">
                  {link.name}
                </span>
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary transition-all duration-300 ease-out ${location.pathname === link.path ? "w-full shadow-[0_0_8px_hsl(var(--primary))]" : "w-0 group-hover:w-full group-hover:shadow-[0_0_8px_hsl(var(--primary))]"
                  }`} />
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button variant="hero" size="lg" asChild className="glow-primary hover-lift group">
            <a href="https://tidycal.com/1r8o7ez/sirah-digital" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              Book Free Consultation
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-foreground p-2 hover:bg-primary/10 rounded-lg transition-colors bg-white/5 backdrop-blur-sm border border-white/10"
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
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden glass-premium border-t border-border/30 fixed inset-x-0 top-[72px] bottom-0 z-40 overflow-y-auto"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-2 pb-24">
              {navLinks.map((link, index) => {
                if (link.children) {
                  const isOpen = mobileSubmenuOpen === link.name;
                  return (
                    <div key={link.name} className="flex flex-col">
                      <button
                        onClick={() => toggleMobileSubmenu(link.name)}
                        className="flex items-center justify-between text-foreground/90 hover:text-foreground transition-all duration-300 text-lg font-semibold py-3 px-4 hover:bg-primary/10 rounded-lg w-full text-left"
                      >
                        <motion.span
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          {link.name}
                        </motion.span>
                        <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`} />
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden pl-4"
                          >
                            <div className="flex flex-col gap-1 py-1 border-l-2 border-white/10 ml-4 pl-4">
                              {link.children.map((child, childIndex) => (
                                <Link
                                  key={child.name}
                                  to={child.path}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className={`text-foreground/80 hover:text-white transition-colors py-3 text-base ${location.pathname === child.path ? "text-primary" : ""}`}
                                >
                                  {child.name}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    to={link.path!}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`text-foreground/90 hover:text-foreground transition-all duration-300 text-lg font-semibold py-3 px-4 hover:bg-primary/10 rounded-lg ${location.pathname === link.path ? "text-primary bg-primary/10" : ""
                        }`}
                    >
                      {link.name}
                    </motion.div>
                  </Link>
                );
              })}
              <div className="mt-8 px-4">
                <Button variant="hero" size="lg" className="w-full glow-primary py-6 text-lg" asChild>
                  <a href="https://tidycal.com/1r8o7ez/sirah-digital" target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)}>
                    Book Free Consultation
                  </a>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
