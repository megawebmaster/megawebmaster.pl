declare module '*.mdx' {
  import { MDXComponent } from 'mdx/types';

  export default MDXComponent;
  export const description: string;
}
