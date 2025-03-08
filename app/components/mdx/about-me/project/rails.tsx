import { ProjectPill } from '@/components/mdx/about-me/project/project-pill';
import Icon from './logos/rails.svg?react';

export function Rails() {
  return (
    <ProjectPill className="border border-rails bg-white">
      <Icon className="text-rails h-3" />
    </ProjectPill>
  );
}
