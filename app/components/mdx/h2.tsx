import type { ReactNode } from 'react';

export default ({ children }: { children: ReactNode }) => (
  <h2 className="text-3xl leading-tight font-garet">{children}</h2>
);
