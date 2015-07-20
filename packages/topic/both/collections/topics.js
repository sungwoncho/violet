Topics = new Mongo.Collection('topics');

TopicSchema = new SimpleSchema({
  title: {
    type: String
  },
  categoryId: {
    type: String
  },
  body: {
    type: String
  },
  author: {
    type: String
  },
  authorId: {
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

Topics.attachSchema(TopicSchema);
