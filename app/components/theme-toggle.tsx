import { useState } from 'react';
import { MoonIcon, SunIcon, SunMoonIcon } from 'lucide-react';

import { theme as themeCookie } from '@/cookies';
import { cn } from '@/lib/utils';

type ThemeToggleProps = {
  className?: string;
  defaultTheme?: string;
};

const getNextTheme = () => {
  if (document.documentElement.classList.contains('light')) {
    return 'dark';
  }

  if (document.documentElement.classList.contains('dark')) {
    return 'light';
  }

  const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  return isSystemDark ? 'light' : 'dark';
};

export const ThemeToggle = ({ className, defaultTheme }: ThemeToggleProps) => {
  const [theme, setTheme] = useState(defaultTheme);
  const updateTheme = (newTheme: string) => {
    document.documentElement.classList.remove('dark', 'light', 'system');
    document.documentElement.classList.add(newTheme);

    setTheme(newTheme);
    themeCookie.serialize(newTheme).then((cookie) => {
      document.cookie = cookie;
    });
  };
  const toggleTheme = () => {
    updateTheme(getNextTheme());
  };

  return (
    <div className={cn('relative overflow-hidden w-24 h-10 md:w-16 md:h-6', className)}>
      <button
        className={cn('absolute cursor-pointer transition-all duration-300 hover:opacity-50', {
          'top-0 left-8 md:left-5': theme === 'light',
          'top-4 left-0 md:top-2': theme === 'system',
          'top-4 left-18 md:top-2 md:left-12': theme === 'dark',
        })}
        onClick={theme === 'light' ? toggleTheme : () => updateTheme('light')}
        title="Use light theme"
        type="button"
      >
        <SunIcon
          className={cn('transition-all duration-300', {
            'size-8 md:size-6': theme === 'light',
            'size-6 md:size-4': theme === 'system' || theme === 'dark',
          })}
        />
      </button>
      <button
        className={cn('absolute block cursor-pointer transition-all duration-300 hover:opacity-50', {
          'top-4 left-18 md:top-2 md:left-12': theme === 'light',
          'top-0 left-8 md:left-5': theme === 'system',
          'top-4 left-0 md:top-2': theme === 'dark',
        })}
        onClick={theme === 'system' ? toggleTheme : () => updateTheme('system')}
        title="Use system theme"
        type="button"
      >
        <SunMoonIcon
          className={cn('transition-all duration-300', {
            'size-8 md:size-6': theme === 'system',
            'size-6 md:size-4': theme === 'light' || theme === 'dark',
          })}
        />
      </button>
      <button
        className={cn('absolute block cursor-pointer transition-all duration-300 hover:opacity-50', {
          'top-4 left-0 md:top-2': theme === 'light',
          'top-4 left-18 md:top-2 md:left-12': theme === 'system',
          'top-0 left-8 md:left-5': theme === 'dark',
        })}
        onClick={theme === 'dark' ? toggleTheme : () => updateTheme('dark')}
        title="Use dark theme"
        type="button"
      >
        <MoonIcon
          className={cn('transition-all duration-300', {
            'size-8 md:size-6': theme === 'dark',
            'size-6 md:size-4': theme === 'light' || theme === 'system',
          })}
        />
      </button>
    </div>
  );
};
