import type { ReactNode } from 'react';

type HeroBodyProps = {
  children: ReactNode;
};

export const HeroBody = ({ children }: HeroBodyProps) => <div className="md:pr-28">{children}</div>;
