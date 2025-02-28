import { MDXComponent } from 'mdx/types';

export type Post = {
  default: MDXComponent;
  title: string;
  excerpt: string;
  publishedAt: Date;
  tags: string[];
}
