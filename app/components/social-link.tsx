import type { JSX } from 'react';

type SocialLinkProps = {
  children: JSX.Element | JSX.Element[];
  href: string;
};

export const SocialLink = ({ children, href }: SocialLinkProps) => (
  <a className="flex items-center gap-2 transition-opacity hover:opacity-50" target="_blank" href={href}>
    {children}
  </a>
);
