import type { ReactNode } from 'react';

import { Pill } from '@/components/pill';
import { cn } from '@/lib/utils';

type ProjectPillProps = {
  children: ReactNode;
  className?: string;
};

export function ProjectPill({ children, className }: ProjectPillProps) {
  return <Pill className={cn('gap-2 transition-transform duration-200 hover:scale-110', className)}>{children}</Pill>;
}
