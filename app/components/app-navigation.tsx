import { Link } from 'react-router';

import { ThemeToggle } from '@/components/theme-toggle';
import { LinkedIn } from '@/components/linkedin';
import { GitHub } from '@/components/github';
import { SocialLink } from '@/components/social-link';
import { MenuIcon, XIcon } from 'lucide-react';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';

type NavigationProps = {
  theme?: string;
}

const Links = () => (
  <>
    <Link to="/" className="hover:opacity-50">About me</Link>
  </>
)

export const AppNavigation = ({ theme }: NavigationProps) => (
  <nav className="border-b flex justify-center">
    <div className="w-full px-4 self-center flex items-center gap-4 lg:w-page lg:px-0">
      <div className="grow py-2 flex gap-6 items-center font-galette">
        <Link to="/" className="inline-flex flex-col items-center mr-2 hover:opacity-50 md:mr-6">
          <img src="/logo_simple.png" className="size-8 md:size-12" alt="Home"/>
          <span className="text-xxs">megawebmaster</span>
        </Link>
        <div className="hidden md:block">
          <Links />
        </div>
      </div>
      <Drawer direction="right">
        <DrawerTrigger className="md:hidden">
          <MenuIcon />
          <span className="sr-only">Open menu</span>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader className="flex flex-row items-center">
            <DrawerTitle className="grow">Navigation</DrawerTitle>
            <DrawerClose>
              <XIcon />
            </DrawerClose>
          </DrawerHeader>
          <div className="px-8 pb-8 flex flex-col gap-4">
            <Links />
          </div>
          <h3 className="font-semibold px-4 pb-4">Socials</h3>
          <div className="px-8 flex flex-col gap-3">
            <SocialLink href="https://linkedin.com/in/amadeusz-starzykiewicz">
              <LinkedIn className="size-6"/>
              <span>LinkedIn</span>
            </SocialLink>
            <SocialLink href="https://github.com/megawebmaster">
              <GitHub className="size-6"/>
              <span>GitHub</span>
            </SocialLink>
          </div>
          <DrawerFooter>
            <ThemeToggle defaultTheme={theme} className="self-center"/>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      <div className="hidden gap-4 items-center md:flex">
        <ThemeToggle defaultTheme={theme} className="mr-4 hidden md:flex"/>
        <SocialLink href="https://linkedin.com/in/amadeusz-starzykiewicz">
          <LinkedIn className="size-6"/>
        </SocialLink>
        <SocialLink href="https://github.com/megawebmaster">
          <GitHub className="size-6"/>
        </SocialLink>
      </div>
    </div>
  </nav>
);
