import { Link } from 'react-router';

import type { Route } from './+types/blog';
import { getPosts, postsCount } from '@/services/posts';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Blog - megawebmaster.pl' },
    {
      name: 'description',
      content: `Read my thoughts and adventures in the web world.`,
    },
  ];
}

export async function loader({ params }: Route.LoaderArgs) {
  const maybePage = parseInt(params.page ?? '1', 10);
  const page = maybePage > 1 ? maybePage - 1 : 0;
  const perPage = 10;

  return {
    count: postsCount,
    page,
    perPage,
    posts: await getPosts({ page, perPage }),
  };
}

// TODO: Global: create 404 page, so we don't have unmatched URLs errors
// TODO: Create correct pagination
export default function Blog({ loaderData }: Route.ComponentProps) {
  return (
    <div className="w-page mx-auto flex flex-col my-4">
      <div className="py-2 px-4 md:py-4 md:my-4 md:px-16">
        <h1 className="font-garet text-3xl">Latest posts 📖</h1>
        <div className="flex flex-col gap-8 my-4">
          {loaderData.posts.map((post) => (
            <article key={post.title} className="flex flex-col bg-background border rounded md:grid md:grid-cols-3">
              <div className="w-full h-full">Test image</div>
              <div className="col-span-2 flex flex-col gap-2 p-4 pr-8">
                {post.tags && (
                  <h3 className="text-sm flex gap-2">
                    {post.tags.map((tag) => <span key={tag}>#{tag}</span>)}
                  </h3>
                )}
                <h2 className="text-2xl font-semibold pb-2">
                  <Link to={`/blog/${post.slug}`} className="block hover:opacity-50">{post.title}</Link>
                </h2>
                <div className="flex flex-col gap-2">{post.excerpt}</div>
                <Link to={`/blog/${post.slug}`} className="self-end font-semibold hover:opacity-50">Read more</Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
