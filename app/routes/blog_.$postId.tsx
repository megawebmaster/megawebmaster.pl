import { lazy, Suspense } from 'react';
import { redirect } from 'react-router';

import type { Route } from './+types/blog_.$postId';
import { getPost } from '@/services/posts';
import { Loading } from '@/components/loading';

export function meta({ data }: Route.MetaArgs) {
  return [
    { title: `${data.post.title} - Blog - megawebmaster.pl` },
    { name: 'description', content: data.post.excerpt },
  ];
}

export async function loader({ params }: Route.LoaderArgs) {
  if (!params.postId) {
    throw redirect('/blog');
  }

  const post = await getPost(params.postId)();
  if (!post) {
    throw redirect('/blog');
  }

  return {
    post,
  };
}

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
  if (!params.postId) {
    throw redirect('/blog');
  }

  const post = await getPost(params.postId)();
  if (!post) {
    throw redirect('/blog');
  }

  return {
    post,
  };
}

// TODO: Do I want to have a specific to blog 404 page?
// TODO: Generate IDs for each heading in MDX
export default function Post({ params, loaderData }: Route.ComponentProps) {
  const { post } = loaderData;
  const Content = post.default ?? lazy(getPost(params.postId));

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
          <Suspense fallback={<Loading />}>
            <Content/>
          </Suspense>
        </article>
      </div>
    </div>
  );
}
