Categories = new Mongo.Collection('categories');

CategorySchema = new SimpleSchema({
  name: {
    type: String
  },
  slug: {
    type: String,
    index: true,
    unique: true
  },
  createdAt: {
    type: Date,
    autoValue: function () {
      return new Date();
    }
  }
});

Categories.attachSchema(CategorySchema);

Meteor.methods({
  createCategory: function (category) {
    var getSlug = Npm.require('slug');

    _.extend(category, {
      slug: getSlug(category.name)
    });

    var categoryId = Categories.insert(category);

    return categoryId;
  }
});
