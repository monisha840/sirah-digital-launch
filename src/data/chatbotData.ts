
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
            en: "8th Floor, Innovate, Featherlite – The Address, - Pallavaram, Chennai – 600044",
            ta: "8வது தளம், இன்னோவேட், ஃபெதர்லைட் – தி அட்ரஸ், சென்னை – 600044"
        },
        bookingLink: "https://tidycal.com/1r8o7ez/sirah-digital",
    }
};

export const services = [
    {
        title: { en: "AI Business Automation", ta: "AI வணிக தானியக்கம்" },
        keywords: { en: ["business automation"], ta: ["வணிக தானியக்கம்"] },
        description: { en: "We automate repetitive tasks like data entry and complex workflows.", ta: "" }
    },
    {
        title: { en: "AI Chatbot Development", ta: "AI சாட்பாட் உருவாக்கம்" },
        keywords: { en: ["chatbot"], ta: ["சாட்பாட்"] },
        description: { en: "Intelligent AI chatbots that answer FAQs and book appointments.", ta: "" }
    },
    {
        title: { en: "AI CRM Integration", ta: "AI CRM ஒருங்கிணைப்பு" },
        keywords: { en: ["crm"], ta: ["CRM"] },
        description: { en: "Seamless integration of AI with your CRM.", ta: "" }
    },
    {
        title: { en: "Workflow Automation", ta: "குழுப்பணி தானியக்கம்" },
        keywords: { en: ["workflow"], ta: ["வேலைப்பளு"] },
        description: { en: "Optimizing business processes by connecting apps.", ta: "" }
    }
];

export const industries = [
    "Dermatologists", "IVF & Fertility Clinics", "Dental Practices", "Ayurveda & Homeopathy",
    "Psychology & Mental Health", "Urologist", "Gynecology & Women's Health",
    "Radiology & Diagnostics", "Nutrition & Wellness", "Pharmacy", "Marketing Agencies", "Professional Services"
];

export const whyUsReasons = [
    "Business-First AI Strategy", "Custom-Built Automations", "Scalable & Future-Ready",
    "ROI-Focused Implementation", "End-to-End Support", "Rapid Implementation"
];

export const teamMembers = [
    {
        name: "MOHAMMAD RIYAZ",
        designation: "Founder – SIRAH DIGITAL",
        description: "Visionary leader driving AI-powered digital growth and automation-focused business solutions."
    },
    {
        name: "M. JESHEEBA FATHIMA",
        designation: "Digital Growth Consultant",
        description: "Driving strategic digital transformation and growth initiatives for businesses."
    },
    {
        name: "SS. MONISHA",
        designation: "Digital Growth Consultant",
        description: "Specializing in data-driven growth strategies and digital marketing solutions."
    },
    {
        name: "B. ESHWANTH",
        designation: "Brand Growth Consultant",
        description: "Building powerful brand identities and comprehensive growth frameworks."
    },
    {
        name: "ABDUL SAMAD",
        designation: "AI Automation Engineer",
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

export const aiBenefits = {
    en: [
        "24/7 availability",
        "Instant responses",
        "Reduced support costs",
        "Improved customer satisfaction",
        "Scales easily with business growth"
    ],
    ta: [
        "24/7 சேவை கிடைக்கும்",
        "உடனடி பதில்கள்",
        "குறைந்த செலவு",
        "மேம்பட்ட வாடிக்கையாளர் திருப்தி",
        "எளிதான வளர்ச்சி"
    ]
};

export const aiChatbotDef = {
    en: "- AI chatbots are used to automate conversations, support users, and improve efficiency across many fields.",
    ta: "AI சாட்பாட்கள் உரையாடல்களை தானியக்கமாக்கவும், பயனர்களுக்கு உதவவும், பல்வேறு துறைகளில் செயல்திறனை மேம்படுத்தவும் பயன்படுத்தப்படுகின்றன."
};

export const staticResponses = {
    intro: {
        en: "Hello! I'm Sirah's AI assistant. How can I help you improve your business today?",
        ta: "வணக்கம்! நான் Sirah-வின் AI உதவியாளர். உங்கள் வணிகத்தை மேம்படுத்த நான் எவ்வாறு உதவ முடியும்?"
    },
    fallback: {
        en: "That's a great question. While I'm an AI, I suggest booking a quick call so our team can provide the specific details you need.",
        ta: "இது ஒரு நல்ல கேள்வி. நான் AI என்பதால், எங்கள் குழுவிடம் நேரடியாக பேச ஒரு அழைப்பை பதிவு செய்ய பரிந்துரைக்கிறேன்."
    },
    contact: {
        en: `You can reach us directly:\n**Call:** ${companyInfo.contact.phone}\n**Email:** ${companyInfo.contact.email}\n**Address:** ${companyInfo.contact.address.en}`,
        ta: `எங்களை நேரடியாக தொடர்பு கொள்ளலாம்:\n**அழைக்க:** ${companyInfo.contact.phone}\n**மின்னஞ்சல்:** ${companyInfo.contact.email}\n**முகவரி:** ${companyInfo.contact.address.ta}`
    },
    inPerson: {
        en: `**Email us:** ${companyInfo.contact.email}\n\n**Call us:** ${companyInfo.contact.phone}\n\n**Location:**\n${companyInfo.contact.address.en}`,
        ta: `**மின்னஞ்சல்:** ${companyInfo.contact.email}\n\n**அழைக்க:** ${companyInfo.contact.phone}\n\n**இடம்:**\n${companyInfo.contact.address.ta}`
    },
    about: {
        en: "**Sirah Digital** helps businesses grow with AI Automations, Chatbots, and CRM solutions. We streamline your operations so you can focus on what matters most.",
        ta: "**Sirah Digital** வணிகங்களுக்கு AI தானியக்கம், சாட்பாட்கள் மற்றும் CRM தீர்வுகள் மூலம் வளர உதவுகிறது. நாங்கள் உங்கள் செயல்பாடுகளை எளிதாக்குகிறோம்."
    },
    pricing: {
        en: "Our pricing is customized based on your specific business needs and the scope of automation required. Please book a consultation for a detailed quote.",
        ta: "எங்கள் விலை உங்கள் வணிகத் தேவைகளைப் பொறுத்து மாறுபடும். விரிவான விவரங்களுக்கு தயவுசெய்து ஒரு ஆலோசனையை முன்பதிவு செய்யவும்."
    },
    process: {
        en: "**How it works:**\n1. **Consultation**: We analyze your needs.\n2. **Strategy**: We design a custom plan.\n3. **Development**: We build your automation.\n4. **Launch**: We deploy and monitor.",
        ta: "**எப்படி வேலை செய்கிறது:**\n1. **ஆலோசனை**: நாங்கள் உங்கள் தேவைகளை ஆராய்கிறோம்.\n2. **திட்டம்**: தனிப்பயன் திட்டத்தை வடிவமைக்கிறோம்.\n3. **உருவாக்கம்**: உங்கள் தானியக்கத்தை உருவாக்குகிறோம்.\n4. **துவக்கம்**: நாங்கள் செயல்படுத்தி கண்காணிக்கிறோம்."
    }
};


export const getBotResponse = (input: string, lang: Language): string => {
    const lowerInput = input.toLowerCase();

    // 1. Booking
    if (lowerInput.match(/\b(book|appointment|consultation|schedule|பதிவு|ஆலோசனை)\b/)) {
        return `**Steps to book:**\n- Fill your details\n- Book calendar\n- Appointment booking\n- **Click through this link for booking:**\n${companyInfo.contact.bookingLink}`;
    }

    // 2. Greetings
    if (lowerInput.match(/\b(hi|hello|hey|greetings|start|vanakkam|வணக்கம்)\b/)) {
        return staticResponses.intro[lang];
    }

    // PRIORITY: Dynamic Service Matching (Specific Details)
    const matchedService = services.find(s =>
        s.keywords[lang].some(k => lowerInput.includes(k.toLowerCase())) ||
        s.title[lang].toLowerCase().includes(lowerInput)
    );
    if (matchedService) {
        return `**${matchedService.title[lang]}**\n${matchedService.description[lang]}`;
    }

    // PRIORITY: Dynamic Industry Matching (Specific Details)
    const matchedIndustry = industries.find(i => lowerInput.includes(i.toLowerCase()));
    if (matchedIndustry) {
        return lang === 'en'
            ? `Yes, we specialize in **${matchedIndustry}**. We have tailored automation solutions for this sector.`
            : `ஆம், நாங்கள் **${matchedIndustry}** துறையில் நிபுணத்துவம் பெற்றுள்ளோம். எங்களிடம் இதற்கான சிறப்பு தானியக்க தீர்வுகள் உள்ளன.`;
    }

    // 3. Services List
    if (lowerInput.match(/\b(services|offer|provide|what do you do|சேவைகள்)\b/)) {
        const serviceList = services.map(s => `- **${s.title[lang]}**`).join("\n");
        return lang === 'en'
            ? `Here are the services offered by Sirah Digital:\n\n${serviceList}`
            : `Sirah Digital வழங்கும் சேவைகள்:\n\n${serviceList}`;
    }

    // 4. AI Benefits
    if (lowerInput.match(/\b(useful|benefit|advantage|why ai|use of ai|நன்மைகள்)\b/)) {
        const benefits = aiBenefits[lang].map(b => `- ${b}`).join("\n");
        return lang === 'en'
            ? `AI Automations:\n\n${benefits}`
            : `AI தானியக்கத்தின் நன்மைகள்:\n\n${benefits}`;
    }

    // 5. AI Chatbot Definition
    if (lowerInput.match(/\b(what is ai chatbot|chatbot mean|சாட்பாட் என்றால் என்ன)\b/)) {
        return aiChatbotDef[lang];
    }

    // 6. Contact / Direct Reach
    if (lowerInput.match(/\b(reach|contact|email|phone|direct|call|number|talk|speak|support|தொடர்பு|நேரடி|அழைக்க)\b/) && !lowerInput.match(/\b(book|appointment|schedule|person|visit)\b/)) {
        return staticResponses.contact[lang];
    }

    // 7. In Person / Location
    if (lowerInput.match(/\b(person|visit|location|where|address|city|based|office|முகவரி|இடம்)\b/)) {
        return staticResponses.inPerson[lang];
    }

    // 12. Team / Brains (MOVED UP for Priority)
    if (lowerInput.match(/\b(team|brains|founder|people|staff|consultants|engineers|developer|expert|employee|குழு|உறுப்பினர்கள்)\b/)) {
        const teamList = teamMembers.map(t => `- ${t.name}`).join("\n");
        return lang === 'en'
            ? `Meet the brains behind Sirah Digital:\n${teamList}`
            : `Sirah Digital-ன் திறமையான குழு:\n${teamList}`;
    }

    // 8. About Us
    if (lowerInput.match(/\b(who are you|about|company|agency|sirah|story|mission|vision|பற்றி|நிறுவனம்)\b/)) {
        return staticResponses.about[lang];
    }

    // 9. Pricing / Cost
    if (lowerInput.match(/\b(price|cost|how much|quote|charge|fees|expensive|cheap|budget|rates|bill|விலை|கட்டணம்)\b/)) {
        return staticResponses.pricing[lang];
    }

    // 10. Process / How it works / Time
    if (lowerInput.match(/\b(process|how|work|steps|time|long|duration|timeline|delivery|weeks|days|செயல்முறை|எப்படி)\b/) && !lowerInput.match(/\b(book|contact)\b/)) {
        return staticResponses.process[lang];
    }

    // 11. Industries
    if (lowerInput.match(/\b(industries|sectors|domains|niche|which field|verticals|market|business type|துறைகள்)\b/)) {
        const industryList = industries.map(i => `- ${i}`).join("\n");
        return lang === 'en'
            ? `We specialize in AI automation for these industries:\n${industryList}`
            : `நாங்கள் இந்தத் துறைகளில் கவனம் செலுத்துகிறோம்:\n${industryList}`;
    }



    // 13. Why Us
    if (lowerInput.match(/\b(why|choose|special|different|unique|better|competitor|advantage|ஏன்|சிறப்பு)\b/) && !lowerInput.match(/\b(ai|automation)\b/)) {
        // Exclude generic 'why ai' queries which are handled by aiBenefits
        const reasonsList = whyUsReasons.map(r => `- ${r}`).join("\n");
        return lang === 'en'
            ? `Why choose Sirah Digital?\n${reasonsList}`
            : `Sirah Digital-ஐ ஏன் தேர்ந்தெடுக்க வேண்டும்?\n${reasonsList}`;
    }

    // 14. Testimonials / Reviews
    if (lowerInput.match(/\b(reviews|testimonials|feedback|clients|results|customers|success stories|case study|proof|trust|கருத்துக்கள்)\b/)) {
        const reviewList = testimonials.map(t => `- ${t}`).join("\n");
        return lang === 'en'
            ? `Here is what our clients say:\n${reviewList}`
            : `எங்கள் வாடிக்கையாளர்கள் சொல்வது:\n${reviewList}`;
    }

    // 15. Problems Solved
    if (lowerInput.match(/\b(problems|issues|solve|fix|chaos|challenges|pain points|struggle|hard|difficult|பிரச்சனைகள்)\b/)) {
        const problemList = problemsSolved.map(p => `- ${p}`).join("\n");
        return lang === 'en'
            ? `We solve these common business problems:\n${problemList}`
            : `நாங்கள் தீர்க்கும் பிரச்சனைகள்:\n${problemList}`;
    }

    // 16. Help / Capabilities (What can you answer?)
    if (lowerInput.match(/\b(help|capabilities|what can you do|topics|menu|guide|assist|support|question|ask|உதவி)\b/)) {
        return lang === 'en'
            ? `**I can answer questions about:**\n- **Services:** Automation, Chatbots, CRM\n- **Industries:** Healthcare, Retail, etc.\n- **Process & Pricing**\n- **Team & Testimonials**\n- **Problems we solve**\n- **Booking appointments**`
            : `**என்னால் இவற்றுக்கு பதிலளிக்க முடியும்:**\n- **சேவைகள்:** தானியக்கம், சாட்பாட், CRM\n- **துறைகள்:** மருத்துவம், வர்த்தகம்\n- **செயல்முறை & விலை**\n- **குழு & கருத்துக்கள்**\n- **நாங்கள் தீர்க்கும் பிரச்சனைகள்**\n- **முன்பதிவு**`;
    }

    // Default Fallback
    return staticResponses.fallback[lang];
};
