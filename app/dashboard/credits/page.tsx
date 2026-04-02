'use client';
import { useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

export default function CreditsPage() {
  const { user } = useUser();
  const [loading, setLoading] = useState<string | null>(null);

  const buyCredits = async (amount: number, price: number) => {
    if (!user?.emailAddresses[0]?.emailAddress) return;

    setLoading(amount.toString());

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/create-checkout`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: user.emailAddresses[0].emailAddress,
          user_id: user.id,
          credits: amount,
          price: price,
          plan: amount >= 50 ? "bundle" : "pay_per_video"
        }),
      });

      const data = await res.json();

      if (data.checkout_url) {
        window.location.href = data.checkout_url;
      } else {
        alert("Failed to start checkout. Please try again.");
      }
    } catch (error) {
      alert("Payment initiation failed. Please check your connection.");
    } finally {
      setLoading(null);
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-10">
        <h1 className="text-5xl font-bold tracking-tight">Buy Credits</h1>
        <p className="text-zinc-400 mt-3 text-lg">
          Purchase credits once and use them anytime. No expiration.
        </p>
      </div>

      <div className="grid gap-8">
        {/* Package 1 */}
        <Card>
          <CardHeader>
            <CardTitle className="flex justify-between items-start">
              <div>
                <span className="text-4xl font-bold">20 Credits</span>
                <p className="text-sm text-zinc-400 mt-1">≈ 10 Premium Videos</p>
              </div>
              <div className="text-right">
                <span className="text-4xl font-bold text-orange-400">$19</span>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Button 
              onClick={() => buyCredits(20, 19)}
              disabled={loading !== null}
              className="w-full ethio-gradient py-7 text-lg"
            >
              {loading === "20" ? "Redirecting to Stripe..." : "Buy 20 Credits – $19"}
            </Button>
          </CardContent>
        </Card>

        {/* Package 2 - Best Value */}
        <Card className="border-orange-500/50 relative">
          <div className="absolute -top-3 right-6 bg-orange-500 text-white text-xs font-bold px-6 py-1 rounded-full">
            BEST VALUE
          </div>
          <CardHeader>
            <CardTitle className="flex justify-between items-start">
              <div>
                <span className="text-4xl font-bold">50 Credits</span>
                <p className="text-sm text-zinc-400 mt-1">≈ 25 Premium Videos</p>
              </div>
              <div className="text-right">
                <span className="text-4xl font-bold text-orange-400">$39</span>
                <p className="text-xs text-green-400">Save $8</p>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Button 
              onClick={() => buyCredits(50, 39)}
              disabled={loading !== null}
              className="w-full ethio-gradient py-7 text-lg"
            >
              {loading === "50" ? "Redirecting to Stripe..." : "Buy 50 Credits – $39"}
            </Button>
          </CardContent>
        </Card>
      </div>

      <p className="text-center text-sm text-zinc-500 mt-12">
        Secure payments powered by Stripe • Credits added instantly after payment
      </p>
    </div>
  );
}
