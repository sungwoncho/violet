Topics = new Mongo.Collection('topics');

TopicSchema = new SimpleSchema({
  title: {
    type: String
  },
  categoryId: {
    type: String
  }
});

Topics.attachSchema(TopicSchema);
