import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginPrint } from 'rsbuild-plugin-print';
import { RsdoctorRspackPlugin } from '@rsdoctor/rspack-plugin';
import { pluginSass } from '@rsbuild/plugin-sass';
// import { pluginReactInspector } from 'rsbuild-plugin-react-inspector';
import { pluginConsoleDebug } from 'rsbuild-plugin-console-debug';

export default defineConfig({
  server: {
    port: 4005,
  },
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
            text: `${green('➜')} ${bold('Icon:')} ${bold(
              cyan('http://localhost:4005/svgtocss/icon-demo.html'),
            )}`,
          };
        },
      ],
    }),
    pluginSass(),
    pluginConsoleDebug(),
    // pluginReactInspector(),
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
