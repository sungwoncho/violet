Meteor.methods({
  createCategory: function (category) {
    var slug = Npm.require('slug');

    _.extend(category, {
      slug: slug(category.name, {lower: true})
    });

    var categoryId = Categories.insert(category);

    return categoryId;
  }
});
