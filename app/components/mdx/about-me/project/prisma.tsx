import { ProjectPill } from '@/components/mdx/about-me/project/project-pill';
import Icon from './logos/prisma.svg?react';

export function Prisma() {
  return (
    <ProjectPill className="border border-prisma bg-white">
      <Icon className="text-prisma h-3" />
    </ProjectPill>
  );
}
