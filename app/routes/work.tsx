import type { Route } from './+types/_index';
import { useLoadedVariant } from '@/hooks/use-loaded-variant';
import WorkExperience, { description } from '@/content/work-experience.mdx';

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Work experience - megawebmaster.pl' }, { name: 'description', content: description }];
}

export default function Projects() {
  useLoadedVariant();

  return (
    <div className="w-page mx-auto my-16 px-4 md:px-16 flex flex-col relative">
      <WorkExperience />
    </div>
  );
}
