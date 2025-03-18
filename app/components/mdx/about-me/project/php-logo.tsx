import { ProjectPill } from '@/components/mdx/about-me/project/project-pill';
import Icon from './logos/php.svg?react';

export function PhpLogo() {
  return (
    <ProjectPill className="border border-php bg-white">
      <Icon className="text-php h-3" />
    </ProjectPill>
  );
}
