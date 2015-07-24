Meteor.publish('posts', function (topicSlug, limit) {
  var topic = Topics.findOne({slug: topicSlug});

  return Posts.find({topicId: topic._id}, {limit: limit});
});
