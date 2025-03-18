import type { ReactNode } from 'react';

import { Pill } from '@/components/pill';
import { cn } from '@/lib/utils';

type ProjectPillProps = {
  children: ReactNode;
  className?: string;
};

export function ProjectPill({ children, className }: ProjectPillProps) {
  return (
    <Pill className={cn('gap-1.5 mx-0.5 transition-transform duration-200 hover:scale-125', className)}>
      {children}
    </Pill>
  );
}
