import type { HTMLAttributes, ReactNode } from "react";

/**
 * Eyebrow — 13px uppercase, ochre by default, letter-spacing 0.12em.
 * The only uppercase moment on the site per §2.3.
 */
type Props = {
  children: ReactNode;
  tone?: "ochre" | "moss" | "limestone";
  as?: "span" | "p" | "div";
  className?: string;
} & Omit<HTMLAttributes<HTMLElement>, "className" | "children">;

const toneMap: Record<NonNullable<Props["tone"]>, string> = {
  ochre: "text-ochre",
  moss: "text-moss",
  limestone: "text-limestone/80",
};

export function Eyebrow({
  children,
  tone = "ochre",
  as: Tag = "span",
  className = "",
  ...rest
}: Props) {
  return (
    <Tag
      className={`eyebrow ${toneMap[tone]} ${
        tone !== "ochre" ? "text-[13px] font-semibold tracking-[0.12em] uppercase font-sans" : ""
      } ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export default Eyebrow;
