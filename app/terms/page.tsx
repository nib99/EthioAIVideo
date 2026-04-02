// app/terms/page.tsx – Full Professional Terms of Service
'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-5xl font-bold mb-2">Terms of Service</h1>
        <p className="text-zinc-400">Last updated: April 02, 2026</p>
        
        <div className="prose prose-invert mt-12 text-zinc-300 leading-relaxed">
          <p>Welcome to EthioVideo AI – Africa’s first Ethiopian-language AI video platform. By using our service you agree to these terms.</p>
          
          <h2 className="text-2xl font-semibold mt-10 mb-4">1. Service Description</h2>
          <p>EthioVideo AI lets you generate professional videos in Amharic, Afaan Oromo, Somali, Tigrinya and more using AI. Credits are required for generation.</p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">2. Payments & Credits</h2>
          <p>Payments are processed by Stripe. Credits never expire. Refunds are available within 14 days if no videos were generated. All prices in USD.</p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">3. Ownership & Rights</h2>
          <p>You own the videos you generate. EthioVideo AI retains no commercial rights to your content. You are responsible for ensuring your scripts do not violate Ethiopian law.</p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">4. Acceptable Use</h2>
          <p>No hate speech, illegal content, or spam. We may suspend accounts that violate these rules.</p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">5. Limitation of Liability</h2>
          <p>EthioVideo AI is provided “as is”. We are not liable for any lost profits or damages beyond the amount you paid us in the last 12 months.</p>

          <div className="bg-zinc-900 p-8 rounded-3xl mt-12 text-sm">
            <strong>Company:</strong> EthioVideo AI operated by Nibras<br />
            📍 Finfinnee, Ethiopia 🇪🇹<br />
            📧 nuunnames@gmail.com<br />
            📞 +251 953 536 342 (WhatsApp preferred)
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
