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
    'iron:router@1.0.9',
    'meteor-platform'
  ];

  var clientPackages = [
    'templating'
  ];

  api.use(packages);
  api.use(clientPackages, 'client');
  api.imply(packages);
  api.imply(clientPackages);

  api.addFiles([
    'both/routes.js'
  ], ['client', 'server']);

  api.addFiles([
    'client/templates/shared/layout.html',
    'client/templates/home.html'
  ], 'client');
});

Package.onTest(function(api) {
  api.use('violet:core');
});
