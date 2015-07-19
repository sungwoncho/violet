Categories = new Mongo.Collection('categories');

CategorySchema = new SimpleSchema({
  name: {
    type: String
  },
  createdAt: {
    type: Date,
    autoValue: function () {
      return new Date();
    }
  }
});

Categories.attachSchema(CategorySchema);
