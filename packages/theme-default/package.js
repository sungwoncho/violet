Package.describe({
  name: 'violet:theme-default',
  version: '0.0.1',
  summary: 'the default theme for Violet',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  packages = [
    'fourseven:scss@3.2.0',
    'wolves:bourbon@2.0.0',
    'wolves:neat@2.1.2'
  ];

  api.use(packages);

  api.addFiles([
    'client/scss.json',
    'client/stylesheets/_global.scss',
    'client/stylesheets/index.scss'
  ], 'client');
});
