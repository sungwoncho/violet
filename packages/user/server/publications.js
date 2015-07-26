Meteor.publish('userData', function () {
  if (this.userId) {
    return Meteor.users.find({_id: this.userId}, {fields: {isAdmin: 1}});
  } else {
    return this.ready();
  }
});

Meteor.publish('userProfile', function (username) {
  return Meteor.users.find({username: username}, {fields: {
    username: 1,
    'stats.topicCount': 1,
    'stats.postCount': 1,
    'stats.submissionCount': 1
  }});
});
