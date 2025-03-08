import type { ReactNode } from 'react';

type ColumnsProps = {
  children: ReactNode;
};

export const Columns = ({ children }: ColumnsProps) => (
  <div className="grid gap-8 px-8 md:px-16 lg:grid-cols-2">{children}</div>
);
