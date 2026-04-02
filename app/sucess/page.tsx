'use client';
import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Home } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const sessionId = searchParams.get('session_id');
  
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [creditsAdded, setCreditsAdded] = useState(0);

  useEffect(() => {
    if (!sessionId) {
      setStatus('error');
      return;
    }

    // Verify payment with your backend
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/verify-payment`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ session_id: sessionId }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setCreditsAdded(data.credits || 20);
          setStatus('success');
        } else {
          setStatus('error');
        }
      })
      .catch(() => setStatus('error'));
  }, [sessionId]);

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Navbar />

      <div className="flex items-center justify-center min-h-[80vh] px-6">
        <div className="max-w-lg w-full text-center">
          {status === 'loading' && (
            <div className="animate-pulse">
              <div className="w-20 h-20 mx-auto border-4 border-orange-500 border-t-transparent rounded-full animate-spin" />
              <p className="mt-6 text-xl">Verifying your payment...</p>
            </div>
          )}

          {status === 'success' && (
            <>
              <div className="mx-auto w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center mb-8">
                <CheckCircle className="w-20 h-20 text-green-500" />
              </div>

              <h1 className="text-5xl font-bold mb-4">Payment Successful! 🎉</h1>
              <p className="text-2xl text-zinc-300 mb-2">Thank you for supporting EthioVideo AI</p>
              
              <div className="bg-zinc-900 border border-green-500/30 rounded-3xl p-8 my-10">
                <p className="text-green-400 text-sm mb-1">You received</p>
                <p className="text-6xl font-bold text-green-400">{creditsAdded} Credits</p>
                <p className="text-zinc-400 mt-2">Added to your account instantly</p>
              </div>

              <div className="space-y-4">
                <Link href="/dashboard/generate">
                  <button className="ethio-gradient w-full py-6 rounded-3xl text-xl font-semibold flex items-center justify-center gap-3 hover:scale-105 transition">
                    Generate Your First Video Now
                    <ArrowRight className="w-6 h-6" />
                  </button>
                </Link>

                <Link href="/dashboard">
                  <button className="w-full border border-zinc-700 hover:bg-zinc-900 py-6 rounded-3xl text-lg font-medium transition">
                    Go to Dashboard
                  </button>
                </Link>
              </div>
            </>
          )}

          {status === 'error' && (
            <>
              <h1 className="text-4xl font-bold text-red-400 mb-6">Something went wrong</h1>
              <p className="text-zinc-400 mb-10">We couldn't verify your payment. Please contact support.</p>
              <button 
                onClick={() => router.push('/dashboard/credits')}
                className="ethio-gradient px-10 py-4 rounded-2xl"
              >
                Try Again
              </button>
            </>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
