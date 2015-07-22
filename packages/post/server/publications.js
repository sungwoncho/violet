Meteor.publish('posts', function (topicSlug) {
  var topic = Topics.findOne({slug: topicSlug});

  return Posts.find({topicId: topic._id});
});
