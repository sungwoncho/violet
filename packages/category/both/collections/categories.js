Categories = new Mongo.Collection('categories');

CategorySchema = new SimpleSchema({
  name: {
    type: String
  }
});

Categories.attachSchema(CategorySchema);
