Categories = new Mongo.Collection('categories');

Schema.categories = new SimpleSchema({
  name: {
    type: String
  },
  slug: {
    type: String,
    index: true,
    unique: true
  },
  description: {
    type: String
  },
  position: {
    type: Number
  },
  topicCount: {
    type: Number,
    defaultValue: 0
  },
  createdAt: {
    type: Date,
    defaultValue: new Date(),
    denyUpdate: true
  }
});

Categories.attachSchema(Schema.categories);

Categories.simpleSchema().messages({
  notUnique: 'A duplicate slug exists.'
});

Meteor.methods({
  createCategory: function (category) {
    check(category, Object);

    var maxPosition = Categories.find().count();

    _.extend(category, {
      slug: getSlug(category.name),
      position: maxPosition + 1
    });

    var categoryId = Categories.insert(category);

    return categoryId;
  },
  updateCategory: function (modifier, categoryId) {
    check(modifier, Object);
    check(categoryId, String);

    var categoryName = modifier.$set.name;

    // Generate a new slug
    modifier.$set.slug = getSlug(categoryName);

    Categories.update(categoryId, modifier);

    var category = Categories.findOne(categoryId);

    return category;
  },
  removeCategory: function (categoryId) {
    check(categoryId, String);

    Categories.remove(categoryId);
    //TODO: call removeTopic that removes topic and all its posts
    Topics.remove({categoryId: categoryId});
  }
});
