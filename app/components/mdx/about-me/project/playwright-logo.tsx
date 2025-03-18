import { ProjectPill } from '@/components/mdx/about-me/project/project-pill';
import Icon from './logos/playwright.svg?react';

export function PlaywrightLogo() {
  return (
    <ProjectPill className="border bg-white">
      <Icon className="h-3" />
      <span className="text-black text-xxs cursor-default">Playwright</span>
    </ProjectPill>
  );
}
