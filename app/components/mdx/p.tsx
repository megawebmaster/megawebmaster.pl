import type { ReactNode } from 'react';

export default ({ children }: { children: ReactNode }) => (
  <p className="my-2">
    {children}
  </p>
);
