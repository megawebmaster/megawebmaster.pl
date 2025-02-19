import { useLayoutEffect } from 'react';
import { isRouteErrorResponse, Link, Links, Meta, Outlet, Scripts, ScrollRestoration, } from 'react-router';

import type { Route } from './+types/root';
import { theme } from '@/cookies';
import { ThemeToggle } from '@/components/theme-toggle';
import { SocialLink } from '@/components/social-link';
import { LinkedIn } from '@/components/linkedin';
import { GitHub } from '@/components/github';


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
      <div className="min-h-screen w-full flex flex-col text-accent">
        <nav className="border-b flex justify-center">
          <div className="w-page self-center flex items-center gap-4">
            <div className="grow py-2 flex gap-6 items-center font-galette">
              <Link to="/" className="inline-flex flex-col items-center mr-6 hover:opacity-50">
                <img src="/logo_simple.png" className="size-12" alt="Home"/>
                <span className="text-xxs">megawebmaster</span>
              </Link>
              <Link to="/" className="hover:opacity-50">About me</Link>
              <Link to="/" className="hover:opacity-50">My projects</Link>
              <Link to="/" className="hover:opacity-50">Resume</Link>
            </div>
            <div className="flex gap-4 items-center">
              <ThemeToggle defaultTheme={loaderData.theme} className="mr-4"/>
              <SocialLink href="https://linkedin.com/in/amadeusz-starzykiewicz">
                <LinkedIn className="size-6"/>
              </SocialLink>
              <SocialLink href="https://github.com/megawebmaster">
                <GitHub className="size-6"/>
              </SocialLink>
            </div>
          </div>
        </nav>
        <main className="flex grow bg-primary-foreground">
          <Outlet/>
        </main>
        <footer className="flex justify-center border-t px-4 py-2">
          <div className="w-page">
            <p className="text-center text-sm">
              Made with ❤️ in Poland, &copy;{new Date().getFullYear()} Amadeusz Starzykiewicz
            </p>
          </div>
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
