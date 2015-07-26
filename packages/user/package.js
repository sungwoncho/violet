Package.describe({
  name: 'violet:user',
  version: '0.1.0',
  summary: 'everything related to users',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  var packages = [
    'violet:lib@0.1.0'
  ];

  api.use(packages);
  api.imply(packages);

  api.addFiles([
    'both/routes.js',
    'both/collections/users.js'
  ], ['client', 'server']);

  api.addFiles([
    'client/config.js',
    'client/subscriptions.js',
    'client/templates/profile.html',
    'client/templates/profile.js'
  ], 'client');

  api.addFiles([
    'server/publications.js',
    'server/utils.js'
  ], 'server');
});

Package.onTest(function(api) {
  api.use('violet:test-support');
  api.use('violet:user');
  api.use('accounts-password'); //TOOD: move to test-support
  api.addFiles([
    'tests/utils_tests.js',
  ], 'server');
});
