import type { ReactNode } from 'react';
import { NavLink } from 'react-router';

type LinkProps = {
  children: ReactNode;
  onClick?: () => void;
  to: string;
};

const Link = ({ children, onClick, to }: LinkProps) => (
  <NavLink
    className={({ isActive }) => 'py-1 px-2 hover:opacity-50' + (isActive ? ' border-b border-accent' : '')}
    onClick={onClick}
    to={to}
    viewTransition
  >
    {children}
  </NavLink>
);

type LinksProps = {
  onClick?: () => void;
};

export const AppLinks = ({ onClick }: LinksProps) => (
  <>
    <Link to="/" onClick={onClick}>
      About me
    </Link>
    <Link to="/resume" onClick={onClick}>
      Resume
    </Link>
  </>
);
