import type { Route } from './+types/_index';
import { useLoadedVariant } from '@/hooks/use-loaded-variant';
import AboutMe, { description } from '@/content/about-me.mdx';

export function meta({}: Route.MetaArgs) {
  return [{ title: 'About me - megawebmaster.pl' }, { name: 'description', content: description }];
}

export default function Index() {
  useLoadedVariant();

  return (
    <div className="w-page mx-auto my-8 flex flex-col relative">
      <AboutMe />
    </div>
  );
}
