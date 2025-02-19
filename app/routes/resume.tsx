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
  // TODO: Make it work for mobiles (image on blue on top, then my name and experience)
  return (
    <MDXProvider components={components}>
      <div className="grow grid grid-cols-5">
        <div className="bg-resume"/>
        <div className="col-start-2 bg-resume text-resume-foreground py-8 pl-8 flex flex-col gap-10">
          <img src="/me.jpg" alt="Picture of Amadeusz" className="mx-auto mt-8 mb-2 rounded-full size-40"/>
          <div className="flex flex-col gap-6">
            <Expertise/>
          </div>
          <div className="flex flex-col gap-6">
            <SideProjects/>
          </div>
          <div className="flex flex-col gap-6">
            <Languages/>
          </div>
          <div className="flex flex-col gap-6">
            <Education/>
          </div>
        </div>
        <div className="col-span-2 bg-background text-accent p-8">
          <div className="my-10">
            <Bio/>
          </div>
          <Experience/>
        </div>
        <div className="bg-background"/>
      </div>
    </MDXProvider>
  );
}
