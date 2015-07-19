var UserSchema = new SimpleSchema({
  profile: {
    type: Object,
    blackbox: true
  },
  services: {
    type: Object,
    blackbox: true
  },
  emails: {
    type: [Object],
    blackbox: true
  },
  username: {
    type: String
  },
  createdAt: {
    type: Date
  }
});

Meteor.users.attachSchema(UserSchema);
