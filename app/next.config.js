/* eslint-disable no-param-reassign */
const withSass = require('@zeit/next-sass');
const path = require('path');

const isDev = process.env.NODE_ENV !== 'production';

module.exports = withSass({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: isDev ? '[local]_[hash:base64:6]' : 'es_[hash:base64:6]',
  },
  useFileSystemPublicRoutes: false,

  webpack: (config) => {
    config.resolve.alias.styles = path.resolve('./app/styles');

    return config;
  },
});
