Settings = new Mongo.Collection('settings');

Schema.settings = new SimpleSchema({
  appName: {
    type: String
  },
  createdAt: {
    type: Date,
    autoValue: function () {
      return new Date();
    }
  }
});

Settings.attachSchema(Schema.settings);

Settings.allow({
  update: function (userId, doc, fieldNames, modifier) {
    var user = Meteor.users.findOne(userId);

    return user.isAdmin;
  }
});
