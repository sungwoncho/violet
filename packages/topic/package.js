Package.describe({
  name: 'violet:topic',
  version: '0.0.1',
  summary: 'everything related to topic',
  git: '',
  documentation: 'README.md'
});

Npm.depends({
  slug: '0.9.1'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  api.use('violet:dependency');

  api.addFiles([
    'both/collections/topics.js',
    'both/routes.js'
  ]);

  api.addFiles([
    'client/templates/topic.html',
    'client/templates/topic.js',
    'client/templates/newTopic.html',
    'client/templates/newTopic.js',
  ], 'client');

  api.addFiles([
    'server/publications.js',
    'server/methods.js'
  ], 'server');

  api.export('Topics');
});

Package.onTest(function(api) {
});
