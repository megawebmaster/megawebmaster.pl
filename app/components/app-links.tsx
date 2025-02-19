import { Link } from 'react-router';

type LinksProps = {
  onClick?: () => void;
}

export const AppLinks = ({ onClick }: LinksProps) => (
  <>
    <Link to="/" className="hover:opacity-50" onClick={onClick}>About me</Link>
    <Link to="/resume" className="hover:opacity-50" onClick={onClick}>Resume</Link>
  </>
);
