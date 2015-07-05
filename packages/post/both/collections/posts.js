Posts = new Mongo.Collection('posts');

var PostSchema = new SimpleSchema({
  title: {
    type: String
  },
  content: {
    type: String
  }
});

Posts.attachSchema(PostSchema);
