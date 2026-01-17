const Lead = require('../models/Lead');
const nodemailer = require('nodemailer');
const { validationResult } = require('express-validator');

// @desc    Create a new lead (submit contact form)
// @route   POST /api/leads
// @access  Public
const createLead = async (req, res) => {
    console.log('--- Incoming Lead Request ---');
    console.log('Body:', req.body);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.error('Validation Errors:', errors.array());
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
        console.log('✅ Lead Created in DB:', lead._id);

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
                const n8nPayload = {
                    firstName,
                    lastName,
                    email,
                    phone,
                    company,
                    message,
                    leadId: lead._id,
                    submittedAt: lead.createdAt
                };
                console.log('--- Sending to n8n ---');
                console.log('URL:', process.env.N8N_WEBHOOK_URL);
                console.log('Payload:', JSON.stringify(n8nPayload, null, 2));

                const n8nResponse = await fetch(process.env.N8N_WEBHOOK_URL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(n8nPayload)
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
        console.error('❌ Server Error during Lead Creation:', error);
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

// @desc    Update lead
// @route   PUT /api/leads/:id
// @access  Private/Admin
const updateLead = async (req, res) => {
    try {
        const lead = await Lead.findById(req.params.id);

        if (lead) {
            lead.firstName = req.body.firstName || lead.firstName;
            lead.lastName = req.body.lastName || lead.lastName;
            lead.email = req.body.email || lead.email;
            lead.phone = req.body.phone || lead.phone;
            lead.company = req.body.company || lead.company;
            lead.status = req.body.status || lead.status;
            lead.notes = req.body.notes !== undefined ? req.body.notes : lead.notes;

            // Only update message if specifically provided (usually read-only)
            if (req.body.message) {
                lead.message = req.body.message;
            }

            const updatedLead = await lead.save();
            res.json(updatedLead);
        } else {
            res.status(404).json({ message: 'Lead not found' });
        }
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

        if (lead) {
            await lead.deleteOne();
            res.json({ message: 'Lead removed' });
        } else {
            res.status(404).json({ message: 'Lead not found' });
        }
    } catch (error) {
        console.error('Error deleting lead:', error);
        res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = {
    createLead,
    getLeads,
    updateLead,
    deleteLead,
};
