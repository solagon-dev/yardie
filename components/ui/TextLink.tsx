import NextLink from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

/**
 * TextLink — editorial inline link with animated underline slide.
 * Named TextLink (not Link) to avoid colliding with next/link.
 */
type Props = {
  href: string;
  children: ReactNode;
  tone?: "forest" | "ochre" | "limestone" | "ink";
  arrow?: boolean;
  external?: boolean;
  className?: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "href" | "children">;

const toneMap = {
  forest: "text-forest hover:text-ochre",
  ochre: "text-ochre hover:text-forest",
  limestone: "text-limestone hover:text-ochre",
  ink: "text-ink hover:text-ochre",
} as const;

export function TextLink({
  href,
  children,
  tone = "forest",
  arrow = false,
  external = false,
  className = "",
  ...rest
}: Props) {
  const classes = `link-underline transition-colors ${toneMap[tone]} ${className}`;

  const inner = (
    <>
      {children}
      {arrow && (
        <span aria-hidden className="ml-1 inline-block">
          →
        </span>
      )}
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
        {...rest}
      >
        {inner}
      </a>
    );
  }
  return (
    <NextLink href={href} className={classes} {...rest}>
      {inner}
    </NextLink>
  );
}

export default TextLink;
