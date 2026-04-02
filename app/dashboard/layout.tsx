'use client';
import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/nextjs';
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SignedIn>
        <div className="flex h-screen overflow-hidden bg-zinc-950">
          <Sidebar />
          <div className="flex-1 flex flex-col overflow-hidden">
            <Navbar />
            <main className="flex-1 overflow-auto p-6 md:p-10">
              {children}
            </main>
          </div>
        </div>
      </SignedIn>

      <SignedOut>
        <RedirectToSignIn redirectUrl="/dashboard" />
      </SignedOut>
    </>
  );
}
