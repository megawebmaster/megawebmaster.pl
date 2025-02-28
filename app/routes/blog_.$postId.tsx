import type { Route } from './+types/blog_.$postId';

export function meta({}: Route.MetaArgs) {
  // TODO: Properly load content
  return [
    { title: 'Blog - megawebmaster.pl' },
    {
      name: 'description',
      content: `Read my thoughts and adventures in the web world.`,
    },
  ];
}

export default function Post() {
  return (
    <div className="w-blog mx-auto flex flex-col my-4">
      <div className="px-4 md:px-16 flex flex-col gap-2 md:py-4">
        <h3 className="text-sm flex gap-2">
          <span>#javascript</span>
          <span>#programming</span>
        </h3>
        <h1 className="font-garet text-3xl">Test title for the blog</h1>
        <div className="flex flex-col gap-2 my-2 md:my-4">
          <article className="bg-background border rounded p-4 pr-8 flex flex-col gap-2">
            <p>
              I'm tinkering with the web since 2004 - the moment I got my first internet connection. Nowadays I'm more
              focused on building products that deliver value to people around the world.
            </p>
            <p>
              I'm truly passionate about creating great products and making the world a better place, one step at a
              time. I want to grow in a product-focused way, so that I can help people around the world live a more
              fulfilling life.
            </p>
            <p>
              Always curious, always eager to learn more, always looking for improvements with constant drive for growth.
            </p>
          </article>
        </div>
      </div>
    </div>
  );
}
