import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

type PillProps = {
  children: ReactNode;
  className?: string;
};

export function Pill({ children, className }: PillProps) {
  return <div className={cn('inline-flex items-center text-xs px-2 py-1 rounded-full', className)}>{children}</div>;
}
