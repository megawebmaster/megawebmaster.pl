import { ProjectPill } from '@/components/mdx/about-me/project/project-pill';
import Icon from './logos/kafka.svg?react';

export function Kafka() {
  return (
    <ProjectPill className="border bg-white">
      <Icon className="h-4" />
    </ProjectPill>
  );
}
