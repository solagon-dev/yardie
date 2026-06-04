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
  md: "px-7 py-3.5 text-[12px]",
  lg: "px-9 py-4 text-[13px]",
};

const base =
  "group inline-flex items-center justify-center gap-2.5 font-medium tracking-[0.2em] uppercase transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-moss focus-visible:ring-offset-2 focus-visible:ring-offset-cream";

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

export function TextLink({
  href,
  children,
  tone = "dark",
  arrow = true,
  className = "",
}: {
  href: string;
  children: ReactNode;
  tone?: "dark" | "light";
  arrow?: boolean;
  className?: string;
}) {
  const toneCls =
    tone === "dark"
      ? "text-bark hover:text-moss"
      : "text-cream hover:text-stone";
  const ruleCls =
    tone === "dark"
      ? "bg-bark group-hover:bg-moss"
      : "bg-cream/70 group-hover:bg-stone";
  return (
    <Link
      href={href}
      className={`group inline-flex items-center justify-center gap-3 text-[11px] tracking-[0.22em] uppercase font-medium transition-colors duration-300 ${toneCls} ${className}`}
    >
      <span aria-hidden className={`block h-px w-6 transition-all duration-500 ease-out group-hover:w-10 ${ruleCls}`} />
      {children}
      {arrow && <Arrow />}
    </Link>
  );
}

export default Button;
