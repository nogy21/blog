export default {
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
  trailingComma: 'all',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
};
