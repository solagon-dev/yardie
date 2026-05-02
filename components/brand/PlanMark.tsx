import type { SVGProps } from "react";

/**
 * PlanMark — abstract plan-view icons drawn in thin moss strokes, no fills.
 * Used in service cards, section markers, service-area headers.
 */
type Variant = "tree" | "stone" | "patio" | "water" | "light" | "plant";

type Props = {
  variant: Variant;
  size?: number;
  className?: string;
} & Omit<SVGProps<SVGSVGElement>, "viewBox" | "width" | "height">;

export function PlanMark({
  variant,
  size = 40,
  className = "",
  ...rest
}: Props) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 40 40",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: `text-moss ${className}`,
    ...rest,
  };

  switch (variant) {
    case "tree":
      return (
        <svg {...common} aria-hidden="true">
          <circle cx="20" cy="20" r="13" />
          <path d="M20 7 v26 M7 20 h26 M11 11 l18 18 M29 11 l-18 18" />
          <circle cx="20" cy="20" r="2" fill="currentColor" />
        </svg>
      );
    case "stone":
      return (
        <svg {...common} aria-hidden="true">
          <path d="M6 24 L12 10 L24 8 L34 14 L32 28 L18 34 Z" />
          <path d="M12 10 L24 8 M24 8 L20 20 L32 28 M20 20 L18 34 M20 20 L34 14" />
        </svg>
      );
    case "patio":
      return (
        <svg {...common} aria-hidden="true">
          <rect x="5" y="5" width="30" height="30" />
          <line x1="5" y1="15" x2="35" y2="15" />
          <line x1="5" y1="25" x2="35" y2="25" />
          <line x1="15" y1="5" x2="15" y2="35" />
          <line x1="25" y1="5" x2="25" y2="35" />
        </svg>
      );
    case "water":
      return (
        <svg {...common} aria-hidden="true">
          <path d="M4 16 Q 10 12, 16 16 T 28 16 T 36 14" />
          <path d="M4 22 Q 10 18, 16 22 T 28 22 T 36 20" />
          <path d="M4 28 Q 10 24, 16 28 T 28 28 T 36 26" />
        </svg>
      );
    case "light":
      return (
        <svg {...common} aria-hidden="true">
          <circle cx="20" cy="20" r="4" fill="currentColor" />
          <line x1="20" y1="6" x2="20" y2="10" />
          <line x1="20" y1="30" x2="20" y2="34" />
          <line x1="6" y1="20" x2="10" y2="20" />
          <line x1="30" y1="20" x2="34" y2="20" />
          <line x1="10" y1="10" x2="13" y2="13" />
          <line x1="27" y1="27" x2="30" y2="30" />
          <line x1="10" y1="30" x2="13" y2="27" />
          <line x1="27" y1="13" x2="30" y2="10" />
        </svg>
      );
    case "plant":
      return (
        <svg {...common} aria-hidden="true">
          <path d="M20 34 V 16" />
          <path d="M20 22 Q 12 18, 10 10" />
          <path d="M20 22 Q 28 18, 30 10" />
          <path d="M20 28 Q 14 26, 12 20" />
          <path d="M20 28 Q 26 26, 28 20" />
          <line x1="14" y1="34" x2="26" y2="34" />
        </svg>
      );
  }
}

export default PlanMark;
