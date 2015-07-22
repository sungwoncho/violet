Template.registerHelper('getSetting', function (key) {
  var defaultSettings = {
    public: {
      appName: 'Violet'
    }
  };

  var settings = Settings.findOne() || defaultSettings;

  if (settings)
    return settings.public[key];
});
