
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FinalCTA } from "@/components/FinalCTA";
import { motion } from "framer-motion";
import { Zap, MessageSquare, Phone, Calendar, Star, BarChart3, Users, Network, Search } from "lucide-react";

// Solution data matching the navbar
const solutions = [
    {
        title: "Sirah SmartChat",
        description: "Website & WhatsApp chatbot for lead capture, FAQs, qualification, and routing.",
        icon: MessageSquare,
    },
    {
        title: "WhatsApp Lead Nurturing System",
        description: "Automated WhatsApp sequences for new leads, follow-ups, reminders, and conversions.",
        icon: Zap,
    },
    {
        title: "AI Lead Nurturing Call + WhatsApp Sequence",
        description: "AI voice calls combined with WhatsApp automation to move leads across pipeline stages.",
        icon: Phone,
    },
    {
        title: "AI Receptionist + Appointment Closer",
        description: "Voice + WhatsApp + Calendar automation to answer calls, book appointments, handle no-shows, and confirmations.",
        icon: Calendar,
    },
    {
        title: "AI Review Response + Reputation Builder",
        description: "Google Business Profile automation for review requests, AI-generated replies, and reputation management.",
        icon: Star,
    },
    {
        title: "Sales Call Analyzer",
        description: "AI-powered call transcription, sentiment analysis, objection detection, and sales insights.",
        icon: BarChart3,
    },
    {
        title: "Lead Management & Gamified CRM",
        description: "Internal productivity platform for task tracking, pipelines, performance, and team gamification.",
        icon: Users,
    },
    {
        title: "AI Business Match Platform",
        description: "AI-driven member matching, lead discovery, and lifecycle management for communities.",
        icon: Network,
    },
    {
        title: "Analytics (GA4) Audit & Automation",
        description: "Automated GA4 + GTM audit, event validation, and implementation workflows.",
        icon: Search,
    },
];

const OurSolutions = () => {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            <main className="pt-24 pb-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
                            Our <span className="gradient-text text-glow">Solutions</span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            Comprehensive AI-powered automation tools designed to transform every aspect of your business operations.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {solutions.map((solution, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
                            >
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <solution.icon className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                                    {solution.title}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {solution.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </main>

            <FinalCTA />
            <Footer />
        </div>
    );
};

export default OurSolutions;
