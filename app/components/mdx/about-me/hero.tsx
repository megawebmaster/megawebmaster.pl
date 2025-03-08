import type { ReactNode } from 'react';

type HeroProps = {
  children: ReactNode;
};

export const Hero = ({ children }: HeroProps) => (
  <div className="relative z-10 my-4 p-8 pt-56 md:my-8 md:p-16 md:pr-52 lg:pt-24">{children}</div>
);
