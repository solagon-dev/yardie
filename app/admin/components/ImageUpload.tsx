'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';

interface ImageUploadProps {
  label: string;
  value: string;
  onChange: (url: string) => void;
  hint?: string;
}

export default function ImageUpload({ label, value, onChange, hint }: ImageUploadProps) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const [dragOver, setDragOver] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  async function handleFile(file: File) {
    if (!file.type.startsWith('image/')) {
      setError('Please upload a JPEG, PNG, or WebP image.');
      return;
    }
    setError('');
    setUploading(true);
    try {
      const form = new FormData();
      form.append('file', file);
      const res = await fetch('/api/admin/upload', { method: 'POST', body: form });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? 'Upload failed');
      onChange(data.url);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Upload failed');
    } finally {
      setUploading(false);
    }
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file) handleFile(file);
  }

  return (
    <div>
      <label className="block text-[11px] text-[#5C5548] tracking-[0.08em] uppercase mb-2 font-[600]">
        {label}
      </label>

      {value ? (
        <div className="relative group">
          <div className="relative overflow-hidden bg-[#F0ECE4]" style={{ aspectRatio: '16/9', borderRadius: '4px' }}>
            <Image src={value} alt="Upload preview" fill className="object-cover" sizes="600px" unoptimized />
          </div>
          {/* Overlay on hover */}
          <div
            className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            style={{ background: 'rgba(26,24,20,0.45)', borderRadius: '4px' }}
          >
            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              className="bg-limestone text-[#1A1814] text-[10px] tracking-[0.12em] uppercase font-[500] px-3.5 py-2 hover:bg-[#F5F0E8] transition-colors"
              style={{ borderRadius: '3px' }}
            >
              Replace
            </button>
            <button
              type="button"
              onClick={() => onChange('')}
              className="bg-[rgba(220,80,80,0.9)] text-white text-[10px] tracking-[0.12em] uppercase font-[500] px-3.5 py-2 hover:bg-[#DC5050] transition-colors"
              style={{ borderRadius: '3px' }}
            >
              Remove
            </button>
          </div>
          {/* Replacing spinner */}
          {uploading && (
            <div className="absolute inset-0 flex items-center justify-center bg-[rgba(250,248,245,0.85)]" style={{ borderRadius: '4px' }}>
              <svg className="animate-spin" width="24" height="24" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="8" stroke="#E0D8CC" strokeWidth="2"/>
                <path d="M10 2a8 8 0 0 1 8 8" stroke="#7A8C5A" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
          )}
        </div>
      ) : (
        <button
          type="button"
          onClick={() => !uploading && inputRef.current?.click()}
          onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
          onDragLeave={() => setDragOver(false)}
          onDrop={handleDrop}
          disabled={uploading}
          className={`w-full border-2 border-dashed flex flex-col items-center justify-center py-10 gap-3 transition-all duration-150 disabled:cursor-wait ${
            dragOver
              ? 'border-[#9AA880] bg-[rgba(122,140,90,0.05)] scale-[1.005]'
              : 'border-[#D8D0C4] bg-[#FAF8F5] hover:border-[#B8A88A] hover:bg-[#F5F0E8]'
          }`}
          style={{ borderRadius: '5px' }}
        >
          {uploading ? (
            <>
              <svg className="animate-spin" width="22" height="22" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <circle cx="10" cy="10" r="8" stroke="#D8D0C4" strokeWidth="2"/>
                <path d="M10 2a8 8 0 0 1 8 8" stroke="#7A8C5A" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span className="text-[12px] text-[#8C8478]">Uploading…</span>
            </>
          ) : (
            <>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${dragOver ? 'bg-[rgba(122,140,90,0.15)]' : 'bg-[#F0ECE4]'}`}>
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M10 13V4M6 7l4-4 4 4" stroke={dragOver ? '#7A8C5A' : '#B8B0A4'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 14v1.5A1.5 1.5 0 0 0 4.5 17h11a1.5 1.5 0 0 0 1.5-1.5V14" stroke={dragOver ? '#7A8C5A' : '#B8B0A4'} strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="text-center">
                <p className="text-[12px] text-[#5C5548] font-[500]">
                  {dragOver ? 'Drop to upload' : 'Drag image here or click to browse'}
                </p>
                {hint && <p className="text-[11px] text-[#B0A898] mt-1 leading-relaxed max-w-[240px]">{hint}</p>}
                {!hint && <p className="text-[11px] text-[#C0B8B0] mt-1">JPEG, PNG, or WebP</p>}
              </div>
            </>
          )}
        </button>
      )}

      {error && (
        <p className="mt-2 text-[11px] text-[#DC5050] flex items-center gap-1.5">
          <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.1"/>
            <path d="M6 3.5v3M6 8.5h.01" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
          </svg>
          {error}
        </p>
      )}

      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) handleFile(file);
          e.target.value = '';
        }}
      />
    </div>
  );
}
