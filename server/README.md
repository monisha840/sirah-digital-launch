# Sirah Digital Backend API

This is the backend API for the Sirah Digital website, built with Node.js, Express, and MongoDB.

## Features

- **Authentication**: User signup and login with JWT.
- **Lead Managment**: Save contact form submissions and send email notifications.
- **Content API**: Fetch website data.
- **Security**: Password hashing (bcrypt) and route protection (JWT).

## Setup Instructions

### 1. Install Dependencies

```bash
cd server
npm install
```

### 2. Configure Environment Variables

Create a `.env` file in the `server` directory based on `.env.example`:

```env
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/sirah-digital?retryWrites=true&w=majority
JWT_SECRET=your_super_secret_jwt_key
CORS_ORIGIN=https://gamesome-dorla-topographical.ngrok-free.dev

# Email Config (Gmail)
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-app-password
RECIPIENT_EMAIL=support@sirahdigital.in
```

### 3. Run Locally

```bash
# Development mode (auto-restart)
npm run dev

# Production
npm start
```

### 4. Deploy with Docker

```bash
docker build -t sirah-backend .
docker run -p 5000:5000 --env-file .env sirah-backend
```

## API Endpoints

- **POST /api/auth/signup**: Register a new user
- **POST /api/auth/login**: Login and get token
- **GET /api/auth/me**: Get current user profile (Protected)
- **POST /api/leads**: Submit a contact form (Public)
- **GET /api/leads**: Get all leads (Admin Protected)
- **GET /api/content**: Get website content
