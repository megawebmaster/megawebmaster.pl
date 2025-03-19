import type { Route } from './+types/_index';
import { useLoadedVariant } from '@/hooks/use-loaded-variant';
import PersonalProjects, { description } from '@/content/personal-projects.mdx';

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Personal projects - megawebmaster.pl' }, { name: 'description', content: description }];
}

export default function Projects() {
  useLoadedVariant();

  return (
    <div className="w-page mx-auto my-16 px-4 md:px-16 flex flex-col relative">
      <PersonalProjects />
    </div>
  );
}
