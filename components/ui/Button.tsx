import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost-light" | "ghost-dark";
type Size = "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-bark text-cream hover:bg-earth border border-bark hover:border-earth",
  secondary:
    "bg-transparent text-bark border border-bark hover:bg-bark hover:text-cream",
  "ghost-light":
    "bg-cream/95 text-bark border border-bark/15 hover:bg-stone hover:border-bark/25",
  "ghost-dark":
    "bg-transparent text-cream border border-cream/30 hover:bg-cream/10 hover:border-cream/55",
};

const sizes: Record<Size, string> = {
  md: "px-7 py-3.5 text-[14px]",
  lg: "px-8 py-4 text-[15px]",
};

// Sentence/title-case, normal letter-spacing. The old base forced
// ` `, which is the single most recognisable
// AI-template button treatment; the label text already carries its own casing.
const base =
  "group inline-flex items-center justify-center gap-2.5 font-medium transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-moss focus-visible:ring-offset-2 focus-visible:ring-offset-cream";

function Arrow() {
  return (
    <svg
      className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
      fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
  );
}

type CommonProps = {
  variant?: Variant;
  size?: Size;
  arrow?: boolean;
  className?: string;
  children: ReactNode;
};

type LinkButtonProps = CommonProps & { href: string; external?: boolean } & Omit<
  ComponentPropsWithoutRef<"a">, "href" | "className" | "children"
>;

export function Button({
  variant = "primary",
  size = "lg",
  arrow = false,
  href,
  external,
  className = "",
  children,
  ...rest
}: LinkButtonProps) {
  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`.trim();

  if (external || /^(https?:|tel:|mailto:)/.test(href)) {
    return (
      <a href={href} className={cls} {...rest}>
        {children}{arrow && <Arrow />}
      </a>
    );
  }

  return (
    <Link href={href} className={cls} {...rest}>
      {children}{arrow && <Arrow />}
    </Link>
  );
}

/**
 * Quiet navigational link. The old treatment was "label + a right-arrow with a
 * long shaft", which read as generic/templated. This is an editorial underline:
 * a faint rule at rest that a moss line draws across on hover. No arrow.
 */
export function TextLink({
  href,
  children,
  tone = "dark",
  className = "",
}: {
  href: string;
  children: ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  const toneCls =
    tone === "dark"
      ? "text-bark hover:text-moss"
      : "text-cream/90 hover:text-cream";
  const drawCls = tone === "dark" ? "bg-moss" : "bg-cream";
  return (
    <Link
      href={href}
      className={`group inline-block text-[14px] font-medium transition-colors duration-300 ${toneCls} ${className}`}
    >
      <span className="relative pb-1">
        {children}
        {/* rest state — a faint baseline the eye can pick up */}
        <span aria-hidden className="absolute inset-x-0 bottom-0 h-px bg-current opacity-20" />
        {/* hover — a crisp line sweeps in from the left */}
        <span
          aria-hidden
          className={`absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100 ${drawCls}`}
        />
      </span>
    </Link>
  );
}

export default Button;
