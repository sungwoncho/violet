Package.describe({
  name: 'violet:core',
  version: '0.0.1',
  summary: 'core package of violet',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  var packages = [
    'violet:category',
    'violet:topic',
    'violet:post',
    'violet:user'
  ];

  api.use(packages);
  api.imply(packages);

  api.addFiles([
    'both/routes.js'
  ], ['client', 'server']);

  api.addFiles([
    'client/templates/shared/layout.html',
    'client/templates/shared/head.html',
    'client/templates/home.html',
    'client/templates/home.js'
  ], 'client');
});

Package.onTest(function(api) {
  api.use('violet:core');
});
