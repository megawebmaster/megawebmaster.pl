import { ProjectPill } from '@/components/mdx/about-me/project/project-pill';
import Icon from './logos/alpine.svg?react';

export function Alpine() {
  return (
    <ProjectPill className="border border-javascript bg-white">
      <Icon className="h-3" />
    </ProjectPill>
  );
}
