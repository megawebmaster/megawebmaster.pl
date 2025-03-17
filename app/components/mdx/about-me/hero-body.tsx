import type { ReactNode } from 'react';

type HeroBodyProps = {
  children: ReactNode;
};

export const HeroBody = ({ children }: HeroBodyProps) => <div className="flex flex-col md:pr-28">{children}</div>;
