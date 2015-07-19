Package.describe({
  name: 'violet:dependency',
  version: '0.0.1',
  summary: 'external dependencies',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  var packages = [
    'meteor-platform',
    'iron:router@1.0.9',
    'aldeed:collection2@2.3.3',
    'practicalmeteor:sinon@1.14.1', // testing
    'summernote:standalone@0.6.10'
  ];

  api.use(packages);
  api.imply(packages);

  api.addFiles([
    'client/stylesheets/summernote-bs3.css'
  ], 'client');
});
