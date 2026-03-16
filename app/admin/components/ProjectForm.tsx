'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import ImageUpload from './ImageUpload';
import MultiImageUpload from './MultiImageUpload';

const SERVICE_TAGS = ['Landscapes', 'Hardscapes', 'Masonry', 'Lighting', 'Irrigation'];

interface ProjectData {
  id?: string;
  title: string;
  slug: string;
  summary: string;
  description: string;
  featuredImage: string;
  galleryImages: string[];
  projectLocation: string;
  serviceCategories: string[];
  completionDate: string;
  challenge: string;
  approach: string;
  materials: string;
  featured: boolean;
  publishStatus: string;
  seoTitle: string;
  seoDescription: string;
}

const EMPTY: ProjectData = {
  title: '', slug: '', summary: '', description: '', featuredImage: '',
  galleryImages: [], projectLocation: '', serviceCategories: [],
  completionDate: '', challenge: '', approach: '', materials: '',
  featured: false, publishStatus: 'draft', seoTitle: '', seoDescription: '',
};

export default function ProjectForm({ initial }: { initial?: Partial<ProjectData> }) {
  const router = useRouter();
  const [data, setData] = useState<ProjectData>({ ...EMPTY, ...initial });
  const [saving, setSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saved' | 'error'>('idle');
  const [error, setError] = useState('');
  const [showDelete, setShowDelete] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [dirty, setDirty] = useState(false);
  const [titleError, setTitleError] = useState(false);

  function set<K extends keyof ProjectData>(key: K, value: ProjectData[K]) {
    setData((prev) => ({ ...prev, [key]: value }));
    setDirty(true);
    setSaveStatus('idle');
    if (key === 'title') setTitleError(false);
  }

  function autoSlug(title: string) {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  }

  async function handleSave(status?: string) {
    if (!data.title.trim()) {
      setTitleError(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    setError('');
    setSaving(true);
    try {
      const payload = {
        ...data,
        publishStatus: status ?? data.publishStatus,
        materials: data.materials.split('\n').map((s) => s.trim()).filter(Boolean),
      };
      const url = data.id ? `/api/admin/projects/${data.id}` : '/api/admin/projects';
      const method = data.id ? 'PUT' : 'POST';
      const res = await fetch(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
      if (!res.ok) {
        const d = await res.json();
        throw new Error(d.error ?? 'Save failed');
      }
      const saved = await res.json();
      setSaveStatus('saved');
      setDirty(false);
      setTimeout(() => setSaveStatus((s) => (s === 'saved' ? 'idle' : s)), 3500);
      if (!data.id) {
        router.push(`/admin/projects/${saved.id}/edit`);
      } else {
        setData((prev) => ({ ...prev, publishStatus: saved.publishStatus }));
      }
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Save failed');
      setSaveStatus('error');
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete() {
    setDeleting(true);
    try {
      await fetch(`/api/admin/projects/${data.id}`, { method: 'DELETE' });
      router.push('/admin/projects');
    } catch {
      setDeleting(false);
      setShowDelete(false);
    }
  }

  const isPublished = data.publishStatus === 'published';

  return (
    <div className="max-w-[1100px]">

      {/* Top bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-7">
        <div className="flex items-center gap-3 min-w-0">
          <button
            onClick={() => router.push('/admin/projects')}
            className="flex items-center gap-1.5 text-[11px] text-[#8C8478] hover:text-[#1A1814] tracking-[0.04em] transition-colors flex-shrink-0"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M8 2L4 6l4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Projects
          </button>
          {dirty && (
            <span className="flex items-center gap-1.5 text-[11px] text-[#B8A060]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B8A060] flex-shrink-0" />
              Unsaved changes
            </span>
          )}
          {saveStatus === 'saved' && !dirty && (
            <span className="flex items-center gap-1.5 text-[11px] text-[#7A8C5A]">
              <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Saved
            </span>
          )}
        </div>

        <div className="flex items-center gap-2 flex-wrap flex-shrink-0">
          <button
            type="button"
            onClick={() => handleSave('draft')}
            disabled={saving}
            className="bg-white border border-[#D0C8BC] text-[#5C5548] text-[11px] tracking-[0.1em] uppercase font-[500] px-4 py-2 hover:border-[#8C8478] hover:text-[#1A1814] transition-colors disabled:opacity-50"
            style={{ borderRadius: '3px' }}
          >
            {isPublished ? 'Unpublish' : 'Save Draft'}
          </button>
          <button
            type="button"
            onClick={() => handleSave('published')}
            disabled={saving}
            className="bg-[#7A8C5A] text-white text-[11px] tracking-[0.1em] uppercase font-[500] px-5 py-2 hover:bg-[#6A7C4A] transition-colors disabled:opacity-50 flex items-center gap-2"
            style={{ borderRadius: '3px' }}
          >
            {saving ? (
              <>
                <svg className="animate-spin" width="11" height="11" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <circle cx="10" cy="10" r="8" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/>
                  <path d="M10 2a8 8 0 0 1 8 8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                Saving…
              </>
            ) : isPublished ? 'Update' : 'Publish'}
          </button>
        </div>
      </div>

      {/* Error banner */}
      {error && (
        <div className="mb-5 flex items-start gap-3 bg-[rgba(220,80,80,0.07)] border border-[rgba(220,80,80,0.18)] px-4 py-3.5" style={{ borderRadius: '5px' }}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0 mt-0.5" aria-hidden="true">
            <circle cx="7" cy="7" r="6" stroke="#DC5050" strokeWidth="1.2"/>
            <path d="M7 4v3.5M7 10h.01" stroke="#DC5050" strokeWidth="1.2" strokeLinecap="round"/>
          </svg>
          <div className="min-w-0 flex-1">
            <p className="text-[#DC5050] text-[12px] font-[500]">Unable to save</p>
            <p className="text-[#DC5050] text-[12px] opacity-75 mt-0.5">{error}</p>
          </div>
          <button onClick={() => setError('')} className="text-[rgba(220,80,80,0.45)] hover:text-[#DC5050] transition-colors flex-shrink-0" aria-label="Dismiss">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      )}

      {/* Document title — prominent */}
      <div className="mb-8">
        <input
          type="text"
          value={data.title}
          onChange={(e) => {
            set('title', e.target.value);
            if (!data.id) set('slug', autoSlug(e.target.value));
          }}
          placeholder="Project title…"
          className={`w-full bg-transparent text-[#1A1814] outline-none placeholder-[#CEC6B8] pb-3 transition-all ${
            titleError
              ? 'border-b-2 border-[#DC5050]'
              : 'border-b border-[#E8E4DC] focus:border-[#9AA880]'
          }`}
          style={{ fontFamily: 'var(--font-display, Georgia), serif', fontSize: 'clamp(1.5rem,2.2vw,1.9rem)', fontWeight: 500 }}
        />
        {titleError && <p className="text-[#DC5050] text-[11px] mt-1.5">A project title is required before saving.</p>}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Main column */}
        <div className="lg:col-span-2 space-y-5">

          <Section title="Core Details">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Location">
                <input type="text" value={data.projectLocation} onChange={(e) => set('projectLocation', e.target.value)}
                  placeholder="Greenville, NC" className={inputClass} />
              </Field>
              <Field label="Completion Date">
                <input type="text" value={data.completionDate} onChange={(e) => set('completionDate', e.target.value)}
                  placeholder="Spring 2024" className={inputClass} />
              </Field>
            </div>
            <Field
              label="Slug"
              hint={data.slug ? `Public URL → yardiedesign.com/work/${data.slug}` : 'Auto-generated from title'}
            >
              <input type="text" value={data.slug} onChange={(e) => set('slug', e.target.value)}
                placeholder="project-slug" className={inputClass + ' font-mono text-[12px]'} />
            </Field>
            <Field label="Summary" hint="One or two sentences shown in portfolio cards and search results">
              <textarea value={data.summary} onChange={(e) => set('summary', e.target.value)}
                rows={2} placeholder="A short description of what made this project exceptional…"
                className={inputClass + ' resize-none'} />
            </Field>
            <Field label="Full Description" hint="The detailed narrative shown on the project page">
              <textarea value={data.description} onChange={(e) => set('description', e.target.value)}
                rows={9} placeholder="Tell the full story of this project — the vision, the process, the result…"
                className={inputClass + ' resize-y'} />
            </Field>
          </Section>

          <Section title="Project Story" collapsible defaultOpen={false}>
            <p className="text-[12px] text-[#B8B0A4] -mt-1 mb-2 leading-relaxed">
              Optional editorial content shown in the &ldquo;The Project&rdquo; section on the project page.
            </p>
            <Field label="The Challenge" hint="What problem or constraint did this project address?">
              <textarea value={data.challenge} onChange={(e) => set('challenge', e.target.value)}
                rows={3} placeholder="e.g. The property had no outdoor gathering area and steep grade changes made the design challenging…"
                className={inputClass + ' resize-none'} />
            </Field>
            <Field label="Our Approach" hint="How did Yardie solve it?">
              <textarea value={data.approach} onChange={(e) => set('approach', e.target.value)}
                rows={3} placeholder="e.g. We designed a terraced bluestone patio with integrated seating walls and LED step lighting…"
                className={inputClass + ' resize-none'} />
            </Field>
            <Field label="Materials Used" hint="One material per line — shown as a list on the page">
              <textarea value={data.materials} onChange={(e) => set('materials', e.target.value)}
                rows={5} placeholder={"Tumbled bluestone pavers\nDry-stacked limestone walls\nLED landscape lighting"}
                className={inputClass + ' resize-none font-mono text-[12px] leading-relaxed'} />
            </Field>
          </Section>

          <Section title="Photography">
            <ImageUpload
              label="Featured Image"
              value={data.featuredImage}
              onChange={(url) => set('featuredImage', url)}
              hint="Shown in portfolio grid and project hero — portrait (4:5) works best"
            />
            <div className="pt-1">
              <MultiImageUpload
                label="Gallery"
                values={data.galleryImages}
                onChange={(urls) => set('galleryImages', urls)}
                hint="Project photos shown in the gallery section of the project page"
              />
            </div>
          </Section>

          <Section title="SEO" collapsible defaultOpen={false}>
            <p className="text-[12px] text-[#B8B0A4] -mt-1 mb-2 leading-relaxed">
              Controls how this project appears in Google and when shared on social media.
            </p>
            <Field label="Page Title" hint={`Defaults to "${data.title || 'Project Title'} — Exterior Design | Yardie Design" if left blank`}>
              <input type="text" value={data.seoTitle} onChange={(e) => set('seoTitle', e.target.value)}
                placeholder="Leave blank to use the default" className={inputClass} />
              <CharCount value={data.seoTitle} max={60} />
            </Field>
            <Field label="Meta Description" hint="Shown in Google search results and when the link is shared">
              <textarea value={data.seoDescription} onChange={(e) => set('seoDescription', e.target.value)}
                rows={3} placeholder="A clear, inviting description of this project for search engines…"
                className={inputClass + ' resize-none'} />
              <CharCount value={data.seoDescription} max={160} />
            </Field>
          </Section>
        </div>

        {/* Sidebar */}
        <div className="space-y-4 lg:sticky lg:top-6 self-start">

          <div className="bg-white border border-[#E8E4DC] overflow-hidden" style={{ borderRadius: '6px' }}>
            <div className="px-5 py-4 border-b border-[#F0ECE4] flex items-center justify-between">
              <h3 className="text-[11px] text-[#8C8478] tracking-[0.12em] uppercase font-[600]">Status</h3>
              <span
                className="text-[10px] tracking-[0.08em] uppercase font-[500] px-2.5 py-1 flex items-center gap-1.5"
                style={{
                  borderRadius: '3px',
                  background: isPublished ? 'rgba(122,140,90,0.1)' : 'rgba(184,160,138,0.12)',
                  color: isPublished ? '#4E6830' : '#8C7860',
                }}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${isPublished ? 'bg-[#7A8C5A]' : 'bg-[#C8B090]'}`} />
                {isPublished ? 'Published' : 'Draft'}
              </span>
            </div>
            <div className="p-4 space-y-2.5">
              <button
                type="button"
                onClick={() => handleSave('published')}
                disabled={saving}
                className="w-full bg-[#7A8C5A] text-white text-[11px] tracking-[0.12em] uppercase font-[500] py-2.5 hover:bg-[#6A7C4A] transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                style={{ borderRadius: '4px' }}
              >
                {saving ? (
                  <>
                    <svg className="animate-spin" width="11" height="11" viewBox="0 0 20 20" fill="none">
                      <circle cx="10" cy="10" r="8" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/>
                      <path d="M10 2a8 8 0 0 1 8 8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    Saving…
                  </>
                ) : isPublished ? 'Update Published' : 'Publish Project'}
              </button>
              <button
                type="button"
                onClick={() => handleSave('draft')}
                disabled={saving}
                className="w-full bg-white border border-[#D8D0C4] text-[#5C5548] text-[11px] tracking-[0.1em] uppercase font-[500] py-2 hover:border-[#8C8478] hover:text-[#1A1814] transition-colors disabled:opacity-50"
                style={{ borderRadius: '4px' }}
              >
                {isPublished ? 'Revert to Draft' : 'Save as Draft'}
              </button>
              {data.id && (
                <div className="pt-2 border-t border-[#F4F0EA]">
                  <label className="flex items-center gap-2.5 cursor-pointer group py-1">
                    <CustomCheckbox checked={data.featured} onChange={(v) => set('featured', v)} />
                    <span className="text-[12px] text-[#5C5548] group-hover:text-[#1A1814] transition-colors select-none">
                      Feature on homepage
                    </span>
                  </label>
                </div>
              )}
            </div>
          </div>

          <div className="bg-white border border-[#E8E4DC] overflow-hidden" style={{ borderRadius: '6px' }}>
            <div className="px-5 py-4 border-b border-[#F0ECE4]">
              <h3 className="text-[11px] text-[#8C8478] tracking-[0.12em] uppercase font-[600]">Services</h3>
              <p className="text-[11px] text-[#C0B8B0] mt-1">Select all that apply</p>
            </div>
            <div className="p-4 space-y-0.5">
              {SERVICE_TAGS.map((tag) => (
                <label key={tag} className="flex items-center gap-3 px-1 py-2 cursor-pointer group" style={{ borderRadius: '4px' }}>
                  <CustomCheckbox
                    checked={data.serviceCategories.includes(tag)}
                    onChange={(checked) => {
                      const next = checked
                        ? [...data.serviceCategories, tag]
                        : data.serviceCategories.filter((t) => t !== tag);
                      set('serviceCategories', next);
                    }}
                  />
                  <span className="text-[13px] text-[#5C5548] group-hover:text-[#1A1814] transition-colors select-none">{tag}</span>
                </label>
              ))}
            </div>
          </div>

          {data.id && (
            <div className="bg-white border border-[#EDE8E0]" style={{ borderRadius: '6px' }}>
              <div className="px-5 py-3.5">
                <button
                  type="button"
                  onClick={() => setShowDelete(true)}
                  className="text-[11px] text-[#C8A8A0] hover:text-[#DC5050] tracking-[0.03em] transition-colors flex items-center gap-2"
                >
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M2 4h10M5 4V2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V4M6 7v3M8 7v3M3 4l.6 7.5a.5.5 0 0 0 .5.5h5.8a.5.5 0 0 0 .5-.5L11 4"
                      stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                  Delete project…
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Delete modal */}
      {showDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6" style={{ background: 'rgba(26,24,20,0.65)', backdropFilter: 'blur(4px)' }}>
          <div className="bg-white max-w-[400px] w-full p-8 shadow-2xl" style={{ borderRadius: '10px' }}>
            <div className="w-11 h-11 bg-[rgba(220,80,80,0.09)] rounded-full flex items-center justify-center mb-5">
              <svg width="18" height="18" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M7 4v3.5M7 10h.01" stroke="#DC5050" strokeWidth="1.4" strokeLinecap="round"/>
                <circle cx="7" cy="7" r="6" stroke="#DC5050" strokeWidth="1.2"/>
              </svg>
            </div>
            <h2 className="text-[17px] text-[#1A1814] font-[500] mb-2">Delete this project?</h2>
            <p className="text-[13px] text-[#8C8478] mb-6 leading-relaxed">
              <strong className="text-[#1A1814]">&ldquo;{data.title}&rdquo;</strong> will be permanently removed from your portfolio and cannot be recovered.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowDelete(false)}
                className="flex-1 border border-[#D8D0C4] text-[#5C5548] text-[12px] tracking-[0.08em] uppercase font-[500] py-2.5 hover:border-[#8C8478] transition-colors"
                style={{ borderRadius: '4px' }}
              >
                Keep it
              </button>
              <button
                onClick={handleDelete}
                disabled={deleting}
                className="flex-1 bg-[#DC5050] text-white text-[12px] tracking-[0.08em] uppercase font-[500] py-2.5 hover:bg-[#C03838] transition-colors disabled:opacity-60"
                style={{ borderRadius: '4px' }}
              >
                {deleting ? 'Deleting…' : 'Yes, delete'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Sub-components ─────────────────────────────────────────────────────────────

const inputClass = 'w-full bg-[#FDFCFB] border border-[#E0D8CC] text-[#1A1814] text-[13px] px-3.5 py-2.5 outline-none focus:border-[#9AA880] focus:bg-white transition-colors placeholder-[#C8C0B0]' as const;

function Section({
  title,
  children,
  collapsible,
  defaultOpen = true,
}: {
  title: string;
  children: React.ReactNode;
  collapsible?: boolean;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="bg-white border border-[#E8E4DC] overflow-hidden" style={{ borderRadius: '6px' }}>
      <button
        type="button"
        onClick={() => collapsible && setOpen(!open)}
        className={`w-full flex items-center justify-between px-5 py-4 border-b border-[#F0ECE4] ${collapsible ? 'cursor-pointer hover:bg-[#FAF9F7] transition-colors' : 'cursor-default'}`}
      >
        <h2 className="text-[11px] text-[#8C8478] tracking-[0.12em] uppercase font-[600] text-left">{title}</h2>
        {collapsible && (
          <svg
            width="13" height="13" viewBox="0 0 12 12" fill="none"
            className={`text-[#C0B8B0] flex-shrink-0 transition-transform duration-200 ${open ? '' : '-rotate-90'}`}
            aria-hidden="true"
          >
            <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </button>
      {open && <div className="p-5 space-y-5">{children}</div>}
    </div>
  );
}

function Field({ label, children, hint, required }: { label: string; children: React.ReactNode; hint?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-[11px] text-[#5C5548] tracking-[0.08em] uppercase mb-2 font-[600]">
        {label}{required && <span className="text-[#DC5050] ml-0.5">*</span>}
      </label>
      {children}
      {hint && <p className="mt-1.5 text-[11px] text-[#B0A898] leading-relaxed">{hint}</p>}
    </div>
  );
}

function CharCount({ value, max }: { value: string; max: number }) {
  const len = value.length;
  const pct = Math.min(len / max, 1);
  const over = len > max;
  return (
    <div className="mt-1.5 flex items-center gap-3">
      <div className="flex-1 h-0.5 bg-[#F0ECE4] overflow-hidden rounded-full">
        <div
          className="h-full transition-all duration-300 rounded-full"
          style={{ width: `${pct * 100}%`, background: over ? '#DC5050' : pct > 0.85 ? '#B8A050' : '#7A8C5A' }}
        />
      </div>
      <p className={`text-[10px] flex-shrink-0 tabular-nums ${over ? 'text-[#DC5050]' : 'text-[#B8B0A4]'}`}>
        {len}/{max}
      </p>
    </div>
  );
}

function CustomCheckbox({ checked, onChange }: { checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className={`w-4 h-4 border flex items-center justify-center flex-shrink-0 transition-all duration-150 ${
        checked ? 'bg-[#7A8C5A] border-[#7A8C5A]' : 'border-[#D0C8BC] hover:border-[#9AA880] bg-white'
      }`}
      style={{ borderRadius: '3px' }}
    >
      {checked && (
        <svg width="9" height="9" viewBox="0 0 10 10" fill="none" aria-hidden="true">
          <path d="M2 5l2.5 2.5L8 3" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )}
    </button>
  );
}
