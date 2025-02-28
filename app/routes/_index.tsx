import type { Route } from './+types/_index';
import AboutMe, { description } from '@/content/about-me.mdx';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'About me - megawebmaster.pl' },
    { name: 'description', content: description },
  ];
}

export default function Index() {
  return (
    <div className="w-page mx-auto flex flex-col my-4">
      <div className="relative">
        <div className="absolute top-0 right-0 z-0">
          <picture>
            <source type="image/webp" srcSet="/amadeusz.webp, /amadeusz@2x.webp 2x"/>
            <source type="image/png" srcSet="/amadeusz.png, /amadeusz@2x.png 2x"/>
            <img src="/amadeusz.png" alt="Amadeusz's picture" className="block hero-image"/>
          </picture>
        </div>
        <div className="relative z-10 my-4 p-8 pt-56 md:my-8 md:p-16 md:pr-52">
          <AboutMe />
        </div>
      </div>
    </div>
  );
}
