import type { ReactNode } from 'react';

export default ({ children }: { children: ReactNode }) => (
  <h1 className="text-3xl leading-tight">
    {children}
  </h1>
);
