
import { motion } from "framer-motion";
import { Check, Quote } from "lucide-react";
import { Button } from "./ui/button";

export const FounderSection = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-black/20">
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* Founder Bio */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div>
                            <span className="text-primary font-semibold text-sm uppercase tracking-wider shimmer">Founder</span>
                            <h2 className="font-display text-4xl md:text-5xl font-bold mt-2 mb-6">
                                Mohamed <span className="gradient-text">Riyaz</span>
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Mohamed Riyaz is the Founder of Sirah Digital and a Technical Architect with 13+ years of experience designing analytics, automation, and growth systems.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                                Having worked with global brands like <a href="https://in.pg.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Procter & Gamble</a> & <a href="https://www.reckitt.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Reckitt Bencksier</a> he has spent most of his career inside the systems that businesses depend on every day.
                            </p>
                        </div>

                        <div className="p-8 rounded-2xl bg-card/ border border-white/5 relative group">
                            <div className="absolute top-6 left-6 text-primary/20">
                                <Quote size={40} />
                            </div>
                            <p className="relative z-10 text-xl italic text-slate-300 pl-8">
                                "The purpose of Sirah Digital is not to replace people with AI, but to support them."
                            </p>
                        </div>
                    </motion.div>

                    {/* Mission / Why Started */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="font-display text-2xl font-bold mb-4">Why Sirah Digital was started</h3>
                            <p className="text-muted-foreground leading-relaxed mb-6">
                                Sirah Digital was started with a very specific intent. Riyaz repeatedly saw business owners doing everything right-running ads, hiring teams, using tools-yet feeling overwhelmed and unsure of what was actually working.
                            </p>
                            <p className="text-muted-foreground leading-relaxed mb-6">
                                Leads were coming in, but follow-ups were manual. Data existed, but clarity didn’t. AI was available, but it felt complicated or disconnected from real business needs.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h4 className="font-semibold text-foreground">To build AI systems that:</h4>
                            <ul className="space-y-3">
                                {[
                                    "Reduce daily operational stress",
                                    "Bring structure to lead handling and follow-ups",
                                    "Work quietly in the background",
                                    "Help businesses grow without losing the human touch"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start gap-3 text-muted-foreground">
                                        <div className="mt-1 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                                            <Check className="w-3 h-3 text-primary" />
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="pt-4 border-t border-white/10">
                            <p className="text-lg font-medium text-foreground">
                                Sirah Digital exists to turn effort into clear, guided growth, using practical AI that businesses can actually rely on.
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};
