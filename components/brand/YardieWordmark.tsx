import type { SVGProps } from "react";

/**
 * YardieWordmark — interim wordmark in Fraunces 600, letter-spacing -0.03em.
 * Rendered as inline SVG so it scales cleanly on any surface.
 * Used in header, footer, anywhere the logo was used before.
 */
type Props = {
  tone?: "forest" | "limestone" | "ink" | "ochre";
  size?: number;                       // height in px, width follows aspect ratio
  className?: string;
} & Omit<SVGProps<SVGSVGElement>, "width" | "height" | "viewBox" | "className">;

const toneMap: Record<NonNullable<Props["tone"]>, string> = {
  forest: "#2E3D2B",
  limestone: "#F5F0E6",
  ink: "#1A1F1A",
  ochre: "#B8832A",
};

export function YardieWordmark({
  tone = "forest",
  size = 28,
  className = "",
  ...rest
}: Props) {
  const fill = toneMap[tone];
  return (
    <svg
      role="img"
      aria-label="Yardie"
      width={size * 3.3}
      height={size}
      viewBox="0 0 260 80"
      className={className}
      {...rest}
    >
      <text
        x="0"
        y="58"
        fontFamily='"Fraunces", Georgia, serif'
        fontSize="64"
        fontWeight="600"
        letterSpacing="-1.9"
        fill={fill}
      >
        Yardie
      </text>
    </svg>
  );
}

export default YardieWordmark;
