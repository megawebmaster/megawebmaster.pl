import { ProjectPill } from '@/components/mdx/about-me/project/project-pill';
import Icon from './logos/javascript.svg?react';

export function JavascriptLogo() {
  return (
    <ProjectPill className="border border-javascript bg-white">
      <Icon className="h-3" />
      <span className="text-black text-xxs cursor-default">JavaScript</span>
    </ProjectPill>
  );
}
