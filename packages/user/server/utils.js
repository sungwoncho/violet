Meteor.users.incrementTopicCount = function (userId) {
  Meteor.users.update(userId, {$inc: {'stats.topicCount': 1}});
  Meteor.users.update(userId, {$inc: {'stats.submissionCount': 1}});
};

Meteor.users.incrementPostCount = function (userId) {
  Meteor.users.update(userId, {$inc: {'stats.postCount': 1}});
  Meteor.users.update(userId, {$inc: {'stats.submissionCount': 1}});
};
