import type { ReactNode } from 'react';

export default ({ children }: { children: ReactNode }) => (
  <h1 className="text-4xl leading-tight my-4 first:mt-0 last:mb-0">{children}</h1>
);
