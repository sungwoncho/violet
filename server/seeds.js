Meteor.startup(function () {
  if (Categories.find().count() === 0) {
    for (var i = 0; i < 10; i++) {
      var categoryId = Categories.insert({
        name: Fake.word()
      });

      var topicId = Topics.insert({
        title: Fake.sentence(),
        categoryId: categoryId
      });

      Posts.insert({
        body: Fake.paragraph(),
        topicId: topicId
      });
    }
  }
});
