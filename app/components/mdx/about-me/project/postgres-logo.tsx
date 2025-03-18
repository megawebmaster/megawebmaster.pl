import { ProjectPill } from '@/components/mdx/about-me/project/project-pill';
import Icon from './logos/postgres.svg?react';

export function PostgresLogo() {
  return (
    <ProjectPill className="border border-postgres bg-white">
      <Icon className="h-3" />
      <span className="text-postgres text-xxs cursor-default">Postgres</span>
    </ProjectPill>
  );
}
