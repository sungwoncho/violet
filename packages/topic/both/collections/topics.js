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

    var generateSlug = function (rawTitle) {
      var initialSlug = getSlug(topic.title),
          uniqNum = 1;

      // When there is no duplicate slug, return the initialSlug
      if (Topics.find({slug: initialSlug}).count() === 0)
        return initialSlug;

      // If duplicate exists, generate a uniq slug
      var possibleSlug = initialSlug + '-' + uniqNum;
      while(Topics.find({slug: possibleSlug}).count() > 0) {
        uniqNum++;
        possibleSlug = initialSlug + '-' + uniqNum;
      }

      return possibleSlug;
    };

    _.extend(topic, {
      author: Meteor.user().username,
      authorId: Meteor.userId(),
      slug: generateSlug(topic.title)
    });

    var topicId = Topics.insert(topic);
    var topicSlug = Topics.findOne(topicId).slug;

    Meteor.call('incrementTopicCount', topic.categoryId);

    return topicSlug;
  }
});
