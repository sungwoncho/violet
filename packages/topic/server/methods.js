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

    var getSlug = function (rawTitle) {
      var slug = Npm.require('slug'),
          initialSlug = slug(topic.title, {lower: true}),
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
      slug: getSlug(topic.title)
    });

    var topicId = Topics.insert(topic);
    var topicSlug = Topics.findOne(topicId).slug;

    return topicSlug;
  }
});
