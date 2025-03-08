import type { ReactNode } from 'react';

type HeroProps = {
  children: ReactNode;
};

export const Hero = ({ children }: HeroProps) => (
  <div className="hero relative z-10 p-8 pt-52 md:mt-4 md:mb-12 md:p-16 md:pr-52 lg:pt-16">{children}</div>
);
