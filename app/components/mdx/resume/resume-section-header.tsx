import type { ReactNode } from 'react';

type ResumeSectionHeaderProps = {
  children: ReactNode;
}

export const ResumeSectionHeader = ({ children }: ResumeSectionHeaderProps) => (
  <div className="section-header">
    {children}
  </div>
);
