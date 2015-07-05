Meteor.publish('posts', function () {
  return Posts.find();
});

Meteor.publish('post', function (_id) {
  return Posts.find({_id: _id});
});
