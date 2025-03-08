import { reactRouter } from '@react-router/dev/vite';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';
import mdx from '@mdx-js/rollup';

export default defineConfig({
  plugins: [svgr(), mdx({ providerImportSource: '@mdx-js/react' }), tailwindcss(), reactRouter(), tsconfigPaths()],
});
