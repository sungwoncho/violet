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
  emailHash: {
    type: String,
    optional: true
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
  // submissionCount = topicCount + postCount
  'stats.submissionCount': {
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
