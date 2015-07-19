Posts = new Mongo.Collection('posts');

var PostsSchema = new SimpleSchema({
  body: {
    type: String
  },
  topicId: {
    type: String
  },
  author: {
    type: String
  },
  authorId: {
    type: String
  },
  createdAt: {
    type: Date,
    autoValue: function () {
      return new Date();
    }
  }
});

Posts.attachSchema(PostsSchema);

Meteor.methods({
  submitPost: function (post) {
    post.author = Meteor.user().username;
    post.authorId = Meteor.userId();

    Posts.insert(post);
  }
});
