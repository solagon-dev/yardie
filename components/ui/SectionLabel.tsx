import type { CSSProperties } from 'react';

interface SectionLabelProps {
  children: React.ReactNode;
  light?: boolean;
  className?: string;
  style?: CSSProperties;
}

export default function SectionLabel({ children, light = false, className = '', style }: SectionLabelProps) {
  return (
    <p className={`${light ? 'label-light' : 'label'} ${className}`} style={style}>
      {children}
    </p>
  );
}
