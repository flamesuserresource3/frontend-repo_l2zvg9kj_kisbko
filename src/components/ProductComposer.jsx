import React, { useState } from 'react';
import { Tag, Image as ImageIcon, Plus } from 'lucide-react';

export default function ProductComposer({ onCreate }) {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState('');

  const handleImage = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImage(file);
    const reader = new FileReader();
    reader.onload = () => setPreview(reader.result?.toString() || '');
    reader.readAsDataURL(file);
  };

  const submit = (e) => {
    e.preventDefault();
    if (!title.trim() || !price) return;
    const newProduct = {
      id: Date.now(),
      text: `${title}${desc ? ` — ${desc}` : ''}`,
      price: Number(price),
      image: preview,
      createdAt: new Date().toISOString(),
      type: 'product',
    };
    onCreate?.(newProduct);
    setTitle('');
    setDesc('');
    setPrice('');
    setImage(null);
    setPreview('');
  };

  return (
    <section id="market" className="max-w-2xl mx-auto px-4">
      <form onSubmit={submit} className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
        <div className="grid gap-3 sm:grid-cols-2">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Product title"
            className="w-full rounded-md p-3 bg-slate-50 focus:bg-white border border-transparent focus:border-slate-200 outline-none"
          />
          <input
            type="number"
            step="0.01"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Price"
            className="w-full rounded-md p-3 bg-slate-50 focus:bg-white border border-transparent focus:border-slate-200 outline-none"
          />
        </div>
        <textarea
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          placeholder="Description (optional)"
          className="mt-3 w-full resize-none outline-none rounded-md p-3 bg-slate-50 focus:bg-white border border-transparent focus:border-slate-200 transition min-h-[80px]"
        />

        {preview && (
          <div className="mt-3 rounded-lg overflow-hidden">
            <img src={preview} alt="preview" className="w-full h-60 object-cover" />
          </div>
        )}

        <div className="mt-3 flex items-center justify-between">
          <label className="inline-flex items-center gap-2 cursor-pointer text-slate-600 hover:text-slate-900">
            <input type="file" accept="image/*" className="hidden" onChange={handleImage} />
            <ImageIcon className="h-5 w-5" />
            <span>Add image</span>
          </label>
          <button type="submit" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-500">
            <Plus className="h-4 w-4" />
            List Product
          </button>
        </div>
      </form>
    </section>
  );
}
