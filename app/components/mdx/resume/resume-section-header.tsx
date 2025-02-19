import type { ReactNode } from 'react';

type ResumeSectionHeaderProps = {
  children: ReactNode;
  color: 'accent' | 'resume-foreground'
}

export const ResumeSectionHeader = ({ children, color }: ResumeSectionHeaderProps) => (
  <div className={`border-b border-${color} pb-2`}>
    {children}
  </div>
);
