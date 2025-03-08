import type { ReactNode } from 'react';

export default ({ children }: { children: ReactNode }) => (
  <h2 className="text-3xl leading-tight font-garet my-3 first:mt-0 last:mb-0">{children}</h2>
);
