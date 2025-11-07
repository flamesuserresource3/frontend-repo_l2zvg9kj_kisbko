import React from 'react';

function Card({ item }) {
  return (
    <article className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
      {item.image && (
        <img src={item.image} alt="post" className="w-full h-64 object-cover" />
      )}
      <div className="p-4">
        {item.type === 'product' && (
          <span className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 mb-2">Product</span>
        )}
        <p className="text-slate-800 whitespace-pre-wrap">{item.text}</p>
        {item.type === 'product' && (
          <div className="mt-3 flex items-center justify-between">
            <span className="text-lg font-semibold">${item.price?.toFixed(2)}</span>
            <button className="px-3 py-1.5 rounded-md bg-slate-900 text-white text-sm hover:bg-slate-800">Buy</button>
          </div>
        )}
        <p className="mt-2 text-xs text-slate-500">{new Date(item.createdAt).toLocaleString()}</p>
      </div>
    </article>
  );
}

export default function Feed({ items }) {
  if (!items.length) {
    return (
      <div className="text-center text-slate-500">No posts yet. Be the first to share!</div>
    );
  }
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {items.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
}
