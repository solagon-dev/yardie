import Link from 'next/link';

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  external?: boolean;
  'aria-label'?: string;
}

const base =
  'inline-block font-sans font-[500] tracking-[0.16em] uppercase text-[10px] transition-all duration-300';

const variants = {
  primary: 'bg-bark text-cream hover:bg-earth',
  outline: 'border border-bark text-bark hover:bg-bark hover:text-cream',
  ghost: 'border border-[rgba(248,244,238,0.35)] text-cream hover:border-[rgba(248,244,238,0.75)] hover:bg-[rgba(248,244,238,0.06)]',
};

const sizes = {
  sm: 'px-5 py-[10px]',
  md: 'px-8 py-[14px]',
  lg: 'px-10 py-[18px]',
};

export default function Button({
  href,
  onClick,
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  external = false,
  'aria-label': ariaLabel,
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer" aria-label={ariaLabel}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
