import type { JSX } from 'react';

type SocialLinkProps = {
  children: JSX.Element;
  href: string;
}

export const SocialLink = ({ children, href }: SocialLinkProps) => (
  <a className="hover:opacity-50" target="_blank" href={href}>
    {children}
  </a>
);
