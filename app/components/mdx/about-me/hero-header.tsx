import type { ReactNode } from 'react';

type HeroHeaderProps = {
  children: ReactNode;
};

export const HeroHeader = ({ children }: HeroHeaderProps) => (
  <div className="relative md:-top-0.5 md:-left-1 opacity-50 transition-all duration-300 ease-in md:loaded:translate-y-0.5 md:loaded:translate-x-1 loaded:opacity-100 flex flex-col gap-4 pb-8 text-foreground font-garet md:flex-row md:items-end">
    {children}
  </div>
);
