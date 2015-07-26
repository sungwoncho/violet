Package.describe({
  name: 'violet:core',
  version: '0.1.0',
  summary: 'core package of violet',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  var packages = [
    'violet:category@0.1.0',
    'violet:topic@0.1.0',
    'violet:post@0.1.0',
    'violet:user@0.1.0'
  ];

  api.use(packages);
  api.imply(packages);

  api.addFiles([
    'both/routes.js'
  ], ['client', 'server']);

  api.addFiles([
    'client/subscriptions.js',
    'client/templates/shared/layout.html',
    'client/templates/shared/head.html',
    'client/templates/shared/header.html',
    'client/templates/shared/loading.html',
    'client/templates/home.html',
    'client/templates/admins/adminSettings.html',
    'client/templates/admins/adminSettings.js',
    'client/templates/admins/adminCategories.html',
    'client/templates/admins/adminCategories.js',
    'client/templates/admins/adminEditCategory.html',
    'client/templates/admins/adminEditCategory.js',
    'client/templates/errors/404.html'
  ], 'client');
});

Package.onTest(function(api) {
  api.use('violet:core');
});
