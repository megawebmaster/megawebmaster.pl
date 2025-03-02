import { MDXProvider } from '@mdx-js/react';

import type { Route } from './+types/resume';
import * as components from '@/components/mdx/resume';

import Bio from '@/content/resume/bio.mdx';
import Experience from '@/content/resume/experience.mdx';
import Expertise from '@/content/resume/expertise.mdx';
import Education from '@/content/resume/education.mdx';
import Languages from '@/content/resume/languages.mdx';
import SideProjects from '@/content/resume/side-projects.mdx';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Resume - megawebmaster.pl' },
    { name: 'description', content: `Amadeusz's resume` },
  ];
}

export default function Resume() {
  return (
    <MDXProvider components={components}>
      <div className="resume">
        <div className="left"/>
        <div className="bio">
          <Bio/>
        </div>
        <div className="experience">
          <Experience/>
        </div>
        <div className="side">
          <div className="expertise">
            <Expertise/>
          </div>
          <div>
            <SideProjects/>
          </div>
          <div>
            <Languages/>
          </div>
          <div>
            <Education/>
          </div>
        </div>
        <div className="image">
          <img src="/me.jpg" alt="Picture of Amadeusz" className="mx-auto mt-8 mb-2 rounded-full size-40"/>
        </div>
        <div className="right"/>
      </div>
    </MDXProvider>
  );
}
