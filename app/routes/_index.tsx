import { MDXProvider } from '@mdx-js/react';

import type { Route } from './+types/_index';
import AboutMe, { description } from '@/content/about-me.mdx';

import * as components from '@/components/mdx/about-me';

export function meta({}: Route.MetaArgs) {
  return [{ title: 'About me - megawebmaster.pl' }, { name: 'description', content: description }];
}

export default function Index() {
  return (
    <MDXProvider components={components}>
      <div className="w-page mx-auto flex flex-col relative">
        <AboutMe />
      </div>
    </MDXProvider>
  );
}
