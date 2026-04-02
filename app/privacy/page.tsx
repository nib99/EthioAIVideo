// app/privacy/page.tsx – Full Professional Privacy Policy (Ethiopia-focused)
'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-5xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-zinc-400">Last updated: April 02, 2026</p>
        
        <div className="prose prose-invert mt-12 text-zinc-300 leading-relaxed">
          <p>EthioVideo AI (operated by Nibras in Finfinnee, Ethiopia) respects your privacy. This policy explains how we collect, use, and protect your information when you use our AI video platform.</p>
          
          <h2 className="text-2xl font-semibold mt-10 mb-4">1. Information We Collect</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Account information (email, name, phone)</li>
            <li>Video prompts, scripts, and generated videos</li>
            <li>Payment data (processed securely by Stripe – we never store card details)</li>
            <li>Usage data and analytics to improve Ethiopian language models</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-10 mb-4">2. How We Use Your Data</h2>
          <p>We use your data only to generate your videos, process payments, improve our Amharic/Oromo voice models, and send you important updates. We never sell your data.</p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">3. Data Storage & Security</h2>
          <p>All videos and prompts are stored on secure Ethiopian-hosted servers (or EU servers with GDPR-level protection). You can request deletion of your data at any time.</p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">4. Your Rights</h2>
          <p>As an Ethiopian user, you have the right to access, correct, or delete your data. Contact us at nuunnames@gmail.com.</p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">5. Children’s Privacy</h2>
          <p>Our service is for users 13+. We do not knowingly collect data from children under 13.</p>

          <div className="bg-zinc-900 p-8 rounded-3xl mt-12 text-sm">
            <strong>Contact for Privacy Questions:</strong><br />
            Nibras • nuunnames@gmail.com • +251 953 536 342 • WhatsApp • Finfinnee, Ethiopia 🇪🇹
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
