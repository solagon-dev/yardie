import Link from "next/link";
export const metadata = { title: "Admin · Login", robots: { index: false, follow: false } };

export default function AdminLoginPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-32 text-center">
      <p className="label text-clay mb-7">Admin</p>
      <h1 className="font-display text-4xl text-bark font-light tracking-tight">Admin is not enabled.</h1>
      <p className="mt-6 text-[15.5px] text-earth">
        Authentication is currently disabled on this build.
      </p>
      <Link href="/" className="mt-8 inline-flex items-center justify-center text-[12px] tracking-[0.22em] uppercase text-moss hover:text-bark transition-colors">
        ← Back to site
      </Link>
    </div>
  );
}
