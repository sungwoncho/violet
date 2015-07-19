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

Meteor.methods({
  submitTopic: function (topicTitle, postBody) {
    var topic = {
      title: topicTitle,
      categoryId: 'aaaa'
    };

    var topicId = Topics.insert(topic);

    var initialPost = {
      body: postBody,
      topicId: topicId
    };

    Meteor.call('submitPost', initialPost);

    if (Meteor.isClient) {
      Router.go('topic', {_id: topicId});
    }
  }
});
