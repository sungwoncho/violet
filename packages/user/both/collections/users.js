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
  },
  stats: {
    type: Object
  },
  'stats.topicCount': {
    type: Number,
    defaultValue: 0
  },
  'stats.postCount': {
    type: Number,
    defaultValue: 0
  },
  // submitCount = topicCount + postCount
  'stats.submitCount': {
    type: Number,
    defaultValue: 0
  },
  'stats.lastActivity': {
    type: Date,
    defaultValue: new Date()
  }
});

Meteor.users.attachSchema(Schema.users);

Schema.stats = new SimpleSchema({

});
