import { ProjectPill } from '@/components/mdx/about-me/project/project-pill';
import Icon from './logos/rxjs.svg?react';

export function RxjsLogo() {
  return (
    <ProjectPill className="border border-rxjs bg-white">
      <Icon className="h-3" />
      <span className="text-rxjs text-xxs cursor-default">RxJs</span>
    </ProjectPill>
  );
}
