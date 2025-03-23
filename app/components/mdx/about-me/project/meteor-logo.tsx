import { ProjectPill } from '@/components/mdx/about-me/project/project-pill';
import Icon from './logos/meteor.png';

export function MeteorLogo() {
  return (
    <ProjectPill className="border border-meteor bg-white">
      <img className="h-3" src={Icon} alt="Meteor.js" />
    </ProjectPill>
  );
}
