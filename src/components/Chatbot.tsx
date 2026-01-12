import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User, RotateCcw, Languages, Check, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { getBotResponse, Language, staticResponses, companyInfo } from "@/data/chatbotData";

interface Message {
    id: string;
    text: string;
    isUser: boolean;
    isBookingLink?: boolean;
}

type BookingStep = 'none' | 'name' | 'phone' | 'email' | 'url' | 'completed';

export const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [language, setLanguage] = useState<Language>('en');

    // Booking Form State
    const [bookingStep, setBookingStep] = useState<BookingStep>('none');
    const [bookingData, setBookingData] = useState({ name: '', phone: '', email: '', url: '' });

    const [messages, setMessages] = useState<Message[]>([
        {
            id: "1",
            text: staticResponses.intro['en'],
            isUser: false,
        },
    ]);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const scrollAreaRef = useRef<HTMLDivElement>(null);
    const chatbotRef = useRef<HTMLDivElement>(null);

    const defaultQuestions = [
        "What services do you offer?",
        "How to book a call?",
        "How is AI automation useful?",
        "What is an AI Chatbot?",
    ];

    useEffect(() => {
        if (scrollAreaRef.current) {
            scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (chatbotRef.current && !chatbotRef.current.contains(event.target as Node) && isOpen) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen]);

    const handleRefresh = () => {
        setMessages([{
            id: Date.now().toString(),
            text: staticResponses.intro[language],
            isUser: false,
        }]);
        setInputValue("");
        setBookingStep('none');
        setBookingData({ name: '', phone: '', email: '', url: '' });
    };

    const processBookingStep = (input: string) => {
        let nextStep: BookingStep = bookingStep;
        let responseText = "";

        switch (bookingStep) {
            case 'name':
                setBookingData(prev => ({ ...prev, name: input }));
                responseText = "Thanks! Now, please enter your **Phone Number** (Mandatory).";
                nextStep = 'phone';
                break;
            case 'phone':
                setBookingData(prev => ({ ...prev, phone: input }));
                responseText = "Got it. What is your **Email Address**? (Mandatory)";
                nextStep = 'email';
                break;
            case 'email':
                setBookingData(prev => ({ ...prev, email: input }));
                responseText = "Almost done. What is your **Website URL**? (Optional - type 'skip' if none)";
                nextStep = 'url';
                break;
            case 'url':
                setBookingData(prev => ({ ...prev, url: input }));
                responseText = "Perfect! Click the button below to schedule your free consultation.";
                nextStep = 'completed';
                break;
        }

        setBookingStep(nextStep);
        return responseText;
    };

    const handleSendMessage = async (overrideInput?: string) => {
        const textToSend = overrideInput || inputValue;
        if (!textToSend.trim()) return;

        // User Message
        const userMessage: Message = {
            id: Date.now().toString(),
            text: textToSend,
            isUser: true,
        };
        setMessages((prev) => [...prev, userMessage]);
        setInputValue("");
        setIsTyping(true);

        // Logic Delay
        setTimeout(() => {
            let botResponseText = "";
            let isBookingLink = false;

            // 1. Handle Active Booking Flow
            if (bookingStep !== 'none' && bookingStep !== 'completed') {
                botResponseText = processBookingStep(textToSend);
                if (bookingStep === 'url') { // Transitioning to completed
                    isBookingLink = true;
                }
            }
            // 2. Standard Logic
            else {
                const response = getBotResponse(textToSend, language);
                botResponseText = response;
            }

            const botMessage: Message = {
                id: (Date.now() + 1).toString(),
                text: botResponseText,
                isUser: false,
                isBookingLink: isBookingLink
            };

            setMessages((prev) => [...prev, botMessage]);
            setIsTyping(false);
        }, 800);
    };

    // Helper to render text with clickable links and bold formating
    const renderMessageText = (text: string) => {
        return text.split('\n').map((line, i) => {
            const parts = line.split(/(\*\*.*?\*\*)/g);
            return (
                <div key={i} className="min-h-[1.2em]">
                    {parts.map((part, j) => {
                        if (part.startsWith('**') && part.endsWith('**')) {
                            return <strong key={j} className="text-primary font-semibold">{part.slice(2, -2)}</strong>;
                        }
                        const urlRegex = /(https?:\/\/[^\s]+)/g;
                        const urlParts = part.split(urlRegex);
                        return urlParts.map((subPart, k) => {
                            if (subPart.match(urlRegex)) {
                                return <a key={k} href={subPart} target="_blank" rel="noreferrer" className="underline text-primary hover:text-accent break-all">{subPart}</a>;
                            }
                            return subPart;
                        });
                    })}
                </div>
            );
        });
    };

    return (
        <div ref={chatbotRef} className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-4 sm:bottom-8 sm:right-8">
            {/* Chat Window */}
            {isOpen && (
                <div className="glass-premium w-[350px] sm:w-[400px] h-[550px] rounded-2xl flex flex-col overflow-hidden shadow-[0_0_50px_-10px_rgba(0,0,0,0.5)] animate-scale-in origin-bottom-right border border-primary/20">
                    {/* Header */}
                    <div className="p-4 border-b border-primary/20 bg-primary/5 backdrop-blur-md flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <div className="absolute inset-0 bg-primary/40 blur rounded-full animate-pulse-glow"></div>
                                <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center border border-white/10">
                                    <Bot className="w-6 h-6 text-white" />
                                </div>
                                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-background"></div>
                            </div>
                            <div className="flex flex-col">
                                <span className="font-display font-bold text-foreground">Sirah SmartChat</span>
                                <span className="text-xs text-muted-foreground">Always active</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-1">
                            <Button variant="ghost" size="icon" onClick={handleRefresh} title="Restart Chat" className="h-8 w-8 hover:bg-primary/10 rounded-full text-muted-foreground hover:text-primary transition-colors">
                                <RotateCcw className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="h-8 w-8 hover:bg-primary/10 rounded-full text-muted-foreground hover:text-primary transition-colors">
                                <X className="w-5 h-5" />
                            </Button>
                        </div>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4" ref={scrollAreaRef}>
                        {messages.map((message) => (
                            <div key={message.id}>
                                <div className={cn("flex w-full items-end gap-2", message.isUser ? "justify-end" : "justify-start")}>
                                    {!message.isUser && (
                                        <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 border border-primary/20">
                                            <Bot className="w-3 h-3 text-primary" />
                                        </div>
                                    )}
                                    <div className={cn(
                                        "max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm",
                                        message.isUser
                                            ? "bg-primary/20 text-foreground rounded-br-none border border-primary/20"
                                            : "bg-secondary text-secondary-foreground rounded-bl-none border border-white/5"
                                    )}>
                                        {renderMessageText(message.text)}
                                    </div>
                                    {message.isUser && (
                                        <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0 border border-accent/20">
                                            <User className="w-3 h-3 text-accent" />
                                        </div>
                                    )}
                                </div>
                                {/* Booking Link Button */}
                                {message.isBookingLink && (
                                    <div className="mt-2 ml-8 animate-fade-in">
                                        <a
                                            href={companyInfo.contact.bookingLink}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent text-white px-6 py-3 rounded-xl text-sm font-semibold hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all transform hover:-translate-y-1"
                                        >
                                            <Calendar className="w-4 h-4" />
                                            Book Calendar
                                        </a>
                                        <p className="text-xs text-green-400 mt-2 font-medium flex items-center gap-1">
                                            <Check className="w-3 h-3" /> Appointment Booked!
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                        {isTyping && (
                            <div className="flex w-full items-end gap-2 justify-start">
                                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 border border-primary/20">
                                    <Bot className="w-3 h-3 text-primary" />
                                </div>
                                <div className="bg-secondary p-3 rounded-2xl rounded-bl-none border border-white/5">
                                    <div className="flex gap-1">
                                        <span className="w-2 h-2 bg-primary/40 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                        <span className="w-2 h-2 bg-primary/40 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                        <span className="w-2 h-2 bg-primary/40 rounded-full animate-bounce"></span>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div className="h-2"></div>
                    </div>

                    {/* Default Questions Chips - UPDATED: Wrapped and accessible */}
                    {/* Default Questions Chips - UPDATED: Row Separation */}
                    <div className="px-4 pb-2 flex flex-col gap-2 animate-fade-in">
                        {/* Permanent Booking Button - Own Row */}
                        <div className="flex">
                            <a
                                href={companyInfo.contact.bookingLink}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary/90 transition-all shadow-[0_0_10px_-2px_hsl(var(--primary)/0.5)] hover:shadow-[0_0_15px_-2px_hsl(var(--primary)/0.6)]"
                            >
                                <Calendar className="w-3.5 h-3.5" />
                                Book Free Appointment
                            </a>
                        </div>

                        {/* Other Questions - Row Below */}
                        <div className="flex flex-wrap gap-2">
                            {defaultQuestions.map((q, i) => (
                                <button
                                    key={i}
                                    onClick={() => handleSendMessage(q)}
                                    disabled={isTyping}
                                    className="whitespace-nowrap px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs text-foreground hover:bg-primary/20 transition-colors flex-shrink-0"
                                >
                                    {q}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Input Area */}
                    <div className="p-4 border-t border-primary/10 bg-black/40 backdrop-blur-md">
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                handleSendMessage();
                            }}
                            className="flex gap-2"
                        >
                            <Input
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                placeholder="Type your message..."
                                className="bg-secondary/50 border-white/10 focus-visible:ring-primary/50 text-foreground placeholder:text-muted-foreground/70"
                                disabled={isTyping}
                            />
                            <Button
                                type="submit"
                                size="icon"
                                className="bg-primary hover:bg-primary/80 text-primary-foreground shadow-[0_0_20px_-5px_hsl(var(--primary)/0.5)] transition-all duration-300"
                                disabled={!inputValue.trim() || isTyping}
                            >
                                <Send className="w-4 h-4" />
                            </Button>
                        </form>
                    </div>
                </div>
            )}

            {/* Floating Launcher and Label */}
            <div className="relative flex items-center gap-4">
                {/* Floating Label */}
                {!isOpen && (
                    <div
                        onClick={() => setIsOpen(true)}
                        className="hidden sm:block cursor-pointer animate-bounce-in"
                    >
                        <div className="bg-card border border-primary/30 text-foreground px-4 py-2 rounded-full shadow-lg relative glow-soft hover:scale-105 transition-transform">
                            <span className="font-display font-semibold text-sm gradient-text">Ask Sirah AI</span>
                            {/* Arrow pointing right */}
                            <div className="absolute top-1/2 -right-1.5 w-3 h-3 bg-card border-t border-r border-primary/30 transform rotate-45 -translate-y-1/2"></div>
                        </div>
                    </div>
                )}

                <div className="relative">
                    {!isOpen && (
                        <>
                            <span className="absolute inset-0 rounded-full border border-primary/50 animate-ripple [animation-delay:0s] opacity-0"></span>
                            <span className="absolute inset-0 rounded-full border border-primary/40 animate-ripple [animation-delay:1s] opacity-0"></span>
                            <span className="absolute inset-0 rounded-full border border-primary/30 animate-ripple [animation-delay:2s] opacity-0"></span>
                        </>
                    )}

                    <Button
                        onClick={() => setIsOpen(!isOpen)}
                        size="lg"
                        className={cn(
                            "h-14 w-14 rounded-full shadow-[0_0_30px_-5px_hsl(var(--primary)/0.5)] transition-all duration-500 ease-out p-0 border border-primary/50 backdrop-blur-md relative z-10",
                            isOpen
                                ? "bg-secondary text-white rotate-90"
                                : "bg-black/40 hover:bg-primary/20 text-primary hover:text-white hover:scale-110 hover:-translate-y-1 hover:border-primary"
                        )}
                    >
                        {isOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <MessageCircle className="w-6 h-6" />
                        )}
                    </Button>
                </div>
            </div>
        </div>
    );
};
