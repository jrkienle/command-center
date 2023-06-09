module.exports = {
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:@typescript-eslint/strict',
    'plugin:tailwindcss/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },

  plugins: ['@typescript-eslint', 'tailwindcss'],
  rules: {
    // This allows us to import devdeps in tests and stories
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.stories.tsx', '**/*.test.ts', '**/*.test.tsx'],
      },
    ],
    // This allows us to "export { default } from which is nice for reducing boilerplate"
    'no-restricted-exports': 'off',
    // This makes react-aria much more usable
    'react/jsx-props-no-spreading': 'off',
    // We use React 18, this is no longer needed
    'react/react-in-jsx-scope': 'off',
    // This rule is broken in TypeScript
    'react/require-default-props': 'off',
  },
  settings: {
    tailwindcss: {
      callees: ['clsx', 'twsx'],
      config: './node_modules/@antribute/zephyr-core/tailwind.config.cjs',
      removeDuplicates: true,
    },
  },
};
