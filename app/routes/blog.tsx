import { Link } from 'react-router';

import type { Route } from './+types/blog';
import { title, excerpt, publishedAt, tags } from '@/posts/2025-02-28.hello-world.mdx';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Blog - megawebmaster.pl' },
    {
      name: 'description',
      content: `Read my thoughts and adventures in the web world.`,
    },
  ];
}

export default function Blog() {
  return (
    <div className="w-page mx-auto flex flex-col my-4">
      <div className="py-2 px-4 md:py-4 md:my-4 md:px-16">
        <h1 className="font-garet text-3xl">Latest posts 📖</h1>
        <div className="flex flex-col gap-8 my-4">
          <article className="flex flex-col bg-background border rounded md:grid md:grid-cols-3">
            <div className="w-full h-full">Test image</div>
            <div className="col-span-2 flex flex-col gap-2 p-4 pr-8">
              <h3 className="text-sm flex gap-2">
                {tags.map((tag) => <span key={tag}>#{tag}</span>)}
              </h3>
              <h2 className="text-2xl font-semibold pb-2">
                <Link to="/blog/test" className="block hover:opacity-50">{title}</Link>
              </h2>
              <div className="flex flex-col gap-2">{excerpt}</div>
              <Link to="/blog/test" className="self-end font-semibold hover:opacity-50">Read more</Link>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
