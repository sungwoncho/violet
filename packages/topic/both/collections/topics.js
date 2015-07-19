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
  }
});

Topics.attachSchema(TopicSchema);

Meteor.methods({
  submitTopic: function (topic) {
    _.extend(topic, {
      author: Meteor.user().username,
      authorId: Meteor.userId()
    });

    var topicId = Topics.insert(topic);

    if (Meteor.isClient) {
      Router.go('topic', {_id: topicId});
    }

    return topicId;
  }
});
