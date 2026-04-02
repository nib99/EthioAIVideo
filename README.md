EthioVideo AI

EthioVideo AI is Ethiopia’s first professional AI-powered video generation SaaS platform. It empowers creators, businesses, and storytellers with instant video creation, credits-based monetization, and a seamless user experience.

🚀 Features

Stripe Integration: Secure payments with instant credit allocation.

Clerk Authentication: Modern, Ethiopian-styled login and user management.

Dashboard: Generate videos, manage credits, and track usage.

Custom Success Page: Celebratory UI after successful payments.

Backend Integration: FastAPI backend hosted on Render.

Deployment: Frontend on Vercel, backend on Render.

🛠 Tech Stack

Frontend: Next.js 14, TailwindCSS, Lucide Icons

Backend: FastAPI, Render

Auth: Clerk

Payments: Stripe

Deployment: Vercel (frontend), Render (backend)

📦 Installation

1. Clone the repository

git clone https://github.com/yourusername/ethio-video-ai.git
cd ethio-video-ai

2. Install dependencies

npm install

3. Environment Variables

Create a .env.local file in the root directory:

NEXT_PUBLIC_BACKEND_URL=https://ethio-video-ai-saas-backend.onrender.com
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_xxxxxxxxxxxxxxxxxxxxxxxx
CLERK_SECRET_KEY=sk_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxx

4. Run locally

npm run dev

🌐 Deployment

Frontend (Vercel)

Push code to GitHub.

Go to Vercel → New Project → Import Repo.

Add environment variables in Settings → Environment Variables.

Deploy.

Backend (Render)

Deploy FastAPI backend on Render.

Update Stripe checkout route with success URL:

success_url="https://your-vercel-domain.com/success?session_id={CHECKOUT_SESSION_ID}"

🎉 Success Page

Located at app/success/page.tsx

Verifies payment via backend.

Displays credits added instantly.

Provides quick links to Dashboard and Generate page.

📸 Screenshots

Landing Page

Dashboard

Success Page

(Add screenshots here once deployed)

🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

📜 License

MIT License

🇪🇹 Vision

EthioVideo AI is built to empower Ethiopian and African creators with cutting-edge AI tools, monetization opportunities, and authentic cultural storytelling.
