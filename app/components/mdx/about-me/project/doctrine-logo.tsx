import { ProjectPill } from '@/components/mdx/about-me/project/project-pill';
import Icon from './logos/doctrine.svg?react';

export function DoctrineLogo() {
  return (
    <ProjectPill className="border border-doctrine bg-white">
      <Icon className="h-3" />
      <span className="text-doctrine text-xxs cursor-default">Doctrine</span>
    </ProjectPill>
  );
}
