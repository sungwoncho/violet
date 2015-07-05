Meteor.publish('categories', function () {
  return Categories.find();
});

Meteor.publish('category', function (categoryId) {
  return Categories.find({_id: categoryId});
});
