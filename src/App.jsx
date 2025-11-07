import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PostComposer from './components/PostComposer';
import ProductComposer from './components/ProductComposer';
import Feed from './components/Feed';

export default function App() {
  const [items, setItems] = useState([]);

  const handleCreate = (item) => {
    setItems((prev) => [item, ...prev]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <Navbar />
      <Hero />

      <main className="max-w-6xl mx-auto py-12 space-y-12">
        <PostComposer onCreate={handleCreate} />
        <ProductComposer onCreate={handleCreate} />
        <section className="px-4">
          <h2 className="text-xl font-semibold mb-4">Latest</h2>
          <Feed items={items} />
        </section>
      </main>

      <footer className="py-10 text-center text-slate-500">Built with love • VibeForum</footer>
    </div>
  );
}
