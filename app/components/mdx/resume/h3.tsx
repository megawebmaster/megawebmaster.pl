import type { ReactNode } from 'react';

export default ({ children }: { children: ReactNode }) => (
  <h3 className="font-garet text-3xl tracking-wider">
    {children}
  </h3>
);
