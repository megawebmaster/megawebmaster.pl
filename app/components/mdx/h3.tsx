import type { ReactNode } from 'react';

export default ({ children }: { children: ReactNode }) => (
  <h3 className="text-2xl">
    {children}
  </h3>
);
