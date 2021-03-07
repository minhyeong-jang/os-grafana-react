module.exports = {
  ...require('@grafana/toolkit/src/config/prettier.plugin.config.json'),
  printWidth: 80,
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  quoteProps: 'consistent',
  useTabs: false,
  arrowParens: 'avoid',
};
