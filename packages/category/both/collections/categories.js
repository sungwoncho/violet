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
  createdAt: {
    type: Date,
    autoValue: function () {
      return new Date();
    }
  }
});

Categories.attachSchema(Schema.categories);

Categories.simpleSchema().messages({
  notUnique: 'A duplicate slug exists.'
});

Categories.allow({
  update: function (userId, doc, fieldNames, modifier) {
    var user = Meteor.users.findOne(userId);
    return user && user.isAdmin;
  },
  fetch: []
});
