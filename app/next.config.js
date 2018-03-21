const withSass = require('@zeit/next-sass');

const dev = process.env.NODE_ENV !== 'production';

module.exports = withSass({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: dev ? '[local]_[hash:base64:6]' : 'es_[hash:base64:6]',
  },
  useFileSystemPublicRoutes: false,
});
