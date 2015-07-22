Package.describe({
  name: 'violet:category',
  version: '0.0.1',
  summary: '',
  git: '',
  documentation: 'README.md'
});

Npm.depends({
  slug: '0.9.1'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  api.use('violet:lib');

  api.addFiles([
    'both/collections/categories.js',
    'both/routes.js'
  ]);

  api.addFiles([
    'client/templates/category.html',
    'client/templates/category.js',
    'client/templates/categories.html',
    'client/templates/categories.js'
  ], 'client');

  api.addFiles([
    'server/publications.js',
    'server/methods.js'
  ], 'server');

  api.export('Categories');
});

Package.onTest(function(api) {
  api.use('violet:test-support');
  api.use('violet:category');
  api.addFiles([
    'tests/category_tests.js'
  ], 'server');
});
