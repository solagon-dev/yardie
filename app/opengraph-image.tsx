import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Yardie — Exterior Design Studio in Greenville, NC";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px 96px",
          background:
            "linear-gradient(135deg, #1A1814 0%, #252118 60%, #3D3830 100%)",
          color: "#F8F4EE",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#9E9488",
            display: "flex",
            alignItems: "center",
            gap: 18,
          }}
        >
          <div style={{ width: 56, height: 1, background: "#9E9488" }} />
          Yardie · Greenville, NC
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{ fontSize: 96, lineHeight: 1.0, fontWeight: 300, letterSpacing: "-0.012em" }}>
            Designed outdoor
          </div>
          <div style={{ fontSize: 96, lineHeight: 1.0, fontStyle: "italic", color: "#E4DDD4", fontWeight: 300, letterSpacing: "-0.012em" }}>
            living spaces.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            color: "#9E9488",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          <div style={{ fontSize: 22, lineHeight: 1.4, maxWidth: 540 }}>
            Landscape · Hardscape · Masonry · Lighting · Irrigation
          </div>
          <div style={{ fontSize: 18, letterSpacing: "0.18em", textTransform: "uppercase" }}>
            yardiedesign.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
