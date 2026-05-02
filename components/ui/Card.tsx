import type { HTMLAttributes, ReactNode } from "react";

/**
 * Card — paper or limestone surface with 1px moss border. No shadow, no radius.
 */
type Props = {
  children: ReactNode;
  surface?: "paper" | "limestone" | "sand";
  bordered?: boolean;
  padded?: boolean;
  className?: string;
} & Omit<HTMLAttributes<HTMLDivElement>, "className" | "children">;

const surfaceMap: Record<NonNullable<Props["surface"]>, string> = {
  paper: "bg-paper",
  limestone: "bg-limestone",
  sand: "bg-sand",
};

export function Card({
  children,
  surface = "paper",
  bordered = true,
  padded = true,
  className = "",
  ...rest
}: Props) {
  return (
    <div
      className={`${surfaceMap[surface]} ${
        bordered ? "border border-moss/40" : ""
      } ${padded ? "p-6 md:p-8" : ""} ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}

export default Card;
