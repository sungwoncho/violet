Package.describe({
  name: 'violet:user',
  version: '0.0.1',
  summary: 'everything related to users',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  var packages = [
    'joshowens:accounts-entry@1.0.3',
    'accounts-password',
    'violet:dependency'
  ];

  api.use(packages);
  api.imply(packages);

  api.addFiles([
    'both/routes.js',
    'both/collections/users.js'
  ], ['client', 'server']);

  api.addFiles([
    'client/config.js'
  ], 'client');
});

Package.onTest(function(api) {
});
