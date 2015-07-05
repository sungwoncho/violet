Posts = new Mongo.Collection('posts');

var PostSchema = new SimpleSchema({
  body: {
    type: String
  },
  topicId: {
    type: String
  }
});

Posts.attachSchema(PostSchema);
