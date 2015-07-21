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
