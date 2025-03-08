import type { ReactNode } from 'react';

type PillsProps = {
  children: ReactNode;
};

export function Pills({ children }: PillsProps) {
  return <div className="flex flex-wrap justify-between items-center gap-2 mt-6 mb-2 lg:justify-start">{children}</div>;
}
