'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Home, Video, BarChart3, CreditCard, LogOut, User 
} from 'lucide-react';
import { SignOutButton, useUser } from '@clerk/nextjs';

export default function Sidebar() {
  const pathname = usePathname();
  const { user } = useUser();

  const navItems = [
    { label: "Dashboard", href: "/dashboard", icon: Home },
    { label: "Generate Video", href: "/dashboard/generate", icon: Video },
    { label: "Analytics", href: "/dashboard/analytics", icon: BarChart3 },
    { label: "Buy Credits", href: "/dashboard/credits", icon: CreditCard },
  ];

  return (
    <div className="w-72 bg-zinc-950 border-r border-zinc-800 h-screen flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-zinc-800">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-red-700 to-orange-500 rounded-2xl flex items-center justify-center text-3xl">🇪🇹</div>
          <div>
            <span className="font-bold text-2xl tracking-tighter">EthioVideo</span>
            <span className="text-orange-500 font-bold">AI</span>
          </div>
        </Link>
      </div>

      {/* User Info */}
      <div className="p-6 border-b border-zinc-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center">
            <User className="w-5 h-5" />
          </div>
          <div>
            <p className="font-medium">{user?.fullName || "Creator"}</p>
            <p className="text-xs text-zinc-500">{user?.emailAddresses[0]?.emailAddress}</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-6 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-2xl transition-all ${isActive 
                ? 'bg-orange-500/10 text-orange-400 border border-orange-500/30' 
                : 'hover:bg-zinc-900 text-zinc-400 hover:text-white'}`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Bottom Section */}
      <div className="p-6 border-t border-zinc-800">
        <SignOutButton>
          <button className="flex items-center gap-3 w-full px-4 py-3 text-red-400 hover:bg-zinc-900 rounded-2xl transition">
            <LogOut className="w-5 h-5" />
            Sign Out
          </button>
        </SignOutButton>
      </div>
    </div>
  );
}
