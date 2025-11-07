import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] grid place-items-center overflow-hidden bg-gradient-to-b from-indigo-50 via-white to-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/ezRAY9QD27kiJcur/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900">
          Share moments. Sell what you love.
        </h1>
        <p className="mt-4 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
          A playful social forum where your posts can shine with images, and your products can find a new home.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#create" className="px-5 py-3 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-colors">Create Post</a>
          <a href="#market" className="px-5 py-3 rounded-lg bg-white border border-slate-200 text-slate-900 hover:bg-slate-50 transition-colors">List a Product</a>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
    </section>
  );
}
