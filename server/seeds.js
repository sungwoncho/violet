Meteor.startup(function () {
  if (Posts.find().count() === 0) {
    for (var i = 0; i < 100; i++) {
      var topicId = Topics.insert({
        title: Fake.sentence()
      });

      Posts.insert({
        body: Fake.paragraph(),
        topicId: topicId
      });
    }
  }
});
