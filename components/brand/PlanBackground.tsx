import type { HTMLAttributes } from "react";

/**
 * PlanBackground — low-opacity plan-view drawing used behind heroes,
 * quote blocks, and select accent moments. Not on every section.
 */
type Props = {
  opacity?: number;              // 0.08 – 0.14 range
  variant?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
} & Omit<HTMLAttributes<HTMLDivElement>, "className">;

export function PlanBackground({
  opacity = 0.1,
  variant = 1,
  className = "",
  ...rest
}: Props) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      style={{ opacity }}
      {...rest}
    >
      <img
        src={`/plans/plan-${variant}.svg`}
        alt=""
        className="w-full h-full object-cover"
      />
    </div>
  );
}

export default PlanBackground;
