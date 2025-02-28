import type { Route } from './+types/blog';
import { Link } from 'react-router';

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
          <article className="flex flex-col md:grid grid-cols-3 gap-4 bg-background border rounded p-4 pr-8">
            <div className="w-full h-16 border border-black">Test image</div>
            <div className="col-span-2 flex flex-col gap-2">
              <h3 className="text-sm flex gap-2">
                <span>#javascript</span>
                <span>#programming</span>
              </h3>
              <h2 className="text-2xl font-semibold pb-2">
                <Link to="/blog/test" className="block hover:opacity-50">Test title for the blog</Link>
              </h2>
              <div className="flex flex-col gap-2">
                <p>
                  I'm tinkering with the web since 2004 - the moment I got my first internet connection. Nowadays I'm more
                  focused on building products that deliver value to people around the world.
                </p>
                <p>
                  I'm truly passionate about creating great products and making the world a better place, one step at a
                  time.
                </p>
              </div>
              <Link to="/blog/test" className="self-end font-semibold hover:opacity-50">Read more</Link>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
