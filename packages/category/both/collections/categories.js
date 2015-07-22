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
    defaultValue: 0,
    denyUpdate: true
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
  incrementTopicCount: function (categoryId) {
    check(categoryId, String);

    Categories.update(categoryId, {$inc: {topicCount: 1}});
  },
  removeCategory: function (categoryId) {
    check(categoryId, String);

    Categories.remove(categoryId);
    //TODO: call removeTopic that removes topic and all its posts
    Topics.remove({categoryId: categoryId});
  }
});
