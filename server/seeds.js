Meteor.startup(function () {
  if (!process.env.IS_MIRROR && Categories.find().count() === 0) {
    var jonId = Accounts.createUser({
      username: 'jon',
      email: 'jon@example.com',
      password: 'testPassword',
      profile: {
        username: 'jon'
      }
    });
    var jon = Meteor.users.findOne(jonId);

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
        topicId: topicId,
        author: jon.username,
        authorId: jon._id
      });
    }
  }
});
