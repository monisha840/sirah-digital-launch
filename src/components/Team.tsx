import { Facebook, MessageCircle, Youtube, Instagram } from "lucide-react";
import abdulSamadImg from "@/assets/abdul-samad.jpg";
import jesheebaFathimaImg from "@/assets/jesheeba-fathima.jpg";
import aakashKummarImg from "@/assets/aakash-kummar.jpg";
import monishaImg from "@/assets/monisha.jpg";
import eshwanthImg from "@/assets/eshwanth.jpg";
import mohammadRiyazImg from "@/assets/mohammad-riyaz.jpg";

const founder = {
    name: "MOHAMMAD RIYAZ",
    designation: "Founder – SIRAH DIGITAL",
    description: "Visionary leader driving AI-powered digital growth and automation-focused business solutions at SIRAH DIGITAL.",
    image: mohammadRiyazImg,
};

const teamMembers = [
    {
        name: "M. JESHEEBA FATHIMA",
        designation: "Digital Growth Consultant",
        description: "Driving strategic digital transformation and growth initiatives for businesses.",
        image: jesheebaFathimaImg,
    },
    {
        name: "SS. MONISHA",
        designation: "Digital Growth Consultant",
        description: "Specializing in data-driven growth strategies and digital marketing solutions.",
        image: monishaImg,
    },
    {
        name: "B. ESHWANTH",
        designation: "Brand Growth Consultant",
        description: "Building powerful brand identities and comprehensive growth frameworks.",
        image: eshwanthImg,
    },
    {
        name: "ABDUL SAMAD",
        designation: "AI Automation Engineer",
        description: "Developing intelligent automation systems and AI-powered solutions.",
        image: abdulSamadImg,
    },
    {
        name: "I. AAKASH KUMMAR",
        designation: "AI Automation Engineer",
        description: "Creating scalable AI workflows and automation infrastructure.",
        image: aakashKummarImg,
    },
];

const getInitials = (name: string) => {
    const parts = name.split(' ');
    if (parts.length >= 2) {
        return parts[0][0] + parts[1][0];
    }
    return name.substring(0, 2).toUpperCase();
};

export const Team = () => {
    return (
        <section id="team" className="relative overflow-hidden">
            <div className="flex flex-col lg:flex-row min-h-screen">

                {/* LEFT SIDE - Founder Profile Card */}
                <div className="lg:w-[370px] bg-gradient-to-b from-primary/30 via-accent/25 to-primary/20 flex flex-col items-center justify-center p-8 lg:p-12 relative backdrop-blur-sm">
                    {/* Large Profile Image */}
                    <div className="w-56 h-56 rounded-full bg-card/90 flex items-center justify-center mb-8 shadow-xl ring-4 ring-primary/30 overflow-hidden">
                        {founder.image ? (
                            <img
                                src={founder.image}
                                alt={founder.name}
                                className="w-full h-full object-cover"
                                style={{ filter: 'contrast(1.05) saturate(0.9)' }}
                            />
                        ) : (
                            <div className="text-6xl font-bold gradient-text">
                                {getInitials(founder.name)}
                            </div>
                        )}
                    </div>

                    {/* Founder Info */}
                    <h2 className="text-foreground text-3xl font-bold mb-3 text-center font-display">
                        {founder.name}
                    </h2>
                    <p className="text-primary text-lg mb-6 text-center font-semibold">
                        {founder.designation}
                    </p>
                    <p className="text-muted-foreground text-center text-sm leading-relaxed mb-10 max-w-xs">
                        {founder.description}
                    </p>


                    {/* Social Icons */}
                    <div className="flex gap-4">
                        <a href="https://www.facebook.com/share/1C8e4h74gr/" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full border-2 border-primary/60 flex items-center justify-center hover:bg-primary/20 hover:border-primary transition-all cursor-pointer glow-soft">
                            <Facebook className="w-5 h-5 text-primary" />
                        </a>
                        <a href="https://wa.link/zebr1n" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full border-2 border-primary/60 flex items-center justify-center hover:bg-primary/20 hover:border-primary transition-all cursor-pointer glow-soft">
                            <MessageCircle className="w-5 h-5 text-primary" />
                        </a>
                        <a href="https://www.youtube.com/@riyazlive" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full border-2 border-primary/60 flex items-center justify-center hover:bg-primary/20 hover:border-primary transition-all cursor-pointer glow-soft">
                            <Youtube className="w-5 h-5 text-primary" />
                        </a>
                        <a href="https://www.instagram.com/sirah_digital?igsh=MWdqMHNscWNsdTFucg==" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full border-2 border-primary/60 flex items-center justify-center hover:bg-primary/20 hover:border-primary transition-all cursor-pointer glow-soft">
                            <Instagram className="w-5 h-5 text-primary" />
                        </a>
                    </div>
                </div>

                {/* RIGHT SIDE - Team Members Grid */}
                <div className="flex-1 bg-background/50 p-8 lg:p-16">
                    {/* Heading */}
                    <div className="mb-12">
                        <h1 className="text-4xl font-bold text-foreground mb-2 inline-block font-display">
                            Meet Our <span className="gradient-text">Brains</span>
                        </h1>
                        <div className="w-48 h-1 bg-gradient-to-r from-primary to-accent mt-1"></div>
                    </div>

                    {/* Team Grid */}
                    <div className="max-w-5xl">
                        {/* Top Row - 3 Members */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mb-12">
                            {teamMembers.slice(0, 3).map((member, index) => (
                                <div key={index} className="flex flex-col items-center text-center group">
                                    {/* Profile Image */}
                                    <div className="w-32 h-32 rounded-full border-4 border-primary/40 bg-card/80 flex items-center justify-center mb-4 shadow-lg group-hover:border-primary group-hover:shadow-primary/20 transition-all duration-300 overflow-hidden">
                                        {member.image ? (
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                className="w-full h-full object-cover"
                                                style={{ filter: 'contrast(1.05) saturate(0.9)' }}
                                            />
                                        ) : (
                                            <div className="text-3xl font-bold gradient-text">
                                                {getInitials(member.name)}
                                            </div>
                                        )}
                                    </div>
                                    {/* Member Info */}
                                    <h3 className="text-foreground font-bold text-lg mb-1 font-display group-hover:text-primary transition-colors">
                                        {member.name}
                                    </h3>
                                    <p className="text-muted-foreground text-sm mb-3">
                                        {member.designation}
                                    </p>
                                    <p className="text-muted-foreground/80 text-xs leading-relaxed">
                                        {member.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Bottom Row - 2 Members Centered */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12 max-w-2xl mx-auto">
                            {teamMembers.slice(3, 5).map((member, index) => (
                                <div key={index} className="flex flex-col items-center text-center group">
                                    {/* Profile Image */}
                                    <div className="w-32 h-32 rounded-full border-4 border-primary/40 bg-card/80 flex items-center justify-center mb-4 shadow-lg group-hover:border-primary group-hover:shadow-primary/20 transition-all duration-300 overflow-hidden">
                                        {member.image ? (
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                className="w-full h-full object-cover"
                                                style={{ filter: 'contrast(1.05) saturate(0.9)' }}
                                            />
                                        ) : (
                                            <div className="text-3xl font-bold gradient-text">
                                                {getInitials(member.name)}
                                            </div>
                                        )}
                                    </div>
                                    {/* Member Info */}
                                    <h3 className="text-foreground font-bold text-lg mb-1 font-display group-hover:text-primary transition-colors">
                                        {member.name}
                                    </h3>
                                    <p className="text-muted-foreground text-sm mb-3">
                                        {member.designation}
                                    </p>
                                    <p className="text-muted-foreground/80 text-xs leading-relaxed">
                                        {member.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
