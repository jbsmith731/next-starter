/* eslint-disable no-multi-assign */
const routes = module.exports = require('next-routes')();

routes
  .add('index', '/:lang(en|es)?')
  .add('posts', '/:lang(en|es)?/posts/:id?');
