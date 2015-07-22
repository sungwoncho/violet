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

  api.use('violet:lib');

  // Depends on category
  api.use('violet:category');
  api.imply('violet:category');

  api.addFiles([
    'both/collections/topics.js',
    'both/routes.js',
    'both/utils.js',
  ], ['client', 'server']);

  api.addFiles([
    'client/templates/topic.html',
    'client/templates/topic.js',
    'client/templates/newTopic.html',
    'client/templates/newTopic.js',
  ], 'client');

  api.addFiles([
    'server/publications.js'
  ], 'server');

  api.export('Topics');
});

Package.onTest(function(api) {
  api.use('violet:test-support');
  api.use('violet:topic');
  api.addFiles([
    'tests/topic_tests.js',
    'tests/utils_tests.js'
  ], 'server');
});
