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
  participants: {
    type: [Object]
  },
  'participants.$._id': {
    type: String
  },
  'participants.$.username': {
    type: String
  },
  'participants.$.emailHash': {
    type: String
  },
  'participants.$.lastPostAt': {
    type: Date
  },
  slug: {
    type: String,
    index: true,
    unique: true
  },
  postCount: {
    type: Number,
    defaultValue: 0
  },
  lastActivity: {
    type: Date,
    defaultValue: new Date()
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
    if (! Meteor.user())
      throw new Error('currentUser not found.');

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
      participants: [{
        _id: Meteor.userId(),
        username: Meteor.user().username,
        emailHash: Meteor.user().emailHash,
        lastPostAt: new Date()
      }],
      slug: Topics.generateSlug(topic),
    });

    var topicId = Topics.insert(topic);
    var topicSlug = Topics.findOne(topicId).slug;

    // increment the topicCount only on the server side
    // don't update in a stub method because allowing update is not secure
    if (! this.isSimluation)
      Categories.update(topic.categoryId, {$inc: {topicCount: 1}});
      Meteor.users.incrementTopicCount(Meteor.userId());

    return topicSlug;
  }
});
