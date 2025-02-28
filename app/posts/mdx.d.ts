declare module '*.mdx' {
  import { MDXComponent } from 'mdx/types';

  export default MDXComponent;
  export const title: string;
  export const excerpt: string;
  export const publishedAt: Date;
  export const tags: string[];
}
