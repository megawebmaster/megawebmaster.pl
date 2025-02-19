import { MoonIcon, SunIcon } from 'lucide-react';

import { Switch } from '@/components/ui/switch';
import { theme } from '@/cookies';
import { cn } from '@/lib/utils';

type ThemeToggleProps = {
  className?: string;
  defaultTheme?: string;
}

export const ThemeToggle = ({ className, defaultTheme }: ThemeToggleProps) => {
  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle('dark');
    theme.serialize(isDark ? 'dark' : 'light').then((cookie) => {
      document.cookie = cookie;
    });
  };

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <SunIcon />
      <Switch defaultChecked={defaultTheme === 'dark'} onCheckedChange={toggleTheme} />
      <MoonIcon />
    </div>
  );
}
