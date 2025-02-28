import { useState } from 'react';
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
import { AppLinks } from '@/components/app-links';

type AppDrawerProps = {
  theme?: string;
}

export const AppDrawer = ({ theme }: AppDrawerProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Drawer open={open} direction="right">
      <DrawerTrigger className="md:hidden" onClick={() => setOpen(true)}>
        <MenuIcon/>
        <span className="sr-only">Open menu</span>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="flex flex-row items-center">
          <DrawerTitle className="grow">Navigation</DrawerTitle>
          <DrawerClose>
            <XIcon/>
          </DrawerClose>
        </DrawerHeader>
        <div className="px-8 pb-8 flex flex-col gap-4">
          <AppLinks onClick={() => setOpen(false)}/>
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
  );
};
