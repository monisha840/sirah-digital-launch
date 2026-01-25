const Lead = require('../models/Lead');
const nodemailer = require('nodemailer');
const { validationResult } = require('express-validator');
const connectDB = require('../config/db');

// @desc    Create a new lead (submit contact form)
// @route   POST /api/leads
// @access  Public
const createLead = async (req, res) => {
    // Ensure DB is connected for serverless environments
    await connectDB();

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    let { firstName, lastName, email, phone, company, message } = req.body;

    // Format phone number
    if (phone) {
        let cleaned = phone.replace(/\D/g, '');
        phone = cleaned.length === 10 ? '91' + cleaned : cleaned;
    }

    try {
        // 1️⃣ SAVE TO DATABASE (ONLY awaited operation)
        const lead = await Lead.create({
            firstName,
            lastName,
            email,
            phone,
            company,
            message,
        });

        console.log('✅ Lead Created in DB:', lead._id);

        // 2️⃣ RESPOND TO FRONTEND IMMEDIATELY (CRITICAL FIX)
        res.status(201).json({
            success: true,
            message: 'Your message has been received!',
        });

        // 3️⃣ SEND EMAIL (NON-BLOCKING)
        if (process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD) {
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.GMAIL_USER,
                    pass: process.env.GMAIL_APP_PASSWORD,
                },
            });

            const mailOptions = {
                from: process.env.GMAIL_USER,
                to: process.env.RECIPIENT_EMAIL || 'support@sirahdigital.in',
                subject: 'New Contact Form Submission – Sirah Digital',
                html: `
                    <h3>New Lead Saved</h3>
                    <p><strong>Lead ID:</strong> ${lead._id}</p>
                    <hr>
                    <p><strong>Name:</strong> ${firstName} ${lastName}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Phone:</strong> ${phone}</p>
                    <p><strong>Company:</strong> ${company}</p>
                    <p><strong>Message:</strong> ${message}</p>
                `,
            };

            transporter.sendMail(mailOptions)
                .then(() => console.log('✅ Email sent'))
                .catch(err => console.error('❌ Email error:', err.message));
        }

        // 4️⃣ TRIGGER n8n (NON-BLOCKING)
        if (process.env.N8N_WEBHOOK_URL) {
            fetch(process.env.N8N_WEBHOOK_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    firstName,
                    lastName,
                    email,
                    phone,
                    company,
                    message,
                    leadId: lead._id,
                    submittedAt: lead.createdAt,
                }),
            })
                .then(() => console.log('✅ n8n triggered'))
                .catch(err => console.error('❌ n8n error:', err.message));
        }

    } catch (error) {
        console.error('❌ Server Error during Lead Creation:', error);
        if (!res.headersSent) {
            res.status(500).json({
                success: false,
                message: `Server Error: ${error.message}`
            });
        }
    }
};

// @desc    Get all leads
// @route   GET /api/leads
// @access  Private/Admin
const getLeads = async (req, res) => {
    try {
        const leads = await Lead.find().sort({ createdAt: -1 });
        res.json(leads);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// @desc    Update lead
// @route   PUT /api/leads/:id
// @access  Private/Admin
const updateLead = async (req, res) => {
    try {
        const lead = await Lead.findById(req.params.id);

        if (!lead) {
            return res.status(404).json({ message: 'Lead not found' });
        }

        Object.assign(lead, req.body);
        const updatedLead = await lead.save();
        res.json(updatedLead);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// @desc    Delete lead
// @route   DELETE /api/leads/:id
// @access  Private/Admin
const deleteLead = async (req, res) => {
    try {
        const lead = await Lead.findById(req.params.id);

        if (!lead) {
            return res.status(404).json({ message: 'Lead not found' });
        }

        await lead.deleteOne();
        res.json({ message: 'Lead removed' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = {
    createLead,
    getLeads,
    updateLead,
    deleteLead,
};
