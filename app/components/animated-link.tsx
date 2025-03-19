import type { ReactNode } from 'react';
import { Link } from 'react-router';
import { ChevronRightIcon } from 'lucide-react';

type AnimatedLinkProps = {
  children: ReactNode;
  to: string;
};

export function AnimatedLink({ children, to }: AnimatedLinkProps) {
  return (
    <Link className="group2 relative text-sm inline-flex gap-1 items-center underline hover:no-underline" to={to}>
      <span>{children}</span>
      <ChevronRightIcon className="opacity-0 size-[1em] transition-opacity duration-200 group-hover:opacity-100" />
      <ChevronRightIcon className="absolute -right-0 opacity-0 size-[1em] transition-all duration-200 group2-hover:opacity-100 group2-hover:-right-1" />
      <ChevronRightIcon className="absolute -right-1 opacity-0 size-[1em] transition-all delay-100 duration-200 group2-hover:opacity-100 group2-hover:-right-2" />
    </Link>
  );
}
