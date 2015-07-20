Meteor.publish('settings', function () {
  var user = Meteor.users.findOne(this.userId);

  // Not publishing private fields to non-admin users
  if (user && user.isAdmin) {
    return Settings.find();
  } else {
    return Settings.find({}, {fields: {private: 0}});
  }
});
