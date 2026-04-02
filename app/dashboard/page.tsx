'use client';
import { useState, useEffect } from 'react';
import { useUser } from '@clerk/nextjs';
import CreditBalance from '@/components/CreditBalance';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Play, TrendingUp, Users, Clock } from 'lucide-react';
import Link from 'next/link';

export default function Dashboard() {
  const { user } = useUser();
  const [credits, setCredits] = useState(12);
  const [recentVideos, setRecentVideos] = useState<any[]>([]);

  // TODO: Later connect to your backend to fetch real credits & videos
  useEffect(() => {
    // Fetch credits and recent videos from backend
    // Example: fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/user/credits`)
  }, []);

  return (
    <div className="space-y-10">
      {/* Welcome Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Welcome back, {user?.firstName || "Creator"} 👋
          </h1>
          <p className="text-zinc-400 mt-2 text-lg">
            Create cinematic videos in Amharic, Afaan Oromo, Somali & Tigrinya
          </p>
        </div>
        <CreditBalance credits={credits} />
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Play className="w-6 h-6 text-orange-500" />
              Videos Created
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-5xl font-bold">27</p>
            <p className="text-green-500 text-sm mt-2">↑ 4 this week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <TrendingUp className="w-6 h-6 text-orange-500" />
              Avg. Views
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-5xl font-bold">2.4K</p>
            <p className="text-zinc-400 text-sm mt-2">Per video</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Users className="w-6 h-6 text-orange-500" />
              Total Reach
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-5xl font-bold">68K</p>
            <p className="text-zinc-400 text-sm mt-2">Impressions</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Clock className="w-6 h-6 text-orange-500" />
              Time Saved
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-5xl font-bold">41h</p>
            <p className="text-zinc-400 text-sm mt-2">This month</p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Action */}
      <div className="bg-gradient-to-r from-orange-500/10 to-red-600/10 border border-orange-500/20 rounded-3xl p-10 text-center">
        <h2 className="text-3xl font-semibold mb-4">Ready to create your next viral video?</h2>
        <Link href="/dashboard/generate">
          <Button className="ethio-gradient text-xl px-12 py-7">
            🎬 Generate New Video Now
          </Button>
        </Link>
      </div>

      {/* Recent Videos */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold">Recent Videos</h2>
          <Link href="/dashboard/generate" className="text-orange-400 hover:underline">
            View all →
          </Link>
        </div>

        {recentVideos.length === 0 ? (
          <Card>
            <CardContent className="py-20 text-center">
              <p className="text-zinc-400">No videos yet. Generate your first one!</p>
              <Link href="/dashboard/generate">
                <Button className="mt-6 ethio-gradient">Generate First Video</Button>
              </Link>
            </CardContent>
          </Card>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Map your videos here later */}
          </div>
        )}
      </div>
    </div>
  );
}
