Package.describe({
  name: 'violet:topic',
  version: '0.1.0',
  summary: 'everything related to topic',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  api.use('violet:lib@0.1.0');

  // Depends on category
  api.use('violet:category@0.1.0');
  api.imply('violet:category@0.1.0');

  api.addFiles([
    'both/collections/topics.js',
    'both/routes.js',
    'both/utils.js'
  ], ['client', 'server']);

  api.addFiles([
    'client/templates/topicIndex.html',
    'client/templates/topicIndex.js',
    'client/templates/topicRow.html',
    'client/templates/topicRow.js',
    'client/templates/topic.html',
    'client/templates/topic.js',
    'client/templates/newTopic.html',
    'client/templates/newTopic.js',
  ], 'client');

  api.addFiles([
    'server/publications.js',
    'server/factory.js'
  ], 'server');

  api.export('Topics');
  api.export('Factory');
});

Package.onTest(function(api) {
  api.use('violet:test-support');
  api.use('violet:topic');
  api.use('accounts-password');
  api.addFiles([
    'tests/topic_tests.js',
    'tests/utils_tests.js'
  ], 'server');
});
