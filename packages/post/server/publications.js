Meteor.publish('posts', function (topicId) {
  return Posts.find({topicId: topicId});
});
