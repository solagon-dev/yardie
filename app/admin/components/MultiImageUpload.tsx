'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';

interface MultiImageUploadProps {
  label: string;
  values: string[];
  onChange: (urls: string[]) => void;
  hint?: string;
}

export default function MultiImageUpload({ label, values, onChange, hint }: MultiImageUploadProps) {
  const [uploading, setUploading] = useState(false);
  const [uploadingCount, setUploadingCount] = useState(0);
  const [error, setError] = useState('');
  const [dragOver, setDragOver] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  async function handleFiles(files: FileList) {
    setError('');
    setUploading(true);
    setUploadingCount(files.length);
    try {
      const uploads = Array.from(files).map(async (file) => {
        const form = new FormData();
        form.append('file', file);
        const res = await fetch('/api/admin/upload', { method: 'POST', body: form });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error ?? 'Upload failed');
        return data.url as string;
      });
      const urls = await Promise.all(uploads);
      onChange([...values, ...urls]);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Upload failed');
    } finally {
      setUploading(false);
      setUploadingCount(0);
    }
  }

  function remove(index: number) {
    onChange(values.filter((_, i) => i !== index));
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    setDragOver(false);
    if (e.dataTransfer.files?.length) handleFiles(e.dataTransfer.files);
  }

  return (
    <div>
      <label className="block text-[11px] text-[#5C5548] tracking-[0.08em] uppercase mb-2 font-[600]">
        {label}
        {values.length > 0 && (
          <span className="ml-2 text-[#B8B0A4] font-[400] normal-case tracking-normal">({values.length} image{values.length !== 1 ? 's' : ''})</span>
        )}
      </label>

      {values.length > 0 && (
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 mb-3">
          {values.map((url, i) => (
            <div key={i} className="relative group overflow-hidden bg-[#F0ECE4]" style={{ aspectRatio: '4/3', borderRadius: '4px' }}>
              <Image src={url} alt="" fill className="object-cover" sizes="160px" unoptimized />
              {/* Remove button */}
              <button
                type="button"
                onClick={() => remove(i)}
                className="absolute top-1.5 right-1.5 w-6 h-6 bg-[rgba(26,24,20,0.7)] text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-[rgba(220,80,80,0.9)] hover:scale-110"
                style={{ borderRadius: '3px' }}
                aria-label="Remove image"
              >
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
                  <path d="M1 1l6 6M7 1L1 7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                </svg>
              </button>
              {/* Image number */}
              <div className="absolute bottom-1.5 left-1.5 text-[9px] text-white bg-[rgba(26,24,20,0.55)] px-1.5 py-0.5 opacity-0 group-hover:opacity-100 transition-opacity" style={{ borderRadius: '2px' }}>
                {i + 1}
              </div>
            </div>
          ))}
        </div>
      )}

      <button
        type="button"
        onClick={() => !uploading && inputRef.current?.click()}
        onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
        onDragLeave={() => setDragOver(false)}
        onDrop={handleDrop}
        disabled={uploading}
        className={`w-full border-2 border-dashed flex items-center justify-center gap-2.5 py-4 text-[12px] transition-all duration-150 disabled:cursor-wait ${
          dragOver
            ? 'border-[#9AA880] bg-[rgba(122,140,90,0.05)] text-[#6A8040]'
            : 'border-[#D8D0C4] bg-[#FAF8F5] hover:border-[#B8A88A] hover:bg-[#F5F0E8] text-[#8C8478] hover:text-[#5C5548]'
        }`}
        style={{ borderRadius: '5px' }}
      >
        {uploading ? (
          <>
            <svg className="animate-spin flex-shrink-0" width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <circle cx="10" cy="10" r="8" stroke="#D8D0C4" strokeWidth="2"/>
              <path d="M10 2a8 8 0 0 1 8 8" stroke="#7A8C5A" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span>Uploading {uploadingCount} image{uploadingCount !== 1 ? 's' : ''}…</span>
          </>
        ) : (
          <>
            <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M10 13V4M6 7l4-4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 14v1.5A1.5 1.5 0 0 0 4.5 17h11a1.5 1.5 0 0 0 1.5-1.5V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <span>
              {dragOver
                ? 'Drop images to add'
                : values.length > 0
                  ? 'Add more images'
                  : hint ?? 'Drag images here or click to browse'}
            </span>
          </>
        )}
      </button>

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
        multiple
        className="hidden"
        onChange={(e) => {
          if (e.target.files?.length) handleFiles(e.target.files);
          e.target.value = '';
        }}
      />
    </div>
  );
}
