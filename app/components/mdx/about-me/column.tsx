import type { ReactNode } from 'react';

type ColumnProps = {
  children: ReactNode;
};

export const Column = ({ children }: ColumnProps) => <div className="flex flex-col gap-6">{children}</div>;
