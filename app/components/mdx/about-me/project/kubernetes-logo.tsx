import { ProjectPill } from '@/components/mdx/about-me/project/project-pill';
import Icon from './logos/kubernetes.svg?react';

export function KubernetesLogo() {
  return (
    <ProjectPill className="border border-kubernetes bg-white">
      <Icon className="h-3" />
    </ProjectPill>
  );
}
