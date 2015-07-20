Meteor.publish('categories', function () {
  return Categories.find();
});

Meteor.publish('category', function (categorySlug) {
  return Categories.find({slug: categorySlug});
});
