import type { SVGProps } from "react";

/**
 * DraftRule — a drafted pencil rule with slight hand-drawn wobble.
 * Replaces <hr> and CSS hairlines as the signature visual section divider.
 * Horizontal (default) or vertical.
 */
type Props = {
  orientation?: "horizontal" | "vertical";
  length?: number | string;
  color?: string;
  className?: string;
} & Omit<SVGProps<SVGSVGElement>, "orientation" | "width" | "height" | "color">;

export function DraftRule({
  orientation = "horizontal",
  length = "100%",
  color = "currentColor",
  className = "",
  ...rest
}: Props) {
  if (orientation === "vertical") {
    return (
      <svg
        aria-hidden="true"
        width="2"
        height={length}
        viewBox="0 0 2 200"
        preserveAspectRatio="none"
        className={`text-moss ${className}`}
        {...rest}
      >
        <path
          d="M1 0 Q 0.6 50, 1 100 T 1 200"
          stroke={color}
          strokeWidth="1"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      width={length}
      height="2"
      viewBox="0 0 1000 2"
      preserveAspectRatio="none"
      className={`text-moss ${className}`}
      {...rest}
    >
      <path
        d="M0 1 Q 250 0.6, 500 1 T 1000 1"
        stroke={color}
        strokeWidth="1"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default DraftRule;
