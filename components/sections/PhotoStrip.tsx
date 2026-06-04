import Image from "next/image";

/**
 * SIGNATURE ELEMENT — full-bleed photo punctuation. No text, no CTA.
 * Lets a beautiful project shot breathe between content-heavy sections.
 */
export default function PhotoStrip({ src, alt, height = "60vh" }: {
  src: string;
  alt: string;
  height?: string;
}) {
  return (
    <section className="relative w-full overflow-hidden bg-bark" style={{ height: `clamp(420px, ${height}, 780px)` }}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="100vw"
        className="object-cover"
      />
    </section>
  );
}
