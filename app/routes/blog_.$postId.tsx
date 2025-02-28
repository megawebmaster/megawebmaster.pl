import { useNavigate } from 'react-router';

import type { Route } from './+types/blog_.$postId';
import { getPost } from '@/services/posts';

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
export async function loader({ params }: Route.LoaderArgs) {
  if (!params.postId) {
    return null;
  }

  return {
    post: await getPost(params.postId),
  };
}

// TODO: Do I want to have a specific to blog 404 page?
// TODO: Generate IDs for each heading in MDX
export default function Post({ loaderData }: Route.ComponentProps) {
  const navigate = useNavigate();

  if (loaderData === null) {
    navigate('/blog');
    return null;
  }

  const { post } = loaderData;
  // TODO: Figure out how to hydrate MDX client-side
  const Content = post.default ?? 'p';

  return (
    <div className="w-blog mx-auto flex flex-col my-4">
      <div className="px-4 md:px-16 flex flex-col gap-2 md:py-4">
        {post.tags && (
          <h3 className="text-sm flex gap-2">
            {post.tags.map((tag) => <span key={tag}>#{tag}</span>)}
          </h3>
        )}
        <h1 className="font-garet text-3xl">{post.title}</h1>
        <article className="bg-background border rounded p-4 pr-8 prose my-2 md:my-4">
          <Content/>
        </article>
      </div>
    </div>
  );
}
