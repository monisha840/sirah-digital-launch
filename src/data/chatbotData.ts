
export type Language = 'en' | 'ta';

export const companyInfo = {
    name: "Sirah Digital",
    description: {
        en: "Sirah Digital is an AI Automation agency that helps businesses streamline operations, capture leads, and grow revenue through smart automation solutions.",
        ta: "Sirah Digital ஒரு AI தானியங்கி நிறுவனம். நாங்கள் வணிகங்களுக்கு செயல்பாடுகளை எளிதாக்கவும், வாடிக்கையாளர்களை ஈர்க்கவும், மற்றும் வருவாயை பெருக்கவும் உதவுகிறோம்."
    },
    contact: {
        email: "support@sirahdigital.in",
        phone: "+91 97899 61631",
        address: {
            en: "8th Floor, Innovate, Featherlite – The Address, Pallavaram, Chennai – 600044",
            ta: "8வது தளம், இன்னோவேட், ஃபெதர்லைட் – தி அட்ரஸ், சென்னை – 600044"
        },
        bookingLink: "https://tidycal.com/1r8o7ez/sirah-digital",
    }
};

export const services = [
    {
        id: 'automation',
        title: { en: "AI Business Automation", ta: "AI வணிக தானியக்கம்" },
        keywords: { en: ["business automation", "operations", "streamline", "data entry"], ta: ["வணிக தானியக்கம்"] },
        description: { en: "Let AI handle your repetitive tasks so you can focus on growing your business. We automate everything from data entry to complex workflows.", ta: "உங்கள் வணிகத்தை வளர்ப்பதில் கவனம் செலுத்த AI மீண்டும் மீண்டும் செய்யும் பணிகளைக் கையாளட்டும்." }
    },
    {
        id: 'chatbot',
        title: { en: "AI Chatbot Development", ta: "AI சாட்பாட் உருவாக்கம்" },
        keywords: { en: ["chatbot", "chat bot", "conversational ai", "support", "sales bot"], ta: ["சாட்பாட்"] },
        description: { en: "Never miss a customer inquiry again. Our AI chatbots answer questions, qualify leads, and book appointments 24/7.", ta: "வாடிக்கையாளர் விசாரணையை தவறவிடாதீர்கள். எங்கள் AI சாட்பாட்கள் 24/7 பதிலளிக்கின்றன." }
    },
    {
        id: 'crm_workflow',
        title: { en: "CRM & Workflow Automation", ta: "CRM மற்றும் பணிப்பாய்வு தானியக்கம்" },
        keywords: { en: ["crm", "workflow", "zapier", "pipelines", "follow up"], ta: ["CRM", "வேலைப்பளு"] },
        description: { en: "Turn your CRM into a powerful sales machine. Automatically follow up with leads, track deals, and close more sales.", ta: "உங்கள் CRM ஐ விற்பனை இயந்திரமாக மாற்றவும். தானாகவே லீட்களைத் பின்தொடரவும்." }
    },
    {
        id: 'appointment',
        title: { en: "Appointment & Lead Management", ta: "நியமனம் மற்றும் லீட் மேலாண்மை" },
        keywords: { en: ["appointment", "booking", "schedule", "calendar", "lead management"], ta: ["நியமனம்", "முன்பதிவு"] },
        description: { en: "Fill your calendar automatically. Smart booking systems that schedule appointments and manage leads without manual work.", ta: "உங்கள் நேர அட்டவணையை தானாகவே நிரப்பவும். புத்திசாலித்தனமான முன்பதிவு அமைப்புகள்." }
    },
    {
        id: 'messaging',
        title: { en: "WhatsApp, Email & SMS Automation", ta: "WhatsApp மற்றும் மின்னஞ்சல் தானியக்கம்" },
        keywords: { en: ["whatsapp", "email", "sms", "messaging", "outreach"], ta: ["WhatsApp", "மின்னஞ்சல்"] },
        description: { en: "Reach customers on their favorite channels. Automated messages that feel personal and drive action.", ta: "வாடிக்கையாளர்களை அவர்களுக்குப் பிடித்த வழிகளில் அணுகவும்." }
    },
    {
        id: 'custom',
        title: { en: "Custom AI Integrations", ta: "தனிப்பயன் AI ஒருங்கிணைப்புகள்" },
        keywords: { en: ["custom", "integration", "api", "unique needs"], ta: ["தனிப்பயன்"] },
        description: { en: "Got unique needs? We build custom AI solutions that fit your business perfectly and work with your existing tools.", ta: "தனித்துவமான தேவைகள் உள்ளதா? உங்கள் வணிகத்திற்கு ஏற்ற தனிப்பயன் AI தீர்வுகளை உருவாக்குகிறோம்." }
    }
];



export const teamMembers = [
    {
        name: "MOHAMMAD RIYAZ",
        designation: "Founder – SIRAH DIGITAL",
        description: "Visionary leader driving AI-powered digital growth and automation-focused business solutions."
    },
    {
        name: "M. JESHEEBA FATHIMA",
        designation: "Digital Growth Specialist",
        description: "Driving strategic digital transformation and growth initiatives for businesses."
    },
    {
        name: "SS. MONISHA",
        designation: "AI Automation Engineer",
        description: "Building intelligent AI-driven automation & Delivering AI-enabled automation systems"
    },
    {
        name: "B. ESHWANTH",
        designation: "Brand Growth Consultant",
        description: "Building powerful brand identities and comprehensive growth frameworks."
    },
    {
        name: "ABDUL SAMAD",
        designation: "AI Solution Engineer",
        description: "Developing intelligent automation systems and AI-powered solutions."
    },
    {
        name: "I. AAKASH KUMMAR",
        designation: "AI Automation Engineer",
        description: "Creating scalable AI workflows and automation infrastructure."
    }
];

export const testimonials = [
    "Dr. Rebecca Martinez (FertilityCare): 'No-shows dropped by 45%'",
    "Dr. James Wilson (Advanced IVF): 'Transformative patient journey automation'",
    "Sarah Thompson (Healthcare Solutions): 'Improved satisfaction scores by 40%'",
    "Dr. Michael Chen (Wellness Medical): 'Exceeded expectation'"
];

export const problemsSolved = [
    "Manual processes eating up time",
    "Missed leads and opportunities",
    "Slow response times",
    "Disconnected tools and systems"
];

export const industries = [
    "Dermatologists",
    "IVF & Fertility Clinics",
    "Dental Practices",
    "Ayurveda & Homeopathy",
    "Psychology & Mental Health",
    "Urologist",
    "Gynecology",
    "Radiology",
    "Nutrition & Wellness",
    "Pharmacy",
    "Marketing Agencies",
    "Professional Services"
];

const solutionsList = [
    { title: "Sirah SmartChat", desc: "Website & WhatsApp chatbot for lead capture and routing." },
    { title: "WhatsApp Lead Nurturing System", desc: "Automated sequences for new leads and follow-ups." },
    { title: "AI Lead Nurturing Call + WhatsApp", desc: "AI voice calls mixed with WhatsApp automation." },
    { title: "AI Receptionist + Appointment Closer", desc: "Voice + Cal automation to book appointments." },
    { title: "AI Review Response + Reputation Builder", desc: "GMB automation for reviews and reputation." },
    { title: "Sales Call Analyzer", desc: "AI transcription, sentiment analysis, and insights." },
    { title: "Lead Management & Gamified CRM", desc: "Productivity platform for task tracking and gamification." },
    { title: "AI Business Match Platform", desc: "AI-driven member matching and lead discovery." },
    { title: "Analytics (GA4) Audit & Automation", desc: "Automated Google Analytics audit and implementation." }
];

const industryDetails: Record<string, { en: string, ta: string }> = {
    "Dermatologists": {
        en: "For **Dermatologists**, we automate appointment booking, patient follow-ups, and clinic workflows.",
        ta: "சரும மருத்துவர்களுக்காக சந்திப்பு முன்பதிவு மற்றும் கிளினிக் பணிப்பாய்வுகளை தானியக்கமாக்குகிறோம்."
    },
    "IVF & Fertility Clinics": {
        en: "For **IVF Clinics**, we streamline patient journeys with automated cycle reminders and coordination.",
        ta: "IVF கிளினிக்குகளுக்கு தானியங்கி சிகிச்சை நினைவூட்டல்கள் மூலம் நோயாளி பயணங்களை எளிதாக்குகிறோம்."
    },
    "Dental Practices": {
        en: "For **Dental Practices**, we handle appointment scheduling and treatment recall systems.",
        ta: "பல் மருத்துவமனைகளுக்கு சந்திப்பு திட்டமிடுதல் மற்றும் சிகிச்சை நினைவூட்டல்களை நாங்கள் கையாளுகிறோம்."
    },
    "Marketing Agencies": {
        en: "For **Marketing Agencies**, we automate client onboarding, task management, and reporting.",
        ta: "மார்க்கெட்டிங் ஏஜென்சிகளுக்கு வாடிக்கையாளர் ஆன்போர்டிங் மற்றும் பணி நிர்வாகத்தை தானியக்கமாக்குகிறோம்."
    }
};

const aiBenefits = {
    en: [
        "**Measurable ROI**: Focus on cost reduction and operational efficiency.",
        "**Custom Workflows**: Solutions tailored specifically to your unique requirements.",
        "**24/7 Operations**: Systems that run flawlessly without supervision or downtime.",
        "**Scalability**: Automations that grow seamlessly as your business expands.",
        "**Error Reduction**: Eliminating costly manual data entry and processing mistakes.",
        "**Enhanced Focus**: Empowering your team to focus on high-value strategic growth."
    ],
    ta: [
        "**அளவிடக்கூடிய ROI**: செலவு குறைப்பு மற்றும் செயல்திறனை மேம்படுத்துகிறது.",
        "**தனிப்பயனாக்கப்பட்ட தீர்வுகள்**: உங்கள் வணிகத் தேவைகளுக்கேற்ற பிரத்யேக தானியக்கங்கள்.",
        "**24/7 செயல்பாடு**: இடைவிடாமல் இயங்கும் தானியங்கி அமைப்புகள்.",
        "**வளர்ச்சித் திறன்**: வணிக வளர்ச்சியுடன் தடையின்றி வளரும் தீர்வுகள்.",
        "**பிழை குறைப்பு**: மனித தவறுகளை முற்றிலுமாகத் தவிர்க்கிறது.",
        "**மேம்பட்ட கவனம்**: உங்கள் குழுவை முக்கியமான பணிகளில் கவனம் செலுத்த வைக்கிறது."
    ]
};

export const staticResponses = {
    intro: {
        en: "Hello! I'm Sirah's AI assistant. How can I help you improve your business today?",
        ta: "வணக்கம்! நான் Sirah-வின் AI உதவியாளர். உங்கள் வணிகத்தை மேம்படுத்த நான் எவ்வாறு உதவ முடியும்?"
    },
    fallback: {
        en: "I'm not sure specifically about that, but I can help with:\n\n- **Services & Pricing**\n- **Industries we serve**\n- **Our Team & Founders**\n- **Booking a Call**\n\nOr just asking 'What can you do?'",
        ta: "மன்னிக்கவும், எனக்கு அது பற்றி தெரியவில்லை. ஆனால் நான் இவற்றில் உதவ முடியும்:\n\n- **சேவைகள் & விலை**\n- **துறைகள்**\n- **எங்கள் குழு**\n- **முன்பதிவு**"
    },
    casual: {
        en: "I am fine today, how can I help you?",
        ta: "நான் ஒரு AI உதவியாளர், நன்றாக இருக்கிறேன்! உங்கள் வணிகத்தை வளர்க்க உதவ தயாராக உள்ளேன்."
    },
    botName: {
        en: "My name is Sirah AI, your dedicated business growth assistant.",
        ta: "என் பெயர் Sirah AI, உங்கள் வணிக வளர்ச்சிக்கு உதவும் AI உதவியாளர்."
    },
    thanks: {
        en: "You're welcome! Let me know if you need anything else.",
        ta: "நன்றி! வேறு ஏதேனும் உதவி தேவைப்பட்டால் சொல்லுங்கள்."
    },
    bye: {
        en: "Goodbye! Looking forward to hearing from you soon.",
        ta: "வருகிறேன்! விரைவில் உங்களை மீண்டும் சந்திக்கிறோம்."
    },
    contact: {
        en: `The contact details you can use to reach us are:\n**Call:** ${companyInfo.contact.phone}\n**Email:** ${companyInfo.contact.email}\n**Address:** ${companyInfo.contact.address.en}`,
        ta: `எங்களை நேரடியாக தொடர்பு கொள்ளலாம்:\n**அழைக்க:** ${companyInfo.contact.phone}\n**மின்னஞ்சல்:** ${companyInfo.contact.email}\n**முகவரி:** ${companyInfo.contact.address.ta}`
    },
    stats: {
        en: "Our achievements include:\n- **500+** Automations Deployed\n- **13+ Years** of Technical Experience\n- **25+** Global Happy Clients\n- **10M+** Tasks Automated Monthly\n- **60%** Average Cost Reduction for clients.",
        ta: "எங்கள் சாதனைகள்:\n- **500+** தானியக்க திட்டங்கள்\n- **13+ ஆண்டுகள்** அனுபவம்\n- **25+** மகிழ்ச்சியான வாடிக்கையாளர்கள்"
    },
    techStack: {
        en: "We use a cutting-edge tech stack for our automations, including:\n- **Python** (for core logic & AI)\n- **n8n** (for complex workflows)\n- **LangChain** (for LLM orchestration)\n- **RAG** (Retrieval-Augmented Generation for chatbots)",
        ta: "நாங்கள் சிறந்த தொழில்நுட்பங்களைப் பயன்படுத்துகிறோம்: Python, n8n, LangChain மற்றும் RAG."
    },
    vision: {
        en: "Our Vision is to be the world's most trusted AI automation partner, enabling every business to harness the power of AI for unprecedented growth.",
        ta: "எங்கள் நோக்கம் உலகின் மிக நம்பகமான AI தானியக்க பங்காளராக இருப்பதாகும்."
    },
    mission: {
        en: "Our Mission is to deliver transformative AI solutions that eliminate repetitive tasks, optimize workflows, and empower businesses to focus on innovation.",
        ta: "எங்கள் லட்சியம் வணிகங்களின் வேலைப்பளுவை குறைத்து, அவர்களை தனித்துவமான வளர்ச்சியை நோக்கி வழிநடத்துவதாகும்."
    },
    founder: {
        en: "**Mohamed Riyaz** is our Founder. He is a Technical Architect with **13+ years** of experience. He's worked with global brands like **P&G** and **Reckitt Benckier** and started Sirah Digital to help business owners reduce stress through practical AI.",
        ta: "**Mohamed Riyaz** எமது நிறுவனர். இவர் 13+ வருட தொழில்நுட்ப அனுபவம் கொண்டவர். P&G போன்ற உலகளாவிய நிறுவனங்களில் பணியாற்றியவர்."
    },
    inPerson: {
        en: `The location details for visiting us are:\n\n**Email us:** ${companyInfo.contact.email}\n\n**Call us:** ${companyInfo.contact.phone}\n\n**Location:**\n${companyInfo.contact.address.en}`,
        ta: `**மின்னஞ்சல்:** ${companyInfo.contact.email}\n\n**அழைக்க:** ${companyInfo.contact.phone}\n**இடம்:**\n${companyInfo.contact.address.ta}`
    },
    about: {
        en: "Sirah Digital is an agency that helps businesses grow with AI Automations, Chatbots, and CRM solutions. We streamline your operations so you can focus on what matters most.",
        ta: "**Sirah Digital** வணிகங்களுக்கு AI தானியக்கம், சாட்பாட்கள் மற்றும் CRM தீர்வுகள் மூலம் வளர உதவுகிறது. நாங்கள் உங்கள் செயல்பாடுகளை எளிதாக்குகிறோம்."
    },
    pricing: {
        en: "The pricing for our services is tailored to your needs. Basic Bots start from **$500**, Automation Workflows from **$300**, and Full Systems from **$1500**. Contact for a quote!",
        ta: "எங்கள் விலை உங்கள் வணிகத் தேவைகளைப் பொறுத்து மாறுபடும். விரிவான விவரங்களுக்கு தயவுசெய்து ஒரு ஆலோசனையை முன்பதிவு செய்யவும்."
    },
    process: {
        en: "Our proven 5-step process ensures results:\n1. **Discovery & Analysis**: Identifying automation opportunities.\n2. **Strategy & Design**: Custom blueprint tailored to your needs.\n3. **Development & Integration**: Building with existing tools.\n4. **Testing & Deployment**: Rigorous testing before live launch.\n5. **Optimization & Scale**: Continuous monitoring and growth.",
        ta: "**எங்கள் செயல்முறை:**\n1. ஆய்வு, 2. திட்டம், 3. உருவாக்கம், 4. சோதனை, 5. மேம்பாடு."
    },
    funFact: {
        en: [
            "Did you know? The first AI chatbot, ELIZA, was created way back in 1966!",
            "Fun Fact: Automation can reduce operational costs for a business by up to 30%.",
            "Interesting Fact: AI can process data thousands of times faster than any human brain.",
            "Did you know? Over 80% of routine customer service queries can now be handled entirely by AI.",
            "Fun Fact: AI never sleeps—it can manage your business workflows 24/7 without a single coffee break!",
            "Quick Fact: Most people interact with some form of AI at least 10 times a day without even realizing it."
        ],
        ta: [
            "உங்களுக்கு தெரியுமா? முதல் AI சாட்பாட் 'ELIZA' 1966-லேயே உருவாக்கப்பட்டது!",
            "உண்மை: தானியக்கம் ஒரு வணிகத்தின் செயல்பாட்டு செலவுகளை 30% வரை குறைக்கலாம்.",
            "AI ஒருபோதும் உறங்குவதில்லை - இது உங்கள் வணிகத்தை 24/7 கவனித்துக்கொள்ளும்!"
        ]
    }
};

// --- MEMORY SYSTEM ---

export type IntentId =
    | 'greeting'
    | 'booking'
    | 'services'
    | 'pricing'
    | 'about'
    | 'contact'
    | 'testimonials'
    | 'team'
    | 'process'
    | 'benefits'
    | 'industries'
    | 'problems'
    | 'fallback'
    | 'thanks'
    | 'bye'
    | 'casual'
    | 'fun_fact'
    | 'name_capture'
    | 'my_name_query'
    | 'bot_identity'
    | 'achievements'
    | 'tech_stack'
    | 'vision_mission'
    | 'founder'
    | 'solutions';

export interface ChatMemory {
    userName?: string;
    lastIntent?: IntentId;
    lastServiceId?: string;
    interactionCount: number;
}

export const initialMemory: ChatMemory = {
    interactionCount: 0
};

interface Intent {
    id: IntentId;
    keywords: string[];
    regex?: RegExp;
    responses: { [key in Language]: string | ((input: string, memory: ChatMemory) => string) };
}

const intents: Intent[] = [
    {
        id: 'name_capture',
        keywords: ['name is', 'call me', 'am ', 'இன் பெயர்'],
        // Refined to NOT trigger on "what is my name" (which starts with 'what')
        regex: /^(?:my name is|i am|call me|i'm|im)\s+([a-zA-Z]{2,20})/i,
        responses: {
            en: (input, memory) => `The pleasure is mine, **${memory.userName}**! How can I assist you with your business goals today?`,
            ta: (input, memory) => `உங்களை சந்தித்ததில் மகிழ்ச்சி, **${memory.userName}**! இன்று நான் உங்களுக்கு எவ்வாறு உதவ முடியும்?`
        }
    },
    {
        id: 'my_name_query',
        keywords: ['what is my name', 'who am i', 'my name', 'எனது பெயர்'],
        regex: /\b(what is|know|tell)\b.*\bmy name\b/i,
        responses: {
            en: (input, memory) => memory.userName
                ? `Your name is **${memory.userName}**! I'm glad to be assisting you.`
                : "I don't know your name yet! What should I call you?",
            ta: (input, memory) => memory.userName
                ? `உங்கள் பெயர் **${memory.userName}**!`
                : "உங்கள் பெயர் எனக்கு இன்னும் தெரியாது!"
        }
    },
    {
        id: 'bot_identity',
        keywords: ['your name', 'who are you', 'what are you', 'உன் பெயர்'],
        regex: /\b(your name|who are you|what is your name)\b/i,
        responses: {
            en: staticResponses.botName.en,
            ta: staticResponses.botName.ta
        }
    },
    {
        id: 'booking',
        keywords: ['book', 'appointment', 'consultation', 'schedule', 'demo', 'call', 'meeting', 'பதிவு', 'ஆலோசனை'],
        regex: /\b(book|schedule|meet)\b/i,
        responses: {
            en: (input, memory) => `${memory.userName ? `Sure **${memory.userName}**, the` : 'The'} steps to book an appointment are:\n- Fill your details\n- Book calendar\n- Appointment booking\n- **Click through this link for booking:**\n${companyInfo.contact.bookingLink}`,
            ta: `**முன்பதிவு செய்ய:**\n- உங்கள் விவரங்களை நிரப்பவும்\n- நேரத்தை தேர்வு செய்யவும்\n- **இங்கே கிளிக் செய்யவும்:**\n${companyInfo.contact.bookingLink}`
        }
    },
    {
        id: 'greeting',
        keywords: ['hi', 'hello', 'hey', 'greetings', 'morning', 'evening', 'vanakkam', 'வணக்கம்'],
        responses: {
            en: (input, memory) => memory.userName ? `Hello again, **${memory.userName}**! How can I help you improve your business today?` : staticResponses.intro.en,
            ta: staticResponses.intro.ta
        }
    },
    {
        id: 'thanks',
        keywords: ['thank', 'thanks', 'thx', 'appreciate', 'cool', 'great', 'awesome', 'நன்றி'],
        responses: {
            en: (input, memory) => memory.userName ? `You're very welcome, **${memory.userName}**! Let me know if you need anything else.` : staticResponses.thanks.en,
            ta: staticResponses.thanks.ta
        }
    },
    {
        id: 'bye',
        keywords: ['bye', 'goodbye', 'see you', 'later', 'cya', 'வருகிறேன்'],
        responses: {
            en: (input, memory) => memory.userName ? `Goodbye, **${memory.userName}**! Looking forward to hearing from you soon.` : staticResponses.bye.en,
            ta: staticResponses.bye.ta
        }
    },
    {
        id: 'casual',
        keywords: ['how are you', 'how r u', 'doing', 'whats up', 'nalama', 'நலமா', 'today', 'todays'],
        regex: /how are you/i,
        responses: staticResponses.casual
    },
    {
        id: 'pricing',
        keywords: ['price', 'cost', 'how much', 'quote', 'money', 'fees', 'rate', 'expensive', 'cheap', 'budget', 'billing', 'bill', 'payment', 'rates', 'விலை', 'கட்டணம்'],
        regex: /\b(cost|price|pay|rates)\b/i,
        responses: {
            en: (input, memory) => {
                const baseResponse = staticResponses.pricing.en;
                if (memory.lastServiceId) {
                    const service = services.find(s => s.id === memory.lastServiceId);
                    return `The pricing for **${service?.title.en}** and our other services is tailored to your needs. ` + baseResponse;
                }
                return baseResponse;
            },
            ta: staticResponses.pricing.ta
        }
    },
    {
        id: 'contact',
        keywords: ['contact', 'email', 'phone', 'call', 'reach', 'number', 'address', 'location', 'where', 'visit', 'office', 'support', 'help', 'தொடர்பு', 'அழைக்க'],
        regex: /\b(contact details|contact info|contact us|get in touch|reach you|phone number|email address)\b/i,
        responses: staticResponses.contact
    },
    {
        id: 'services',
        keywords: ['service', 'services', 'provide', 'do', 'product', 'solution', 'automation', 'chatbot', 'crm', 'workflow', 'சேவைகள்'],
        regex: /\b(what services|our services|services do you|list services|services offer)\b/i,
        responses: {
            en: (input) => {
                const matchedService = services.find(s =>
                    s.keywords['en'].some(k => input.toLowerCase().includes(k)) ||
                    s.title['en'].toLowerCase().includes(input.toLowerCase())
                );

                if (matchedService) {
                    return `The service we provide for **${matchedService.title['en']}** is:\n${matchedService.description['en']}`;
                }

                const list = services.map(s => `- **${s.title['en']}**`).join("\n");
                return `The services we provide are:\n\n${list}`;
            },
            ta: (input) => {
                const list = services.map(s => `- **${s.title['ta']}**`).join("\n");
                return `Sirah Digital வழங்கும் சேவைகள்:\n\n${list}`;
            }
        }
    },
    {
        id: 'solutions',
        keywords: ['solution', 'solutions', 'products', 'offerings', 'offer', 'what do you provide', 'package', 'தீர்வுகள்'],
        regex: /\b(what solution|solutions?|products?|offerings?|what do you provide|our solutions|what .* offer|what you offer)\b/i,
        responses: {
            en: `Here are the AI Solutions Sirah Digital provides:\n\n${solutionsList.map(s => `- **${s.title}**\n  _${s.desc}_`).join("\n")}`,
            ta: `Sirah Digital வழங்கும் AI தீர்வுகள்:\n\n${solutionsList.map(s => `- **${s.title}**\n  _${s.desc}_`).join("\n")}`
        }
    },
    {
        id: 'achievements',
        keywords: ['achievements', 'results', 'stats', 'numbers', 'track record', 'accomplishments', 'success'],
        responses: {
            en: staticResponses.stats.en,
            ta: staticResponses.stats.ta
        }
    },
    {
        id: 'tech_stack',
        keywords: ['tech', 'technology', 'tools', 'stack', 'python', 'n8n', 'software', 'langchain', 'rag'],
        responses: {
            en: staticResponses.techStack.en,
            ta: staticResponses.techStack.ta
        }
    },
    {
        id: 'vision_mission',
        keywords: ['vision', 'mission', 'goal', 'why', 'purpose', 'future'],
        responses: {
            en: (input) => input.toLowerCase().includes('mission') ? staticResponses.mission.en : staticResponses.vision.en,
            ta: staticResponses.vision.ta
        }
    },
    {
        id: 'about',
        keywords: ['company', 'agency', 'sirah', 'story', 'history', 'பற்றி'],
        regex: /\b(what is sirah|about sirah|company story|who are you)\b/i,
        responses: {
            en: "The information about Sirah Digital is:\n" + staticResponses.about.en,
            ta: staticResponses.about.ta
        }
    },
    {
        id: 'process',
        keywords: ['how', 'work', 'process', 'steps', 'timeline', 'long', 'duration', 'start', 'implement', 'செயல்முறை'],
        regex: /\b(how it works|process|how do you do it)\b/i,
        responses: staticResponses.process
    },
    {
        id: 'benefits',
        keywords: ['benefit', 'why ai', 'advantage', 'use', 'good', 'profit', 'value', 'roi', 'நன்மைகள்', 'useful'],
        regex: /\b(how is .* useful|why ai|benefits of ai|is ai .* useful)\b/i,
        responses: {
            en: "AI automation saves time by handling repetitive tasks quickly and accurately.\nIt reduces costs and errors while improving consistency at scale.\nIt frees people to focus on creative, strategic, and human-centered work.",
            ta: "AI மீண்டும் மீண்டும் செய்யும் பணிகளை விரைவாகவும் துல்லியமாகவும் கையாண்டு நேரத்தை மிச்சப்படுத்துகிறது.\nஇது செலவுகளையும் பிழைகளையும் குறைக்கும் அதே வேளையில் நிலைத்தன்மையை மேம்படுத்துகிறது.\nஇது மக்களை ஆக்கப்பூர்வமான மற்றும் முக்கியமான வேலைகளில் கவனம் செலுத்த அனுமதிக்கிறது."
        }
    },
    {
        id: 'industries',
        keywords: ['industry', 'sector', 'field', 'niche', 'domain', 'market', 'who for', 'target', 'business type', 'துறைகள்', 'practice'],
        responses: {
            en: (input) => {
                const lowerInput = input.toLowerCase();
                const matchedKey = Object.keys(industryDetails).find(k => lowerInput.includes(k.toLowerCase()));

                if (matchedKey) {
                    return industryDetails[matchedKey].en;
                }

                const list = industries.slice(0, 6).map(i => `- ${i}`).join("\n");
                return `We specialize in many industries including:\n${list}\n\nDo you have a specific business type in mind?`;
            },
            ta: (input) => {
                const lowerInput = input.toLowerCase();
                const matchedKey = Object.keys(industryDetails).find(k => lowerInput.includes(k.toLowerCase()));

                if (matchedKey) {
                    return industryDetails[matchedKey].ta;
                }
                const list = industries.slice(0, 6).map(i => `- ${i}`).join("\n");
                return `நாங்கள் இந்தத் துறைகளில் கவனம் செலுத்துகிறோம்:\n${list}`;
            }
        }
    },
    {
        id: 'team',
        keywords: [
            'team', 'ceo', 'staff', 'employee', 'expert', 'engineer', 'developer', 'who runs', 'brains', 'consultants', 'people', 'members', 'founder', 'குழு',
            'riyaz', 'jesheeba', 'monisha', 'eshwanth', 'samad', 'aakash'
        ],
        regex: /\b(team|founder|riyaz|founder of sirah|who started)\b/i,
        responses: {
            en: (input) => {
                const lowerInput = input.toLowerCase();

                // Specific Founder check first
                if (lowerInput.includes('founder') || lowerInput.includes('riyaz')) {
                    return staticResponses.founder.en;
                }

                const matchedMember = teamMembers.find(t =>
                    lowerInput.includes(t.name.toLowerCase()) ||
                    lowerInput.includes(t.name.split(' ')[0].toLowerCase()) ||
                    lowerInput.includes(t.name.split(' ').pop()?.toLowerCase() || '')
                );

                if (matchedMember) {
                    return `The details about **${matchedMember.name}** are:\n*${matchedMember.designation}*\n${matchedMember.description}`;
                }

                return `The team members at Sirah Digital are:\n${teamMembers.map(t => `- **${t.name}**: ${t.designation}`).join("\n")}`;
            },
            ta: (input) => {
                const lowerInput = input.toLowerCase();
                if (lowerInput.includes('founder') || lowerInput.includes('riyaz')) {
                    return staticResponses.founder.ta;
                }
                const matchedMember = teamMembers.find(t =>
                    lowerInput.includes(t.name.toLowerCase()) ||
                    lowerInput.includes(t.name.split(' ')[0].toLowerCase())
                );

                if (matchedMember) {
                    return `**${matchedMember.name}**\n*${matchedMember.designation}*\n${matchedMember.description}`;
                }

                return `Sirah Digital-ன் திறமையான குழு:\n${teamMembers.map(t => `- **${t.name}**: ${t.designation}`).join("\n")}`;
            }
        }
    },
    {
        id: 'testimonials',
        keywords: ['testimonial', 'review', 'feedback', 'client', 'customer', 'say', 'proof', 'case study', 'results', 'கருத்துக்கள்'],
        responses: {
            en: `The testimonials from our clients are:\n${testimonials.map(t => `- ${t}`).join("\n")}`,
            ta: `எங்கள் வாடிக்கையாளர்கள் சொல்வது:\n${testimonials.map(t => `- ${t}`).join("\n")}`
        }
    },
    {
        id: 'problems',
        keywords: ['problem', 'issue', 'solve', 'fix', 'challenge', 'pain', 'struggle', 'difficult', 'பிரச்சனைகள்'],
        responses: {
            en: `The problems we solve for businesses are:\n${problemsSolved.map(p => `- ${p}`).join("\n")}`,
            ta: `நாங்கள் தீர்க்கும் பிரச்சனைகள்:\n${problemsSolved.map(p => `- ${p}`).join("\n")}`
        }
    },
    {
        id: 'fun_fact',
        keywords: ['fun fact', 'fact', 'tell me something', 'surprise', 'interesting', 'உண்மை'],
        responses: {
            en: () => {
                const facts = staticResponses.funFact.en;
                return "The fun fact is: " + facts[Math.floor(Math.random() * facts.length)];
            },
            ta: () => {
                const facts = staticResponses.funFact.ta;
                return facts[Math.floor(Math.random() * facts.length)];
            }
        }
    },
    {
        id: 'fallback',
        keywords: ['help', 'what can you do', 'capabilities', 'features', 'assist', 'how can you help'],
        responses: {
            en: "I am Sirah's AI assistant. I can help you with:\n\n" +
                "- **Our Services**: Chatbots, CRM, and Workflow Automation\n" +
                "- **Industries**: We serve healthcare, agencies, and more\n" +
                "- **Process**: Our 5-step approach to implementation\n" +
                "- **About Us**: Meet our founder Mohamed Riyaz and the team\n" +
                "- **Booking**: Schedule a free consultation call\n\n" +
                "What would you like to know more about?",
            ta: staticResponses.fallback.ta
        }
    }
];

// Helper to calculate score
const calculateScore = (input: string, intent: Intent): number => {
    let score = 0;
    const lowerInput = input.toLowerCase();

    // 1. Regex Exact Match (Critical Priority)
    if (intent.regex && intent.regex.test(lowerInput)) {
        score += 200;
    }

    // 2. Keyword Matches
    intent.keywords.forEach(keyword => {
        const kw = keyword.toLowerCase();

        // Check if keyword contains non-ASCII characters (like Tamil)
        const isNonAscii = /[^\x00-\x7F]/.test(kw);

        let borderRegex: RegExp;
        if (isNonAscii) {
            // For Tamil/non-ASCII, use a simpler boundary check as \b only works for [a-zA-Z0-9_]
            borderRegex = new RegExp(`${kw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`, 'i');
        } else {
            borderRegex = new RegExp(`\\b${kw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i');
        }

        if (borderRegex.test(lowerInput)) {
            // Base keyword score
            score += 10 + (kw.length * 0.5);

            // Exact word match bonus
            score += 20;

            // Entity Bonus (Team Members)
            if (['riyaz', 'jesheeba', 'monisha', 'eshwanth', 'samad', 'aakash'].includes(kw)) {
                score += 150;
            }
        }
    });

    return score;
};

export const getBotResponse = (
    input: string,
    lang: Language,
    memory: ChatMemory = initialMemory
): { text: string, newMemory: ChatMemory } => {
    const lowerInput = input.toLowerCase();
    let bestIntent: Intent | null = null;
    let highestScore = 0;
    let newMemory = { ...memory, interactionCount: memory.interactionCount + 1 };

    // 1. Entity Extraction: Name Capture (High Priority)
    const nameCaptureIntent = intents.find(i => i.id === 'name_capture');
    if (nameCaptureIntent && nameCaptureIntent.regex) {
        const nameMatch = nameCaptureIntent.regex.exec(input);
        if (nameMatch && nameMatch[1]) {
            newMemory.userName = nameMatch[1].trim();
            bestIntent = nameCaptureIntent;
            highestScore = 300;
        }
    }

    // 2. Entity Extraction: Service Tracking
    const matchedService = services.find(s =>
        s.keywords['en'].some(k => lowerInput.includes(k.toLowerCase())) ||
        s.title['en'].toLowerCase().includes(lowerInput)
    );
    if (matchedService) {
        newMemory.lastServiceId = matchedService.id;
    }

    // 3. Pronoun Detection
    const pronouns = ['it', 'them', 'that', 'they', 'cost', 'more', 'details'];
    const isPronounQuery = pronouns.some(p => lowerInput.split(/\s+/).includes(p));

    // 4. Intent Scoring
    if (!bestIntent) {
        intents.forEach(intent => {
            let score = calculateScore(input, intent);

            // --- CONTEXT LOGIC (The Fix) ---
            // Only apply context bonus if there's SOME keyword match or it's a pronoun query
            if (memory.lastIntent === intent.id) {
                if (score > 0) {
                    score += 30; // Stronger bonus for confirmed relevance
                } else if (isPronounQuery) {
                    score += 50; // Use context for "it", "that", etc.
                }
            }

            if (score > highestScore) {
                highestScore = score;
                bestIntent = intent;
            }
        });
    }

    // 5. Handling Fallback
    if (highestScore < 15) {
        const fallbackText = newMemory.userName
            ? `I'm not exactly sure about that, **${newMemory.userName}**. But I can help with:\n\n- **Services & Pricing**\n- **Our Team**\n- **Booking a Call**`
            : staticResponses.fallback[lang];

        return { text: fallbackText, newMemory: { ...newMemory, lastIntent: undefined } };
    }

    // 6. Generate Response
    if (bestIntent) {
        newMemory.lastIntent = bestIntent.id;
        let response = bestIntent.responses[lang];
        if (typeof response === 'function') {
            response = response(input, newMemory);
        }
        return { text: response, newMemory };
    }

    return { text: staticResponses.fallback[lang], newMemory: { ...newMemory, lastIntent: undefined } };
};
