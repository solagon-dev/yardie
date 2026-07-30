// Flat config.
//
// The previous setup ran nothing: Next.js 16 removed `next lint` (so
// `npm run lint` failed with "no such directory: ./lint"), ESLint wasn't in
// devDependencies at all, and `.eslintrc.json` is a format ESLint 9 no longer
// reads. eslint-config-next ships a native flat config, so no compat shim.
import next from "eslint-config-next";

export default [
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "next-env.d.ts",
      "scripts/**",
      "*.config.js",
      "*.config.mjs",
    ],
  },
  ...next,
];
