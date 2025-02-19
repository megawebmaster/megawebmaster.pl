import { MoonIcon, SunIcon } from 'lucide-react';
import { useState } from 'react';

import { Switch } from '@/components/ui/switch';
import { theme as themeCookie } from '@/cookies';
import { cn } from '@/lib/utils';

type ThemeToggleProps = {
  className?: string;
  defaultTheme?: string;
}

export const ThemeToggle = ({ className, defaultTheme }: ThemeToggleProps) => {
  const [theme, setTheme] = useState(defaultTheme);
  const toggleTheme = () => {
    updateTheme(document.documentElement.classList.contains('dark') ? 'light' : 'dark');
  };
  const updateTheme = (newTheme: string) => {
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    setTheme(newTheme);
    themeCookie.serialize(newTheme).then((cookie) => {
      document.cookie = cookie;
    });
  };

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <SunIcon className="hover:opacity-50 cursor-pointer" onClick={() => updateTheme('light')} />
      <Switch checked={theme === 'dark'} onCheckedChange={toggleTheme} />
      <MoonIcon className="hover:opacity-50 cursor-pointer" onClick={() => updateTheme('dark')} />
    </div>
  );
}
