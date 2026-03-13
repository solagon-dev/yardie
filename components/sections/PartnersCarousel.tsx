'use client';

// Partner brands Yardie works with — update names/hrefs as needed
const partners = [
  { name: 'Belgard',              category: 'Hardscaping'      },
  { name: 'Techo-Bloc',           category: 'Pavers'           },
  { name: 'Buechel Stone',        category: 'Masonry'          },
  { name: 'Bob Timberlake Stone', category: 'Natural Stone'    },
  { name: 'Fire Rock',            category: 'Outdoor Fire'     },
  { name: 'FX Lighting',          category: 'Lighting'         },
  { name: 'Site One',             category: 'Landscape Supply' },
];

export default function PartnersCarousel() {
  // Duplicate array for seamless infinite loop
  const doubled = [...partners, ...partners];

  return (
    <div className="overflow-hidden" aria-hidden="true">
      <div
        className="flex gap-0 carousel-track"
        style={{ width: 'max-content' }}
      >
        {doubled.map((partner, i) => (
          <div
            key={i}
            className="flex items-center gap-0 flex-shrink-0"
          >
            <div
              className="flex flex-col items-start justify-center px-10 lg:px-14"
              style={{ minWidth: '180px' }}
            >
              <span
                className="font-display text-bark/40 font-[300] whitespace-nowrap"
                style={{ fontSize: 'clamp(1rem,1.2vw,1.15rem)', letterSpacing: '-0.01em' }}
              >
                {partner.name}
              </span>
              <span className="text-[9px] tracking-[0.18em] uppercase text-clay/40 mt-0.5 font-[500]">
                {partner.category}
              </span>
            </div>
            <div
              style={{
                width: '1px',
                height: '28px',
                background: 'var(--color-border-light)',
                flexShrink: 0,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
