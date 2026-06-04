import type { SVGProps } from "react";

/**
 * YardieMark — a plan-view monogram: "Y" abstracted into a tree-plan shape.
 * Two divergent strokes from a single base point. Used for favicon,
 * social avatars, small-space applications.
 */
type Props = {
  tone?: "forest" | "limestone" | "ochre" | "ink";
  size?: number;                        // square; size = width = height
  className?: string;
} & Omit<SVGProps<SVGSVGElement>, "width" | "height" | "viewBox" | "className">;

const toneMap: Record<NonNullable<Props["tone"]>, string> = {
  forest: "#2E3D2B",
  limestone: "#F5F0E6",
  ochre: "#B8832A",
  ink: "#1A1F1A",
};

export function YardieMark({
  tone = "forest",
  size = 40,
  className = "",
  ...rest
}: Props) {
  const color = toneMap[tone];
  return (
    <svg
      role="img"
      aria-label="Yardie monogram"
      width={size}
      height={size}
      viewBox="0 0 40 40"
      className={className}
      {...rest}
    >
      {/* A square plate — the "property line" */}
      <rect
        x="2"
        y="2"
        width="36"
        height="36"
        fill="none"
        stroke={color}
        strokeWidth="1"
      />
      {/* The Y — two diverging strokes from a single base */}
      <path
        d="M20 30 V 22 L 12 10 M 20 22 L 28 10"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* A plan-view tree crown at the base */}
      <circle cx="20" cy="32" r="2" fill={color} />
    </svg>
  );
}

export default YardieMark;
