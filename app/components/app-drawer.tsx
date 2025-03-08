import { useState } from 'react';

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
};

export const AppDrawer = ({ theme }: AppDrawerProps) => {
  const [open, setOpen] = useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <Drawer open={open} direction="right" onClose={closeDrawer}>
      <DrawerTrigger className="md:hidden" onClick={openDrawer}>
        <MenuIcon />
        <span className="sr-only">Open menu</span>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="flex flex-row items-center">
          <DrawerTitle className="grow">Navigation</DrawerTitle>
          <DrawerClose onClick={closeDrawer}>
            <XIcon />
          </DrawerClose>
        </DrawerHeader>
        <div className="px-8 pb-8 flex flex-col gap-4">
          <AppLinks onClick={closeDrawer} />
        </div>
        <h3 className="font-semibold px-4 pb-4">Socials</h3>
        <div className="px-8 flex flex-col gap-3">
          <SocialLink href="https://linkedin.com/in/amadeusz-starzykiewicz">
            <LinkedIn className="size-6" />
            <span>LinkedIn</span>
          </SocialLink>
          <SocialLink href="https://github.com/megawebmaster">
            <GitHub className="size-6" />
            <span>GitHub</span>
          </SocialLink>
        </div>
        <DrawerFooter>
          <ThemeToggle defaultTheme={theme} className="self-center" />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
