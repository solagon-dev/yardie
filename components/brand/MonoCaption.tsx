import type { HTMLAttributes } from "react";

/**
 * MonoCaption — JetBrains Mono caption for plan-view labels,
 * dimension callouts, stone-type tags, project numbers.
 */
type Props = {
  number?: string | number;       // e.g. "01"
  label: string;                  // e.g. "The drawing"
  indicator?: string;             // e.g. "↑N"
  size?: "sm" | "md";
  tone?: "moss" | "forest" | "limestone" | "ochre";
  className?: string;
} & Omit<HTMLAttributes<HTMLSpanElement>, "className">;

const toneMap: Record<NonNullable<Props["tone"]>, string> = {
  moss: "text-moss",
  forest: "text-forest",
  limestone: "text-limestone",
  ochre: "text-ochre",
};

export function MonoCaption({
  number,
  label,
  indicator,
  size = "md",
  tone = "moss",
  className = "",
  ...rest
}: Props) {
  const sizeClass = size === "sm" ? "mono-caption-sm" : "mono-caption";
  return (
    <span
      className={`${sizeClass} ${toneMap[tone]} uppercase inline-flex items-center justify-center gap-2 ${className}`}
      {...rest}
    >
      {number !== undefined && (
        <span className="tabular-nums">{String(number).padStart(2, "0")}</span>
      )}
      {number !== undefined && <span aria-hidden>·</span>}
      <span>{label}</span>
      {indicator && (
        <>
          <span aria-hidden>·</span>
          <span>{indicator}</span>
        </>
      )}
    </span>
  );
}

export default MonoCaption;
