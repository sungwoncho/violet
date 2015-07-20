Posts = new Mongo.Collection('posts');

Schema.posts = new SimpleSchema({
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

Posts.attachSchema(Schema.posts);

Meteor.methods({
  submitPost: function (post) {
    check(post, {
      body: String,
      topicId: String
    });

    post.author = Meteor.user().username;
    post.authorId = Meteor.userId();

    Posts.insert(post);
  }
});
