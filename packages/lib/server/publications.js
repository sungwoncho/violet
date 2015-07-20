Meteor.publish('settings', function () {
  if (!this.userId) return this.ready();

  var user = Meteor.users.findOne(this.userId);

  if (user.isAdmin) {
    return Settings.find();
  } else {
    return this.ready();
  }
});
