import { ProjectPill } from '@/components/mdx/about-me/project/project-pill';
import Icon from './logos/strapi.svg?react';

export function StrapiLogo() {
  return (
    <ProjectPill className="border border-strapi bg-white">
      <Icon className="h-3" />
    </ProjectPill>
  );
}
