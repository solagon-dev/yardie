"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

export type GalleryTile = {
  src: string;
  alt: string;
  /** width / height — landscape 4:3 → 1.333, portrait 3:4 → 0.75 */
  ratio: number;
};

const GAP = 12;

/**
 * Justified gallery (Flickr-style). Photos pack into rows that scale to
 * fill the container width exactly — every tile a different size, no
 * cropping. Tile heights match within a row; widths vary by aspect.
 */
export default function GalleryMosaic({
  tiles,
  className = "",
}: {
  tiles: GalleryTile[];
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(1200);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => setWidth(el.clientWidth);
    update();
    setMounted(true);
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const targetHeight = width < 640 ? 180 : width < 1024 ? 240 : 300;

  const rows = useMemo(() => {
    const out: { tiles: GalleryTile[]; height: number }[] = [];
    if (width <= 0 || tiles.length === 0) return out;

    let row: GalleryTile[] = [];
    let aspectSum = 0;

    for (let i = 0; i < tiles.length; i++) {
      row.push(tiles[i]);
      aspectSum += tiles[i].ratio;

      const gapsTotal = GAP * (row.length - 1);
      const naturalHeight = (width - gapsTotal) / aspectSum;
      const isLast = i === tiles.length - 1;

      if (naturalHeight <= targetHeight || isLast) {
        const height = isLast && naturalHeight > targetHeight ? targetHeight : naturalHeight;
        out.push({ tiles: row, height });
        row = [];
        aspectSum = 0;
      }
    }
    return out;
  }, [tiles, width, targetHeight]);

  return (
    <div ref={ref} className={`flex flex-col ${className}`} style={{ gap: `${GAP}px` }}>
      {!mounted && (
        <div aria-hidden className="bg-stone/50" style={{ height: `${targetHeight}px` }} />
      )}
      {mounted &&
        rows.map((row, i) => (
          <div key={i} className="flex" style={{ gap: `${GAP}px`, height: `${row.height}px` }}>
            {row.tiles.map((t, j) => (
              <figure
                key={`${i}-${j}-${t.src}`}
                className="relative overflow-hidden bg-stone group"
                style={{ flex: `${t.ratio} 1 0` }}
              >
                <Image
                  src={t.src}
                  alt={t.alt}
                  fill
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                  className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
                />
              </figure>
            ))}
          </div>
        ))}
    </div>
  );
}
