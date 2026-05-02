import type { HTMLAttributes } from "react";

/**
 * SectionNumber — a large mono-font number in ochre, paired with an
 * eyebrow label. Used as a section marker throughout the site.
 */
type Props = {
  number: string | number;         // e.g. "01"
  label: string;                   // e.g. "What we do"
  className?: string;
} & Omit<HTMLAttributes<HTMLDivElement>, "className">;

export function SectionNumber({
  number,
  label,
  className = "",
  ...rest
}: Props) {
  const padded = String(number).padStart(2, "0");
  return (
    <div className={`flex items-baseline gap-4 ${className}`} {...rest}>
      <span className="font-mono text-ochre text-[15px] md:text-[17px] tabular-nums font-medium">
        {padded}
      </span>
      <span className="h-px w-6 bg-ochre self-center" aria-hidden />
      <span className="eyebrow">{label}</span>
    </div>
  );
}

export default SectionNumber;
