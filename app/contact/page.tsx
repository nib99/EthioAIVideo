// app/contact/page.tsx – Professional Contact Page with WhatsApp button
'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Navbar />
      <div className="max-w-2xl mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl font-bold mb-6">Talk to the founder directly</h1>
        <p className="text-xl text-zinc-400 mb-12">Nibras – Creator of Ethiopia’s first AI video platform</p>
        
        <div className="space-y-8">
          <a 
            href="https://wa.me/251953536342?text=Hello%20Nibras%2C%20I%27m%20ready%20to%20launch%20my%20first%20EthioVideo%20AI%20campaign!"
            target="_blank"
            className="block bg-green-600 hover:bg-green-700 text-white py-8 px-12 rounded-3xl text-2xl font-semibold transition flex items-center justify-center gap-4 mx-auto max-w-sm"
          >
            💬 Message on WhatsApp (+251 953 536 342)
          </a>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <a href="mailto:nuunnames@gmail.com" className="bg-zinc-900 border border-zinc-700 hover:border-orange-400 p-8 rounded-3xl transition">
              <div className="text-4xl mb-3">✉️</div>
              <div className="font-semibold">Email</div>
              <div className="text-orange-400">nuunnames@gmail.com</div>
            </a>
            
            <a href="tel:+251953536342" className="bg-zinc-900 border border-zinc-700 hover:border-orange-400 p-8 rounded-3xl transition">
              <div className="text-4xl mb-3">📞</div>
              <div className="font-semibold">Call or SMS</div>
              <div className="text-orange-400">+251 953 536 342</div>
            </a>
          </div>
        </div>

        <p className="mt-16 text-zinc-400">
          Finfinnee, Ethiopia 🇪🇹<br />
          Business hours: Monday–Saturday, 9:00 AM – 6:00 PM EAT
        </p>
      </div>
      <Footer />
    </div>
  );
}
