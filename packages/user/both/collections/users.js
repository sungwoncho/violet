Schema.users = new SimpleSchema({
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
  },
  isAdmin: {
    type: Boolean,
    defaultValue: false
  }
});

Meteor.users.attachSchema(Schema.users);
