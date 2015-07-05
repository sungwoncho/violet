Package.describe({
  name: 'violet:post',
  version: '0.0.1',
  summary: 'everything related to post',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  api.use('violet:core');

  api.addFiles([
    'both/routes.js',
    'both/collections/posts.js'
  ], ['client', 'server']);

  api.addFiles([
    'client/templates/posts.html',
    'client/templates/posts.js',
    'client/templates/post.html',
    'client/templates/post.js'
  ], 'client');

  api.addFiles([
    'server/publications.js'
  ], 'server');

  api.export('Posts');
});

Package.onTest(function(api) {
  api.use('violet:post');
});
