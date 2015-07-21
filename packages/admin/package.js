Package.describe({
  name: 'violet:admin',
  version: '0.0.1',
  summary: 'admin features including customization',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  api.use('violet:lib');

  api.addFiles([
    'both/routes.js'
  ], ['client', 'server']);

  api.addFiles([
    'client/templates/settings.html',
    'client/templates/settings.js'
  ], 'client');
});
