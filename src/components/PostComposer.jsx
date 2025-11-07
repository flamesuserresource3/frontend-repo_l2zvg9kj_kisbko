import React, { useState } from 'react';
import { Image as ImageIcon, Send } from 'lucide-react';

export default function PostComposer({ onCreate }) {
  const [text, setText] = useState('');
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
    if (!text.trim() && !image) return;
    const newPost = {
      id: Date.now(),
      text: text.trim(),
      image: preview,
      createdAt: new Date().toISOString(),
      type: 'post',
    };
    onCreate?.(newPost);
    setText('');
    setImage(null);
    setPreview('');
  };

  return (
    <section id="create" className="max-w-2xl mx-auto px-4">
      <form onSubmit={submit} className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Share something with a photo..."
          className="w-full resize-none outline-none rounded-md p-3 bg-slate-50 focus:bg-white border border-transparent focus:border-slate-200 transition min-h-[96px]"
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
          <button type="submit" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800">
            <Send className="h-4 w-4" />
            Post
          </button>
        </div>
      </form>
    </section>
  );
}
