import { ProjectPill } from '@/components/mdx/about-me/project/project-pill';
import Icon from './logos/react.svg?react';

export function ReactLogo() {
  return (
    <ProjectPill className="border border-react bg-white">
      <Icon className="h-3" />
      <span className="text-react text-xxs cursor-default">React</span>
    </ProjectPill>
  );
}
