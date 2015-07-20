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

Categories.simpleSchema().messages({
  notUnique: 'A duplicate slug exists.'
});
