import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginPrint } from 'rsbuild-plugin-print';

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
  plugins: [
    pluginReact(),
    pluginPrint({
      info: [
        ({ bold, cyan, green }) => {
          return {
            text: `${green('➜')} ${bold('Font Icon:')} ${bold(
              cyan('http://localhost:4005/public/t4font/index.html'),
            )}`,
          };
        },
      ],
    }),
  ],
});
