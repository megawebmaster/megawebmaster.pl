import { ProjectPill } from '@/components/mdx/about-me/project/project-pill';
import Icon from './logos/remix.svg?react';

export function RemixLogo() {
  return (
    <ProjectPill className="border border-black bg-white">
      <Icon className="h-3" />
      <span className="text-black text-xxs cursor-default">Remix</span>
    </ProjectPill>
  );
}
