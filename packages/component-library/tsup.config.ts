import { baseConfig } from '@jrkienle/config/tsup.config.js';
import { defineConfig } from 'tsup';
import type { Options } from 'tsup';

export default defineConfig([
  {
    ...baseConfig,
    entry: ['./src/components/*/index.ts'],
    external: ['react'],
    outDir: 'dist/components',
  },
  {
    ...baseConfig,
    bundle: false,
    entry: ['./src/index.ts'],
    external: ['react'],
    outDir: 'dist',
  },
] as Options[]);
