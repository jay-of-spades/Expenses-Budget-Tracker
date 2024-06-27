module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh', 'postcss-modules'],
  rules: {
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'postcss-modules/no-unused-class': [
      2,
      {
        camelCase: true,
      },
    ],
    'postcss-modules/no-undef-class': [
      2,
      {
        camelCase: true,
      },
    ],
  },
  settings: {
    'postcss-modules': {
      postcssConfigDir: './', // Adjust if your postcss.config.js is in a different directory
      plugins: ['tailwindcss', 'autoprefixer'],
    },
  },
};
