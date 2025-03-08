import type { ReactNode } from 'react';

type HeroHeaderProps = {
  children: ReactNode;
};

export const HeroHeader = ({ children }: HeroHeaderProps) => (
  <div className="flex flex-col gap-4 pb-8 text-foreground font-garet md:flex-row md:items-end">{children}</div>
);
