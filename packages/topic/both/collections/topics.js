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
  createdAt: {
    type: Date,
    autoValue: function () {
      return new Date();
    }
  }
});

Topics.attachSchema(TopicSchema);

Meteor.methods({
  submitTopic: function (topic) {
    var nonEmptyString = Match.Where(function (arg) {
      check(arg, String);
      return arg.length > 0;
    });

    check(topic, {
      title: nonEmptyString,
      body: nonEmptyString,
      categoryId: nonEmptyString
    });

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
