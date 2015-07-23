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

Template.registerHelper('formatDate', function (rawDate) {
  return Violet.utils.formatDate(rawDate);
});

Template.registerHelper('timeFromNow', function (rawDate) {
  if (! rawDate) return;

  return moment(rawDate).fromNow();
});
