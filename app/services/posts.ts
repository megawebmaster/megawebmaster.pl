import { descend, drop, identity, map, pick, pipe, sort, take, toPairs } from 'ramda';

import type { Post } from '@/types/post';

type PostsOptions = {
  page: number;
  perPage: number;
};

const files = import.meta.glob<boolean, string, Post>('../posts/*.mdx');
const sortedFiles = sort(descend(identity), Object.keys(files));

export const postsCount = sortedFiles.length;

export const getPosts = ({ page, perPage }: PostsOptions) => {
  const matchedPosts = pipe(
    drop(page * perPage),
    take(perPage),
  )(sortedFiles) as string[];

  return Promise.all(
    map(
      async ([file, post]) => ({
        slug: file.substring(9, file.length - 4),
        ...(await post()),
      }),
      toPairs(pick(matchedPosts, files))
    )
  );
};

export const getPost = (slug: string) => {
  return files[`../posts/${slug}.mdx`];
}
