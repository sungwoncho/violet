Package.describe({
  name: 'violet:lib',
  version: '0.1.0',
  summary: 'Contains the common packages and files that other packages depend on',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  var packages = [
    'meteor-platform',
    'iron:router@1.0.9',
    'aldeed:collection2@2.3.3',
    'summernote:standalone@0.6.10',
    'aldeed:autoform@5.3.1',
    'ongoworks:speakingurl@5.0.1',
    'reactive-var@1.0.5',
    'momentjs:moment@2.10.3',
    'sungwoncho:iron-utils@0.1.1',
    'joshowens:accounts-entry@1.0.3',
    'accounts-password',
    'utilities:avatar@0.8.2',
    'dburles:factory@0.3.10'
  ];

  api.use(packages);
  api.imply(packages);

  api.addFiles([
    'both/namespace.js',
    'both/utils.js',
    'both/collections/settings.js'
  ], ['client', 'server']);

  api.addFiles([
    'client/stylesheets/summernote-bs3.css',
    'client/helpers.js'
  ], 'client');

  api.addFiles([
    'server/publications.js'
  ], 'server');

  api.export('Violet');
  api.export('Schema');
  api.export('Settings');
});
