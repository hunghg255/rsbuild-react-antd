import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  source: {
    define: {
      'process.env': JSON.stringify(process.env),
    },
  },
  // dev: {
  //   assetPrefix: '/',
  // },
  // output: {
  //   copy: [{ from: './public', to: 'public' }],
  // },
  plugins: [pluginReact()],
});
