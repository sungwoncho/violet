Meteor.publish('topics', function (categorySlug) {
  var categoryId = Categories.findOne({slug: categorySlug})._id;

  return Topics.find({categoryId: categoryId});
});

Meteor.publish('topic', function (topicSlug) {
  return Topics.find({slug: topicSlug});
});

Meteor.publish('recent-topics', function (limit) {
  return Topics.find({}, {sort: {lastActivity: -1}, limit: limit});
});
