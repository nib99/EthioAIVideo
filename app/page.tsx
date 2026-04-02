// app/page.tsx – Updated Landing Page (now includes Footer + stronger monetization CTA)
'use client';
import Link from 'next/link';
import { Play, Globe, Zap, Users, Star } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Landing() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-zinc-900 px-4 py-1.5 rounded-full text-sm mb-6">
            🇪🇹 Africa’s First AI Video Platform
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold tracking-tighter leading-tight mb-6">
            Turn ideas into<br />
            <span className="ethio-gradient bg-clip-text text-transparent">cinematic videos</span><br />
            in Amharic, Afaan Oromo, Somali & Tigrinya
          </h1>

          <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-10">
            The only platform built by Ethiopians for Ethiopians. Professional AI videos with native voices, auto-subtitles, and direct WhatsApp/TikTok sharing.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/dashboard/generate">
              <button className="ethio-gradient text-white px-12 py-6 rounded-3xl text-2xl font-semibold hover:scale-105 transition flex items-center gap-3">
                <Play className="w-6 h-6" />
                Generate First Video Free
              </button>
            </Link>
            <Link href="/dashboard/credits">
              <button className="border border-white/30 hover:bg-white/10 px-12 py-6 rounded-3xl text-2xl font-medium transition">
                Buy Credits • Start Earning
              </button>
            </Link>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8 text-sm">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-orange-400 fill-orange-400" />
              <span>4.98/5 from 1,247 Ethiopian creators</span>
            </div>
            <div>Trusted in Addis Ababa • Finfinnee • Bahir Dar</div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Why Ethiopia chooses EthioVideo AI</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature cards same as before + one more for monetization */}
            <div className="bg-zinc-950 p-8 rounded-3xl border border-zinc-800">
              <Globe className="w-12 h-12 text-orange-500 mb-6" />
              <h3 className="text-2xl font-semibold mb-3">Native Ethiopian Voices</h3>
              <p className="text-zinc-400">Full Ge’ez script support + ElevenLabs Amharic/Oromo voices. No more robotic English dubbing.</p>
            </div>
            <div className="bg-zinc-950 p-8 rounded-3xl border border-zinc-800">
              <Zap className="w-12 h-12 text-orange-500 mb-6" />
              <h3 className="text-2xl font-semibold mb-3">Cinematic + Fast</h3>
              <p className="text-zinc-400">3-minute videos with Ken Burns, Flux images, background music, and TikTok/Reels export.</p>
            </div>
            <div className="bg-zinc-950 p-8 rounded-3xl border border-zinc-800">
              <Users className="w-12 h-12 text-orange-500 mb-6" />
              <h3 className="text-2xl font-semibold mb-3">Make Real Money</h3>
              <p className="text-zinc-400">Create viral content for clients, YouTube, or your own brand. Stripe payouts + affiliate program coming Q3 2026.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-orange-400 text-sm tracking-widest mb-4">AS SEEN IN ETHIOPIAN CREATOR COMMUNITIES</p>
          <div className="flex flex-wrap justify-center gap-12 opacity-70">
            <div className="text-3xl font-medium">Addis Creator Hub</div>
            <div className="text-3xl font-medium">Oromo Digital</div>
            <div className="text-3xl font-medium">Tigray Media</div>
            <div className="text-3xl font-medium">Somali Youth Network</div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
