Meteor.users.incrementTopicCount = function (userId) {
  Meteor.users.update(userId, {$inc: {'stats.topicCount': 1}});
  Meteor.users.update(userId, {$inc: {'stats.submitCount': 1}});
};
