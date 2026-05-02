import type { ReactNode } from "react";

type Tone = "light" | "dark";
type Align = "left" | "center";

const toneClasses = {
  light: { heading: "text-bark", intro: "text-clay", italic: "text-moss" },
  dark:  { heading: "text-cream", intro: "text-cream/70", italic: "text-stone/85" },
};

export function SectionLabel({ children, tone = "light", className = "" }: {
  children: ReactNode; tone?: Tone; className?: string;
}) {
  const color = tone === "dark" ? "text-stone/85" : "text-clay";
  return (
    <p className={`label inline-flex items-center justify-center gap-3 ${color} ${className}`}>
      <span aria-hidden className={`block h-px w-7 ${tone === "dark" ? "bg-stone/50" : "bg-clay/50"}`} />
      {children}
    </p>
  );
}

export default function SectionHeading({
  label,
  headline,
  italicTail,
  intro,
  tone = "light",
  align = "left",
  size = "lg",
  className = "",
  introClassName = "",
}: {
  label?: string;
  headline: ReactNode;
  italicTail?: ReactNode;
  intro?: ReactNode;
  tone?: Tone;
  align?: Align;
  size?: "md" | "lg" | "xl";
  className?: string;
  introClassName?: string;
}) {
  const t = toneClasses[tone];

  const headingSize =
    size === "xl"
      ? "text-4xl sm:text-5xl lg:text-[64px]"
      : size === "lg"
      ? "text-4xl sm:text-5xl lg:text-[56px]"
      : "text-3xl sm:text-4xl lg:text-[44px]";

  const alignCls = align === "center" ? "text-center mx-auto" : "";

  return (
    <div className={`${alignCls} ${className}`}>
      {label && <SectionLabel tone={tone} className="mb-5 sm:mb-6">{label}</SectionLabel>}
      <h2
        className={`font-display ${headingSize} ${t.heading} leading-[1.04] tracking-tight max-w-[18ch]`}
        style={align === "center" ? { marginInline: "auto" } : undefined}
      >
        {headline}
        {italicTail && (
          <>
            {" "}<span className={`italic ${t.italic}`}>{italicTail}</span>
          </>
        )}
      </h2>
      {intro && (
        <p
          className={`mt-6 text-[16px] leading-relaxed max-w-xl ${t.intro} ${
            align === "center" ? "mx-auto" : ""
          } ${introClassName}`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
