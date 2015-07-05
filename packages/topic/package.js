Package.describe({
  name: 'violet:topic',
  version: '0.0.1',
  summary: 'everything related to topic',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  api.use('violet:core');

  api.addFiles([
    'both/collections/topics.js',
    'both/routes.js'
  ]);

  api.addFiles([
    'client/templates/topics.html',
    'client/templates/topics.js',
    'client/templates/topic.html',
    'client/templates/topic.js'
  ], 'client');

  api.addFiles([
    'server/publications.js'
  ], 'server');

  api.export('Topics');
});

Package.onTest(function(api) {
});
