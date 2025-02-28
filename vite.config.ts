import { reactRouter } from '@react-router/dev/vite';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import mdx from '@mdx-js/rollup';

export default defineConfig({
  plugins: [
    mdx({ providerImportSource: '@mdx-js/react' }),
    tailwindcss(),
    reactRouter(),
    tsconfigPaths(),
  ],
});
