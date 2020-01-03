module.exports = {
  stories: ['../src/stories/**/**/*.stories.(js|mdx)'],
  addons: [
    '@storybook/addon-docs',
    'storybook-addon-vue-info/lib/register',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-notes',
    '@storybook/addon-knobs',
  ],
};