Meteor.publish('topics', function (categoryId) {
  return Topics.find({categoryId: categoryId});
});

Meteor.publish('topic', function (_id) {
  return Topics.find({_id: _id});
});

Meteor.publish('recent-topics', function () {
  return Topics.find({}, {sort: {date: -1}, limit: 10});
});
