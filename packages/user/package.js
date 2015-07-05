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
    'accounts-ui',
    'accounts-password',
    'violet:dependency'
  ];

  api.use(packages);
  api.imply(packages);
});

Package.onTest(function(api) {
});
