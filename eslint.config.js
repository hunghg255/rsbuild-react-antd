import { basic, react } from '@hunghg255/eslint-config';
import tailwind from "eslint-plugin-tailwindcss";

export default [
  ...basic(),
  ...react(),
  ...tailwind.configs["flat/recommended"],
  {
    ignores: [
      'dist/**/*.ts',
      'dist/**',
      'scripts/genColorCss.ts',
      'tailwind.config.ts',
      'src/styles/color/color.tailwind.ts',
    ],
  },
];
