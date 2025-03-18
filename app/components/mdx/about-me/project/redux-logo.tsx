import { ProjectPill } from '@/components/mdx/about-me/project/project-pill';
import Icon from './logos/redux.svg?react';

export function ReduxLogo() {
  return (
    <ProjectPill className="border border-redux bg-white">
      <Icon className="h-3" />
      <span className="text-redux text-xxs cursor-default">Redux</span>
    </ProjectPill>
  );
}
