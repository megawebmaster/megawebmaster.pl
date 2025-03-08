import { ProjectPill } from '@/components/mdx/about-me/project/project-pill';
import Icon from './logos/typescript.svg?react';

export function Typescript() {
  return (
    <ProjectPill className="border border-typescript bg-white">
      <Icon className="h-3" />
      <span className="text-typescript text-xxs cursor-default">TypeScript</span>
    </ProjectPill>
  );
}
