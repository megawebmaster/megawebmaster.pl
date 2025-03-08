import { Link } from 'react-router';

import { ThemeToggle } from '@/components/theme-toggle';
import { LinkedIn } from '@/components/linkedin';
import { GitHub } from '@/components/github';
import { SocialLink } from '@/components/social-link';
import { AppLinks } from '@/components/app-links';
import { AppDrawer } from '@/components/app-drawer';

type NavigationProps = {
  theme?: string;
};

export const AppNavigation = ({ theme }: NavigationProps) => (
  <nav className="bg-resume text-resume-foreground flex justify-center">
    <div className="w-full px-4 self-center flex items-center gap-4 lg:w-page">
      <div className="grow py-2 flex gap-6 items-center font-inter">
        <Link to="/" className="inline-flex flex-col items-center mr-2 hover:opacity-50 md:mr-6">
          <img src="/logo_simple.png" className="size-8 md:size-12" alt="Home" />
          <span className="text-xxs font-galette">megawebmaster</span>
        </Link>
        <div className="hidden gap-6 md:flex">
          <AppLinks />
        </div>
      </div>
      <AppDrawer theme={theme} />
      <div className="hidden gap-4 items-center md:flex">
        <ThemeToggle defaultTheme={theme} className="mr-4 hidden md:flex" />
        <SocialLink href="https://linkedin.com/in/amadeusz-starzykiewicz">
          <LinkedIn className="size-6" />
        </SocialLink>
        <SocialLink href="https://github.com/megawebmaster">
          <GitHub className="size-6" />
        </SocialLink>
      </div>
    </div>
  </nav>
);
