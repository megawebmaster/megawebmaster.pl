import { MoonIcon, SunIcon } from 'lucide-react';

import { Switch } from '@/components/ui/switch';
import { theme } from '@/cookies';

type ThemeToggleProps = {
  defaultTheme?: string;
}

export const ThemeToggle = ({ defaultTheme }: ThemeToggleProps) => {
  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle('dark');
    theme.serialize(isDark ? 'dark' : 'light').then((cookie) => {
      document.cookie = cookie;
    });
  };

  return (
    <div className="flex items-center gap-2">
      <SunIcon />
      <Switch defaultChecked={defaultTheme === 'dark'} onCheckedChange={toggleTheme} />
      <MoonIcon />
    </div>
  );
}
