Meteor.methods({
  createCategory: function (category) {
    var slug = Npm.require('slug');

    _.extend(category, {
      slug: slug(category.name, {lower: true})
    });

    var categoryId = Categories.insert(category);

    return categoryId;
  },
  updateCategory: function (modifier, categoryId) {
    var slug = Npm.require('slug'),
        categoryName = modifier.$set.name;

    // Generate a new slug
    modifier.$set.slug = slug(categoryName, {lower:true});

    Categories.update(categoryId, modifier);

    var category = Categories.findOne(categoryId);

    return category;
  }
});
