import type { ReactNode } from 'react';

export default ({ children }: { children: ReactNode }) => (
  <ol className="list-decimal pl-6">
    {children}
  </ol>
);
