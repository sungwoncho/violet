Topics = new Mongo.Collection('topics');

Schema.topics = new SimpleSchema({
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
    defaultValue: new Date(),
    denyUpdate: true
  }
});

Topics.attachSchema(Schema.topics);

Topics.simpleSchema().messages({
  notUnique: 'A duplicate slug exists.'
});

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
      authorId: Meteor.userId(),
      slug: Topics.generateSlug(topic)
    });

    var topicId = Topics.insert(topic);
    var topicSlug = Topics.findOne(topicId).slug;

    Meteor.call('incrementTopicCount', topic.categoryId);

    return topicSlug;
  }
});
