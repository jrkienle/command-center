import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    coverage: {
      enabled: true,
      provider: 'c8',
      reporter: ['text', 'cobertura'],
      reportsDirectory: './coverage',
      src: 'src',
    },
    environment: 'happy-dom',
    globals: true,
    outputFile: 'test-results/results.xml',
    reporters: ['default', 'junit'],
  },
});
