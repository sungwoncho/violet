Package.describe({
  name: 'violet:test-support',
  version: '0.1.0',
  summary: 'libraries and helpers that are used to run tests',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  var packages =[
    'mike:mocha-package@0.5.8',
    'practicalmeteor:sinon@1.14.1_2',
    'violet:user@0.1.0'
  ];

  api.use(packages);
  api.imply(packages);

  api.addFiles([
    'helpers.js'
  ]);

  api.export('expect');
  api.export('testHelpers');
});
