import { useLayoutEffect } from 'react';
import { isRouteErrorResponse, Link, Links, Meta, Outlet, Scripts, ScrollRestoration, } from 'react-router';

import type { Route } from './+types/root';
import { ThemeToggle } from '@/components/theme-toggle';
import { theme } from '@/cookies';

import './app.css';

export const links: Route.LinksFunction = () => [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
  { rel: 'icon', href: '/favicon.ico' },
  { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
  { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
  { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
  { rel: 'manifest', href: '/manifest.json' },
];

export function Document({ children, theme }: { children: React.ReactNode, theme?: string }) {
  return (
    <html lang="en" className={theme}>
    <head>
      <meta charSet="utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <Meta/>
      <Links/>
    </head>
    <body>
    {children}
    <ScrollRestoration/>
    <Scripts/>
    </body>
    </html>
  );
}

export async function loader({ request }: Route.LoaderArgs) {
  const cookieHeader = request.headers.get('Cookie');
  const themeCookie: string | undefined = (await theme.parse(cookieHeader)) || undefined;

  return { theme: themeCookie };
}

export default function App({ loaderData }: Route.ComponentProps) {
  useLayoutEffect(() => {
    const isDark = loaderData.theme === 'dark' || (loaderData.theme === null && window.matchMedia('(prefers-color-scheme: dark)').matches);
    document.documentElement.classList.toggle('dark', isDark);
  }, [loaderData.theme]);

  return (
    <Document theme={loaderData.theme}>
      <div className="min-h-screen w-full flex flex-col gap-4">
        <nav className="w-7xl self-center flex items-center gap-4">
          <div className="grow">
            <Link to="/"><img src="/logo.png" alt="Home"/></Link>
          </div>
          <div>
            <ThemeToggle defaultTheme={loaderData.theme}/>
          </div>
        </nav>
        <main className="grow">
          <Outlet/>
        </main>
        <footer className="w-7xl self-center px-4 py-2">
          <p className="text-center text-sm">
            Made with ❤️ in Poland, &copy;{new Date().getFullYear()} Amadeusz Starzykiewicz
          </p>
        </footer>
      </div>
    </Document>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = 'Oops!';
  let details = 'An unexpected error occurred.';
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? '404' : 'Error';
    details =
      error.status === 404
        ? 'The requested page could not be found.'
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
