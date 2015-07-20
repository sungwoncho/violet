Template.registerHelper('getSetting', function (key) {
  var defaultSettings = {
    public: {
      appName: 'Default app name'
    }
  };

  var settings = Settings.findOne() || defaultSettings;

  if (settings)
    return settings.public[key];
});
