import React from 'react';
import { Home, ShoppingCart, User } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-fuchsia-500 via-pink-500 to-amber-400 shadow-md" />
          <span className="text-xl font-semibold tracking-tight">VibeForum</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-slate-600">
          <a href="#" className="flex items-center gap-2 hover:text-slate-900 transition-colors">
            <Home className="h-5 w-5" />
            <span>Home</span>
          </a>
          <a href="#market" className="flex items-center gap-2 hover:text-slate-900 transition-colors">
            <ShoppingCart className="h-5 w-5" />
            <span>Marketplace</span>
          </a>
          <a href="#profile" className="flex items-center gap-2 hover:text-slate-900 transition-colors">
            <User className="h-5 w-5" />
            <span>Profile</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
