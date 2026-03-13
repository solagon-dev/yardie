'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';

interface Slide {
  id: string;
  imageUrl: string;
  altText: string;
  sortOrder: number;
  active: boolean;
}

export default function HeroSlidesManager({ initialSlides }: { initialSlides: Slide[] }) {
  const [slides, setSlides] = useState<Slide[]>(initialSlides);
  const [uploading, setUploading] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const [savingAlt, setSavingAlt] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  async function uploadImage(file: File) {
    setUploading(true);
    try {
      const formData = new FormData();
      formData.append('file', file);
      const res = await fetch('/api/admin/upload', { method: 'POST', body: formData });
      if (!res.ok) throw new Error('Upload failed');
      const { url } = await res.json();

      const res2 = await fetch('/api/admin/hero', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ imageUrl: url, altText: '' }),
      });
      if (!res2.ok) throw new Error('Failed to add slide');
      const newSlide = await res2.json();
      setSlides((prev) => [...prev, newSlide]);
    } catch (e) {
      alert('Failed to upload image. Please try again.');
    } finally {
      setUploading(false);
    }
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) uploadImage(file);
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) uploadImage(file);
  }

  async function moveSlide(index: number, direction: 'up' | 'down') {
    const newSlides = [...slides];
    const swapIndex = direction === 'up' ? index - 1 : index + 1;
    if (swapIndex < 0 || swapIndex >= newSlides.length) return;
    [newSlides[index], newSlides[swapIndex]] = [newSlides[swapIndex], newSlides[index]];
    setSlides(newSlides);
    await fetch('/api/admin/hero/reorder', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ orderedIds: newSlides.map((s) => s.id) }),
    });
  }

  async function saveAltText(id: string, altText: string) {
    setSavingAlt(id);
    await fetch(`/api/admin/hero/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ altText }),
    });
    setSlides((prev) => prev.map((s) => s.id === id ? { ...s, altText } : s));
    setSavingAlt(null);
  }

  async function toggleActive(id: string, active: boolean) {
    await fetch(`/api/admin/hero/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ active }),
    });
    setSlides((prev) => prev.map((s) => s.id === id ? { ...s, active } : s));
  }

  async function deleteSlide(id: string) {
    setDeletingId(id);
    await fetch(`/api/admin/hero/${id}`, { method: 'DELETE' });
    setSlides((prev) => prev.filter((s) => s.id !== id));
    setDeletingId(null);
  }

  return (
    <div className="space-y-4">
      {/* Upload zone */}
      <div
        className={`border-2 border-dashed rounded transition-colors cursor-pointer ${
          dragOver
            ? 'border-[#7A8C5A] bg-[rgba(122,140,90,0.05)]'
            : 'border-[#E0DCD4] hover:border-[#B8B0A4]'
        } ${uploading ? 'opacity-60 pointer-events-none' : ''}`}
        style={{ borderRadius: '4px' }}
        onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
        onDragLeave={() => setDragOver(false)}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
      >
        <div className="flex flex-col items-center justify-center py-10 px-6 text-center">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className={`mb-3 ${dragOver ? 'text-[#7A8C5A]' : 'text-[#C8C0B0]'}`} aria-hidden="true">
            <path d="M14 4v14M7 11l7-7 7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4 22h20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <p className="text-[13px] text-[#5C5548] font-[500] mb-1">
            {uploading ? 'Uploading…' : dragOver ? 'Drop to add slide' : 'Add a new slide'}
          </p>
          <p className="text-[11px] text-[#B8B0A4]">
            {uploading ? 'Please wait' : 'Drag an image here or click to browse'}
          </p>
        </div>
        <input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
      </div>

      {/* Slides list */}
      {slides.length === 0 ? (
        <div className="bg-white border border-[#E8E4DC] rounded py-12 text-center" style={{ borderRadius: '4px' }}>
          <p className="text-[#8C8478] text-[13px]">No slides yet. Upload an image above to add the first one.</p>
        </div>
      ) : (
        <div className="space-y-2">
          {slides.map((slide, index) => (
            <SlideCard
              key={slide.id}
              slide={slide}
              index={index}
              total={slides.length}
              savingAlt={savingAlt === slide.id}
              deleting={deletingId === slide.id}
              onMoveUp={() => moveSlide(index, 'up')}
              onMoveDown={() => moveSlide(index, 'down')}
              onSaveAlt={(altText) => saveAltText(slide.id, altText)}
              onToggleActive={(active) => toggleActive(slide.id, active)}
              onDelete={() => deleteSlide(slide.id)}
            />
          ))}
        </div>
      )}

      <p className="text-[11px] text-[#B8B0A4] mt-2">
        {slides.filter(s => s.active).length} of {slides.length} slides active · Changes save automatically
      </p>
    </div>
  );
}

function SlideCard({
  slide, index, total, savingAlt, deleting,
  onMoveUp, onMoveDown, onSaveAlt, onToggleActive, onDelete,
}: {
  slide: Slide;
  index: number;
  total: number;
  savingAlt: boolean;
  deleting: boolean;
  onMoveUp: () => void;
  onMoveDown: () => void;
  onSaveAlt: (alt: string) => void;
  onToggleActive: (active: boolean) => void;
  onDelete: () => void;
}) {
  const [altText, setAltText] = useState(slide.altText);
  const [showDelete, setShowDelete] = useState(false);

  function handleAltBlur() {
    if (altText !== slide.altText) onSaveAlt(altText);
  }

  return (
    <div
      className={`bg-white border rounded flex items-stretch overflow-hidden transition-opacity ${
        deleting ? 'opacity-40' : ''
      } ${!slide.active ? 'opacity-60' : ''}`}
      style={{ borderColor: '#E8E4DC', borderRadius: '4px' }}
    >
      {/* Order indicator */}
      <div className="w-9 bg-[#F5F3EF] border-r border-[#E8E4DC] flex items-center justify-center flex-shrink-0">
        <span className="text-[10px] text-[#B8B0A4] font-[500]">{String(index + 1).padStart(2, '0')}</span>
      </div>

      {/* Thumbnail */}
      <div className="w-28 flex-shrink-0 relative bg-[#F0ECE4]" style={{ aspectRatio: '16/9', minHeight: '72px' }}>
        <Image src={slide.imageUrl} alt={slide.altText || 'Hero slide'} fill className="object-cover" unoptimized />
      </div>

      {/* Alt text */}
      <div className="flex-1 px-4 py-3 flex flex-col justify-center min-w-0">
        <label className="text-[9px] text-[#B8B0A4] tracking-[0.12em] uppercase font-[500] mb-1 block">Alt Text</label>
        <input
          type="text"
          value={altText}
          onChange={(e) => setAltText(e.target.value)}
          onBlur={handleAltBlur}
          placeholder="Describe this image for accessibility…"
          className="text-[13px] text-[#1A1814] bg-transparent border-b border-transparent focus:border-[#C8C0B0] outline-none transition-colors w-full placeholder-[#C8C0B0] truncate"
        />
        {savingAlt && <span className="text-[10px] text-[#7A8C5A] mt-1">Saving…</span>}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-1 px-3 flex-shrink-0">
        {/* Move up/down */}
        <div className="flex flex-col gap-0.5">
          <button
            onClick={onMoveUp}
            disabled={index === 0}
            className="p-1 text-[#C8C0B0] hover:text-[#5C5548] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            aria-label="Move up"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 8l4-4 4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <button
            onClick={onMoveDown}
            disabled={index === total - 1}
            className="p-1 text-[#C8C0B0] hover:text-[#5C5548] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            aria-label="Move down"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>

        {/* Active toggle */}
        <button
          onClick={() => onToggleActive(!slide.active)}
          className={`px-2 py-1 text-[9px] tracking-[0.08em] uppercase font-[500] transition-colors ml-1 ${
            slide.active
              ? 'text-[#5A7040] bg-[rgba(122,140,90,0.12)] hover:bg-[rgba(122,140,90,0.2)]'
              : 'text-[#B8B0A4] bg-[#F0ECE4] hover:bg-[#E8E4DC]'
          }`}
          style={{ borderRadius: '2px' }}
        >
          {slide.active ? 'Live' : 'Hidden'}
        </button>

        {/* Delete */}
        {showDelete ? (
          <div className="flex items-center gap-1 ml-1">
            <button
              onClick={() => { onDelete(); setShowDelete(false); }}
              className="px-2 py-1 text-[9px] tracking-[0.06em] uppercase bg-[rgba(220,80,80,0.1)] text-[#C05050] hover:bg-[rgba(220,80,80,0.2)] transition-colors font-[500]"
              style={{ borderRadius: '2px' }}
            >
              Delete
            </button>
            <button
              onClick={() => setShowDelete(false)}
              className="px-2 py-1 text-[9px] tracking-[0.06em] uppercase text-[#B8B0A4] hover:text-[#5C5548] transition-colors"
            >
              Cancel
            </button>
          </div>
        ) : (
          <button
            onClick={() => setShowDelete(true)}
            className="p-1.5 text-[#C8C0B0] hover:text-[#C05050] transition-colors ml-1"
            aria-label="Delete slide"
          >
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M2 3.5h10M5 3.5V2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v1M5.5 6v5M8.5 6v5M3 3.5l.7 8a.5.5 0 0 0 .5.5h5.6a.5.5 0 0 0 .5-.5l.7-8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        )}
      </div>
    </div>
  );
}
