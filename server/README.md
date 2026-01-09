# 🚀 Backend Setup Instructions

## Quick Start Guide

### 1. Configure Gmail SMTP (REQUIRED)

To send emails, you need a Gmail App Password:

1. **Enable 2-Factor Authentication** on your Gmail account (if not already enabled)
   - Go to: https://myaccount.google.com/security

2. **Generate App Password**:
   - Visit: https://myaccount.google.com/apppasswords
   - Select "Mail" and "Other (Custom name)"
   - Enter "SIRAH DIGITAL Backend"
   - Click "Generate"
   - **Copy the 16-character password**

### 2. Create Environment File

Navigate to the `server` directory and create a `.env` file:

```bash
cd server
copy .env.example .env
```

Edit `.env` file with your details:

```env
# Replace with your actual Gmail credentials
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=abcd efgh ijkl mnop

# Email recipient (where form submissions will be sent)
RECIPIENT_EMAIL=support@sirahdigital.in

# Server configuration
PORT=5000
CORS_ORIGIN=http://localhost:5173
NODE_ENV=development
```

**⚠️ Important**: 
- Use your actual Gmail address for `GMAIL_USER`
- Use the 16-character App Password (not your regular Gmail password)
- The App Password will look like: `abcd efgh ijkl mnop` (with spaces)

### 3. Start the Application

From the **root directory**, run:

```bash
npm run dev
```

This will start:
- ✅ Frontend (Vite) on http://localhost:5173
- ✅ Backend (Express) on http://localhost:5000

### 4. Test the Contact Form

1. Open http://localhost:5173 in your browser
2. Navigate to the Contact section
3. Fill out and submit the form
4. Check your email at the configured `RECIPIENT_EMAIL`

---

## Alternative: Run Servers Separately

**Frontend only:**
```bash
npm run dev:client
```

**Backend only:**
```bash
npm run dev:server
```

---

## Troubleshooting

### ❌ "Email transporter verification failed"
- Check your Gmail credentials in `.env`
- Ensure you're using an App Password, not your regular password
- Verify 2FA is enabled on your Google account

### ❌ "Failed to send message" / Network Error
- Ensure backend server is running on port 5000
- Check console for error messages
- Verify `.env` file exists and has correct values

### ❌ Port already in use
- Backend port 5000 is in use: Change `PORT` in `.env`
- Frontend port 5173 is in use: Configure Vite in `vite.config.ts`

---

## API Endpoint

**POST** `http://localhost:5000/api/contact`

**Request Body:**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "company": "Example Corp",
  "message": "Hello, I'm interested in your services"
}
```

**Success Response:**
```json
{
  "success": true,
  "message": "Your message has been sent successfully!",
  "messageId": "<email-message-id>"
}
```

---

## Production Deployment

### Backend Hosting Options:
- Render (recommended for Node.js)
- Railway
- Heroku
- DigitalOcean App Platform

### Steps:
1. Deploy backend to your chosen platform
2. Set environment variables on the platform
3. Update frontend `Contact.tsx` to use production API URL:
   ```typescript
   const response = await fetch("https://your-backend.com/api/contact", {
   ```

### Environment Variables for Production:
```env
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-app-password
RECIPIENT_EMAIL=support@sirahdigital.in
PORT=5000
CORS_ORIGIN=https://your-frontend-domain.com
NODE_ENV=production
```

---

## File Structure

```
sirah-digital-launch/
├── server/                   # Backend server
│   ├── server.js            # Express server with Nodemailer
│   ├── package.json         # Backend dependencies
│   ├── .env                 # Environment variables (create this)
│   ├── .env.example         # Environment template
│   └── .gitignore          # Protect sensitive files
├── src/                     # Frontend React app
│   └── components/
│       └── Contact.tsx      # Updated to use backend API
└── package.json             # Root package with concurrently scripts
```

---

## Security Notes

✅ **Good Practices:**
- `.env` file is gitignored (never commit secrets)
- Using App Password instead of Gmail password
- CORS configured for specific origin
- Input validation on backend

⚠️ **Before Production:**
- Use environment variables on hosting platform
- Enable rate limiting to prevent spam
- Add CSRFtoken protection if needed
- Consider using a dedicated email service (SendGrid, AWS SES)
