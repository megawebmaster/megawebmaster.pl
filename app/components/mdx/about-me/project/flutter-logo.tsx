import { ProjectPill } from '@/components/mdx/about-me/project/project-pill';
import Icon from './logos/flutter.svg?react';

export function FlutterLogo() {
  return (
    <ProjectPill className="border border-flutter bg-white">
      <Icon className="h-3" />
    </ProjectPill>
  );
}
