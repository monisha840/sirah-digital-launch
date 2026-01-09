import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, DollarSign, TrendingUp, Headphones } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import aiHeroVisual from "@/assets/ai-hero-visual.png";

const benefits = [
    { icon: Clock, text: "Save hours every day on manual tasks" },
    { icon: DollarSign, text: "Cut costs by up to 60% with automation" },
    { icon: TrendingUp, text: "Grow your business without hiring more staff" },
    { icon: Headphones, text: "Delight customers with instant 24/7 support" },
];

export const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${heroBg})` }}
            />
            <div className="absolute inset-0 bg-background/85" />

            {/* Enhanced Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.2),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,hsl(var(--accent)/0.15),transparent_50%)]" />

            {/* Animated Gradient Mesh */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.1),transparent_50%)] animate-pulse-glow" />
            </div>

            {/* Grid Pattern with enhanced opacity */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px'
                }}
            />

            {/* Scanline Effect */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
                <div className="h-full w-full" style={{
                    backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(var(--primary)) 2px, hsl(var(--primary)) 4px)',
                }} />
            </div>

            {/* Enhanced Floating Orbs with more dynamic movement */}
            <motion.div
                animate={{
                    y: [-30, 30, -30],
                    x: [-15, 15, -15],
                    scale: [1, 1.1, 1],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 left-1/4 w-80 h-80 bg-primary/25 rounded-full blur-[120px] glow-soft"
            />
            <motion.div
                animate={{
                    y: [30, -30, 30],
                    x: [15, -15, 15],
                    scale: [1, 1.15, 1],
                }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/25 rounded-full blur-[140px] glow-soft"
            />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-7xl mx-auto">
                    {/* Two-Column Layout: Text Left, Image Right */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center">

                        {/* Left Column - Text Content */}
                        <div className="text-center lg:text-left lg:pl-8">
                            {/* Enhanced Badge with shimmer */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, type: "spring" }}
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-premium mb-8 shimmer"
                            >
                                <span className="w-2 h-2 bg-primary rounded-full animate-pulse-glow glow-primary" />
                                <span className="text-sm font-medium text-muted-foreground">AI-Powered Business Automation</span>
                            </motion.div>

                            {/* Main Heading - Clean and dominant */}
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.1, type: "spring", stiffness: 100 }}
                                className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
                            >
                                Automate Your Business with AI
                            </motion.h1>

                            {/* Modern Tagline - Bold and Clean */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.25, type: "spring", stiffness: 80 }}
                                className="mb-8"
                            >
                                <p className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground bg-card/80 px-6 py-3 rounded-lg inline-block">
                                    Scale Faster. Work Smarter.
                                </p>
                            </motion.div>

                            {/* Subheading */}
                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.2, type: "spring", stiffness: 100 }}
                                className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-8 text-balance leading-relaxed"
                            >
                                We help businesses automate operations, optimize workflows, and increase
                                revenue using intelligent AI systems.
                            </motion.p>

                            {/* Enhanced Benefits with premium cards */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10"
                            >
                                {benefits.map((benefit, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{
                                            duration: 0.5,
                                            delay: 0.4 + index * 0.1,
                                            type: "spring",
                                            stiffness: 120
                                        }}
                                        className="flex items-center gap-3 p-4 rounded-xl glass-premium hover-lift group cursor-pointer"
                                    >
                                        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center shrink-0 group-hover:from-primary/30 group-hover:to-accent/20 transition-all duration-300 group-hover:scale-110 glow-soft">
                                            <benefit.icon className="w-5 h-5 text-primary" />
                                        </div>
                                        <span className="text-sm font-medium text-foreground text-left">{benefit.text}</span>
                                    </motion.div>
                                ))}
                            </motion.div>

                            {/* Enhanced CTA Buttons */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                                className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4"
                            >
                                <Button variant="hero" size="xl" asChild className="glow-primary hover-glow group">
                                    <a href="https://tidycal.com/1r8o7ez/sirah-digital" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                        Book Free AI Consultation
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </a>
                                </Button>
                                <Button variant="heroOutline" size="xl" asChild className="hover-lift">
                                    <a href="/services">Explore Our AI Solutions</a>
                                </Button>
                            </motion.div>
                        </div>

                        {/* Right Column - AI Visual Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.4, type: "spring", stiffness: 60 }}
                            className="relative hidden lg:flex items-center justify-end lg:pr-0"
                            style={{
                                maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 100%)',
                                WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 100%)',
                            }}
                        >
                            {/* AI Visual Image with floating and breathe animation */}
                            <motion.img
                                src={aiHeroVisual}
                                alt="AI Intelligence Visualization"
                                animate={{
                                    y: [-8, 8, -8],
                                    scale: [1, 1.02, 1],
                                }}
                                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                                className="relative w-full max-w-xl h-auto object-contain opacity-90"
                            />
                        </motion.div>

                        {/* Mobile Image - Below content */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="lg:hidden flex items-center justify-center mt-8"
                        >
                            <img
                                src={aiHeroVisual}
                                alt="AI Intelligence Visualization"
                                className="relative w-full max-w-sm h-auto object-contain mx-auto opacity-90"
                            />
                        </motion.div>

                    </div>

                    {/* Enhanced Trust Indicators */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        className="mt-16 pt-16 border-t border-border/30"
                    >
                        <div className="flex flex-wrap justify-center items-center gap-8 text-muted-foreground">
                            <div className="flex items-center gap-2 group">
                                <div className="w-2 h-2 rounded-full bg-primary glow-primary group-hover:scale-125 transition-transform" />
                                <span className="text-sm font-medium">Trusted by growing businesses</span>
                            </div>
                            <div className="flex items-center gap-2 group">
                                <div className="w-2 h-2 rounded-full bg-primary glow-primary group-hover:scale-125 transition-transform" />
                                <span className="text-sm font-medium">Secure & scalable AI systems</span>
                            </div>
                            <div className="flex items-center gap-2 group">
                                <div className="w-2 h-2 rounded-full bg-primary glow-primary group-hover:scale-125 transition-transform" />
                                <span className="text-sm font-medium">Results-driven automation experts</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section >
    );
};
