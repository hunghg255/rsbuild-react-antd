import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginPrint } from 'rsbuild-plugin-print';
import { RsdoctorRspackPlugin } from '@rsdoctor/rspack-plugin';
export default defineConfig({
  source: {
    define: {
      'process.env': JSON.stringify(process.env),
    },
  },
  // output: {
  //   distPath: {
  //     image: 'assets',
  //     svg: 'assets',
  //     font: 'assets',
  //     media: 'assets',
  //   },
  // },
  // dev: {
  //   assetPrefix: '/',
  // },
  // output: {
  //   copy: [{ from: './public', to: 'public' }],
  // },
  // server: {
  //   publicDir: {
  //     name: 'public',
  //     copyOnBuild: false,
  //   },
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
  tools: {
    rspack(config, { appendPlugins }) {
      // Only register the plugin when RSDOCTOR is true, as the plugin will increase the build time.
      if (process.env.RSDOCTOR) {
        appendPlugins(
          new RsdoctorRspackPlugin({
            // plugin options
          }),
        );
      }
    },
  },
});
