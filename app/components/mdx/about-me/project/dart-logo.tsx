import { ProjectPill } from '@/components/mdx/about-me/project/project-pill';
import Icon from './logos/dart.svg?react';

export function DartLogo() {
  return (
    <ProjectPill className="border border-dart bg-white">
      <Icon className="h-3" />
    </ProjectPill>
  );
}
