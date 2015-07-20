Settings = new Mongo.Collection('settings');

Schema.settings = new SimpleSchema({
  appName: {
    type: String
  }
});
