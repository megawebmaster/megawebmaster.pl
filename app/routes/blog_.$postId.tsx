import type { Route } from './+types/blog_.$postId';
import PostData, { tags, title } from '@/posts/2025-02-28.hello-world.mdx';

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

// TODO: Load the content: figure out how to ensure the post exists and that I can sort them with dates in front.

export default function Post() {
  return (
    <div className="w-blog mx-auto flex flex-col my-4">
      <div className="px-4 md:px-16 flex flex-col gap-2 md:py-4">
        <h3 className="text-sm flex gap-2">
          {tags.map((tag) => <span key={tag}>#{tag}</span>)}
        </h3>
        <h1 className="font-garet text-3xl">{title}</h1>
        <article className="bg-background border rounded p-4 pr-8 prose my-2 md:my-4">
          <PostData/>
        </article>
      </div>
    </div>
  );
}
