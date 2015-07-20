Meteor.startup(function () {
  if (Settings.find().count() === 0 && Categories.find().count() === 0) {

    // If not in test
    if (!process.env.IS_MIRROR) {
      for (var i = 0; i < 10; i++) {
        var category = {
          name: Fake.word()
        };
        var categoryId = Meteor.call('createCategory', category);
      }
    }

    Settings.insert({
      appName: 'Violet'
    });


    // var jonId = Accounts.createUser({
    //   username: 'jon',
    //   email: 'jon@example.com',
    //   password: 'testPassword',
    //   profile: {
    //     username: 'jon'
    //   }
    // });
    // var jon = Meteor.users.findOne(jonId);
    //
    // for (var i = 0; i < 10; i++) {
    //   var category = {
    //     name: Fake.word()
    //   };
    //   var categoryId = Meteor.call('createCategory', category);
    //
    //   var topic = {
    //     title: Fake.sentence(),
    //     categoryId: categoryId,
    //     body: Fake.paragraph(),
    //   };
    //
    //   var topicId = Meteor.call('submitTopic', topic);
    //
    //   Posts.insert({
    //     body: Fake.paragraph(),
    //     topicId: topicId,
    //     author: jon.username,
    //     authorId: jon._id
    //   });
    // }
  }
});
