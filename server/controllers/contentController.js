// @desc    Get website content
// @route   GET /api/content
// @access  Public
export const getContent = async (req, res) => {
    // This is a mockup. Ideally, you would fetch this from a Content model in MongoDB.
    const content = {
        hero: {
            title: "Automate Your Business with AI",
            subtitle: "Scale Faster. Work Smarter.",
        },
        services: [
            { title: "AI Consulting", description: "Strategic implementation of AI." },
            { title: "Process Automation", description: "Streamline your workflows." },
        ],
        contactInfo: {
            email: "support@sirahdigital.in",
            phone: "+91 12345 67890"
        }
    };

    res.json(content);
};
