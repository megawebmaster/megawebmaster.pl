import { ProjectPill } from '@/components/mdx/about-me/project/project-pill';
import Icon from './logos/symfony.svg?react';

export function SymfonyLogo() {
  return (
    <ProjectPill className="border border-black bg-white">
      <Icon className="text-black h-3" />
    </ProjectPill>
  );
}
