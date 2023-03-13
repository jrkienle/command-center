import { defineConfig } from 'tsup';

export const baseConfig = {
  clean: true,
  dts: true,
  format: ['cjs', 'esm'],
  minify: true,
  sourcemap: true,
  splitting: true,
  target: 'esnext',
  treeshake: true,
};

export default defineConfig(baseConfig);
