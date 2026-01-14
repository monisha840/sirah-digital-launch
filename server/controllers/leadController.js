const Lead = require('../models/Lead');
const nodemailer = require('nodemailer');
const { validationResult } = require('express-validator');

// @desc    Create a new lead (submit contact form)
// @route   POST /api/leads
// @access  Public
const createLead = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    let { firstName, lastName, email, phone, company, message } = req.body;

    // Format phone: Append '91' if it's a 10-digit number
    if (phone) {
        // Remove all non-numeric characters
        let cleaned = phone.replace(/\D/g, '');
        if (cleaned.length === 10) {
            phone = '91' + cleaned;
        } else {
            phone = cleaned;
        }
    }

    try {
        // 1. Save to Database
        const lead = await Lead.create({
            firstName,
            lastName,
            email,
            phone,
            company,
            message,
        });

        // 2. Send Email (using existing logic)
        // Configure Nodemailer transporter with Gmail SMTP
        // NOTE: In production, it's better to move this transporter creation outside or use a service
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
                <h3>New Lead Saved to Database</h3>
                <p><strong>Lead ID:</strong> ${lead._id}</p>
                <hr>
                <p><strong>Name:</strong> ${firstName} ${lastName}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Company:</strong> ${company}</p>
                <p><strong>Message:</strong> ${message}</p>
            `,
        };

        // Don't block the response on email sending, or handle it gracefully
        // For now we will wait for it
        if (process.env.GMAIL_USER) {
            await transporter.sendMail(mailOptions);
            console.log('✅ Email notification sent');
        }

        // 3. n8n Automation (WhatsApp)
        if (process.env.N8N_WEBHOOK_URL) {
            try {
                const n8nResponse = await fetch(process.env.N8N_WEBHOOK_URL, {
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
                        submittedAt: lead.createdAt
                    })
                });

                const responseText = await n8nResponse.text();
                console.log('n8n Response Status:', n8nResponse.status);
                console.log('n8n Response Body:', responseText);

                if (n8nResponse.ok) {
                    console.log('✅ n8n automation triggered');
                } else {
                    console.error('❌ n8n Webhook failed with status:', n8nResponse.status);
                }
            } catch (n8nError) {
                console.error('❌ n8n Webhook Error:', n8nError.message);
            }
        }

        res.status(201).json({
            success: true,
            data: lead,
            message: 'Your message has been received!',
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
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

module.exports = {
    createLead,
    getLeads,
};
