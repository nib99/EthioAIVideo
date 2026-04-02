'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useUser } from '@clerk/nextjs';
import { Button } from '@/components/ui/Button';
import { Textarea } from '@/components/ui/Textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/Select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

const formSchema = z.object({
  text: z.string().min(15, "Script must be at least 15 characters"),
  language: z.enum(["Amharic", "Afaan Oromo", "Somali", "Tigrinya"]),
  tier: z.enum(["free", "pro", "premium"]),
});

type FormData = z.infer<typeof formSchema>;

export default function GeneratePage() {
  const { user } = useUser();
  const [jobId, setJobId] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "processing" | "completed" | "failed">("idle");
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [error, setError] = useState<string>("");

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: { 
      language: "Amharic", 
      tier: "premium" 
    },
  });

  const onSubmit = async (data: FormData) => {
    if (!user?.emailAddresses[0]?.emailAddress) {
      setError("Please sign in to generate videos");
      return;
    }

    setStatus("processing");
    setError("");

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/generate-cinematic-video`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          user_email: user.emailAddresses[0].emailAddress,   // ← Passed to backend
          user_id: user.id,                                 // Optional but recommended
        }),
      });

      const result = await res.json();

      if (!res.ok) throw new Error(result.detail || "Failed to start generation");

      setJobId(result.job_id);

      // Polling for status
      const pollInterval = setInterval(async () => {
        const statusRes = await fetch(`\( {process.env.NEXT_PUBLIC_BACKEND_URL}/api/status/ \){result.job_id}`);
        const statusData = await statusRes.json();

        if (statusData.status === "completed") {
          setStatus("completed");
          setVideoUrl(statusData.video_url);
          clearInterval(pollInterval);
        } else if (statusData.status === "failed") {
          setStatus("failed");
          setError(statusData.error || "Video generation failed");
          clearInterval(pollInterval);
        }
      }, 4000);

    } catch (err: any) {
      setStatus("failed");
      setError(err.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-10">
        <h1 className="text-5xl font-bold tracking-tight">Create Cinematic Video</h1>
        <p className="text-zinc-400 mt-3 text-lg">
          Turn your script into professional Ethiopian-language video
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Video Generation Form</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            
            <div>
              <label className="block text-sm font-medium mb-2">Your Script / Idea</label>
              <Textarea 
                {...register("text")} 
                rows={9}
                placeholder="ኢትዮጵያ ውብ ሀገር ናት... Write in Amharic, Oromo or English"
                className="bg-zinc-900 border-zinc-700 text-lg"
              />
              {errors.text && <p className="text-red-400 text-sm mt-1">{errors.text.message}</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Language</label>
                <Select {...register("language")}>
                  <SelectTrigger className="bg-zinc-900 border-zinc-700">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Amharic">Amharic (አማርኛ)</SelectItem>
                    <SelectItem value="Afaan Oromo">Afaan Oromo</SelectItem>
                    <SelectItem value="Somali">Somali</SelectItem>
                    <SelectItem value="Tigrinya">Tigrinya</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Quality Tier</label>
                <Select {...register("tier")}>
                  <SelectTrigger className="bg-zinc-900 border-zinc-700">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="premium">Premium — Best Quality + AI Images</SelectItem>
                    <SelectItem value="pro">Pro — Balanced Speed & Quality</SelectItem>
                    <SelectItem value="free">Free — Stock Footage Only</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {error && (
              <div className="bg-red-500/10 border border-red-500 text-red-400 p-4 rounded-2xl">
                {error}
              </div>
            )}

            <Button 
              type="submit" 
              disabled={status === "processing"}
              className="w-full ethio-gradient py-8 text-xl font-semibold"
            >
              {status === "processing" 
                ? "🎬 Generating Video... This may take 1-3 minutes" 
                : "Generate Professional Video Now"}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Generated Video Result */}
      {status === "completed" && videoUrl && (
        <Card className="mt-10">
          <CardHeader>
            <CardTitle>✅ Your Video is Ready!</CardTitle>
          </CardHeader>
          <CardContent>
            <video controls className="w-full rounded-2xl" src={`\( {process.env.NEXT_PUBLIC_BACKEND_URL} \){videoUrl}`} />
            <div className="flex gap-4 mt-8">
              <a href={`\( {process.env.NEXT_PUBLIC_BACKEND_URL} \){videoUrl}`} download>
                <Button className="ethio-gradient">⬇️ Download MP4</Button>
              </a>
              <Button variant="default" onClick={() => window.open(`https://wa.me/251953536342?text=My%20new%20EthioVideo%20is%20ready!`)}>
                Share on WhatsApp
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
