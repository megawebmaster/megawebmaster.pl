import { ProjectPill } from '@/components/mdx/about-me/project/project-pill';
import Icon from './logos/mongodb.svg?react';

export function MongoLogo() {
  return (
    <ProjectPill className="border border-mongodb bg-white">
      <Icon className="h-3" />
    </ProjectPill>
  );
}
