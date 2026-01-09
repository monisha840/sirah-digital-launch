require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
    origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configure Nodemailer transporter with Gmail SMTP
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD
    }
});

// Verify transporter configuration on startup
transporter.verify((error, success) => {
    if (error) {
        console.error('❌ Email transporter verification failed:', error);
    } else {
        console.log('✅ Email server is ready to send messages');
    }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'Server is running' });
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
    try {
        const { firstName, lastName, email, phone, company, message } = req.body;

        // Validate required fields
        if (!firstName || !lastName || !email || !message) {
            return res.status(400).json({
                success: false,
                message: 'Missing required fields: firstName, lastName, email, and message are required.'
            });
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid email address.'
            });
        }

        // Prepare email content
        const mailOptions = {
            from: process.env.GMAIL_USER,
            to: process.env.RECIPIENT_EMAIL || 'support@sirahdigital.in',
            subject: 'New Contact Form Submission – Sirah Digital',
            html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 5px 5px 0 0; }
            .content { background: #f9f9f9; padding: 20px; border: 1px solid #ddd; border-top: none; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #667eea; }
            .value { margin-top: 5px; padding: 10px; background: white; border-left: 3px solid #667eea; }
            .footer { text-align: center; padding: 15px; color: #777; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2 style="margin: 0;">New Contact Form Submission</h2>
              <p style="margin: 5px 0 0 0;">SIRAH DIGITAL Website</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Name:</div>
                <div class="value">${firstName} ${lastName}</div>
              </div>
              <div class="field">
                <div class="label">Email:</div>
                <div class="value"><a href="mailto:${email}">${email}</a></div>
              </div>
              ${phone ? `
              <div class="field">
                <div class="label">Phone:</div>
                <div class="value">${phone}</div>
              </div>
              ` : ''}
              ${company ? `
              <div class="field">
                <div class="label">Company:</div>
                <div class="value">${company}</div>
              </div>
              ` : ''}
              <div class="field">
                <div class="label">Message:</div>
                <div class="value">${message.replace(/\n/g, '<br>')}</div>
              </div>
            </div>
            <div class="footer">
              <p>This email was sent from the SIRAH DIGITAL contact form.</p>
              <p>Submitted on: ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })} IST</p>
            </div>
          </div>
        </body>
        </html>
      `,
            // Plain text fallback
            text: `
New Contact Form Submission - SIRAH DIGITAL

Name: ${firstName} ${lastName}
Email: ${email}
${phone ? `Phone: ${phone}` : ''}
${company ? `Company: ${company}` : ''}

Message:
${message}

Submitted on: ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })} IST
      `
        };

        // Send email
        const info = await transporter.sendMail(mailOptions);

        console.log('✅ Email sent successfully:', info.messageId);

        res.status(200).json({
            success: true,
            message: 'Your message has been sent successfully! We will get back to you within 24 hours.',
            messageId: info.messageId
        });

    } catch (error) {
        console.error('❌ Error sending email:', error);

        res.status(500).json({
            success: false,
            message: 'Failed to send message. Please try again later or contact us directly at support@sirahdigital.in',
            error: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
    }
});

// 404 handler
app.use('*', (req, res) => {
    res.status(404).json({
        success: false,
        message: 'Route not found'
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`\n🚀 SIRAH DIGITAL Backend Server`);
    console.log(`📍 Server running on http://localhost:${PORT}`);
    console.log(`📧 Email service: ${process.env.GMAIL_USER ? 'Configured' : 'Not configured'}`);
    console.log(`📬 Recipient: ${process.env.RECIPIENT_EMAIL || 'support@sirahdigital.in'}\n`);
});
