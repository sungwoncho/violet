Package.describe({
  name: 'violet:core',
  version: '0.0.1',
  summary: 'core package of violet',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('core.js');
});

Package.onTest(function(api) {
  api.use('violet:core');
});
