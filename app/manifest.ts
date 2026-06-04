import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Yardie — Exterior Design Studio in Greenville, NC",
    short_name: "Yardie",
    description:
      "Yardie designs and builds landscapes, hardscapes, masonry, lighting, and irrigation for homes across Eastern North Carolina.",
    start_url: "/",
    display: "standalone",
    background_color: "#F8F4EE",
    theme_color: "#1A1814",
    icons: [
      { src: "/yardie-favicon.svg", sizes: "any", type: "image/svg+xml" },
    ],
  };
}
