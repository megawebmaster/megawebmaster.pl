import type { ReactNode } from 'react';
import { Link } from 'react-router';
import { ExternalLinkIcon } from 'lucide-react';

export default ({ children, href }: { children: ReactNode; href: string }) => {
  const isExternalLink = href.startsWith('http');

  if (isExternalLink) {
    return (
      <a href={href} className="group underline hover:no-underline" target="_blank" rel="noopener noreferrer">
        <span>{children}</span>
        <ExternalLinkIcon className="inline-block size-[.8em] align-baseline ms-0.5 opacity-75 group-hover:opacity-100" />
      </a>
    );
  }

  return (
    <Link to={href} className="underline hover:no-underline">
      {children}
    </Link>
  );
};
