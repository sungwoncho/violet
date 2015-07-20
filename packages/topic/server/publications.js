Meteor.publish('topics', function (categoryId) {
  return Topics.find({categoryId: categoryId});
});

Meteor.publish('topic', function (topicSlug) {
  return Topics.find({slug: topicSlug});
});

Meteor.publish('recent-topics', function () {
  return Topics.find({}, {sort: {createdAt: -1}, limit: 10});
});
