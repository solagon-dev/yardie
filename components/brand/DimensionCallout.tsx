import type { HTMLAttributes } from "react";

/**
 * DimensionCallout — dimension line with arrows at each end and
 * a mono-font measurement label in the middle. Used decoratively
 * on portfolio pages and as a unit of visual language.
 */
type Props = {
  label: string;                        // e.g. "24'-6\""
  orientation?: "horizontal" | "vertical";
  className?: string;
} & Omit<HTMLAttributes<HTMLDivElement>, "className">;

export function DimensionCallout({
  label,
  orientation = "horizontal",
  className = "",
  ...rest
}: Props) {
  if (orientation === "vertical") {
    return (
      <div
        className={`flex flex-col items-center gap-2 text-moss ${className}`}
        {...rest}
      >
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
          <path d="M4 0 L0 6 H8 Z" fill="currentColor" />
        </svg>
        <div className="flex-1 w-px bg-current min-h-[40px]" />
        <span className="mono-caption-sm uppercase whitespace-nowrap" style={{ writingMode: "vertical-rl" }}>
          {label}
        </span>
        <div className="flex-1 w-px bg-current min-h-[40px]" />
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
          <path d="M4 8 L0 2 H8 Z" fill="currentColor" />
        </svg>
      </div>
    );
  }

  return (
    <div
      className={`flex items-center gap-2 text-moss ${className}`}
      {...rest}
    >
      <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
        <path d="M0 4 L6 0 V8 Z" fill="currentColor" />
      </svg>
      <div className="flex-1 h-px bg-current min-w-[40px]" />
      <span className="mono-caption-sm uppercase whitespace-nowrap">{label}</span>
      <div className="flex-1 h-px bg-current min-w-[40px]" />
      <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
        <path d="M8 4 L2 0 V8 Z" fill="currentColor" />
      </svg>
    </div>
  );
}

export default DimensionCallout;
