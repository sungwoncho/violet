Meteor.startup(function () {
  if (Settings.find().count() === 0 && Categories.find().count() === 0) {

    // If not in test
    if (!process.env.IS_MIRROR) {
      // Populate test users
      var jonId = Accounts.createUser({
        username: 'jon',
        email: 'test@test.com',
        password: 'pass1234',
        profile: {
          username: 'jon',
        }
      });
      Meteor.users.update(jonId, {$set: {isAdmin: true}});

      Accounts.createUser({
        username: 'nora',
        email: 'test2@test.com',
        password: 'pass1234',
        profile: {
          username: 'nora'
        }
      });

      // Populate settings
      Settings.insert({
        public: {
          appName: 'Violet Development'
        }
      });

      // Stubs
      var _Meteor = {};
      _Meteor._user = Meteor.user;
      _Meteor._userId = Meteor.userId;

      Meteor.user = function () { return { isAdmin: true, username: 'jon' }; };
      Meteor.userId = function () { return 'testUserId'; };

      // Populate categories, topics, and posts
      for (var i = 0; i < 11; i++) {
        var category = {
          name: Fake.word(),
          slug: i,
          description: Fake.paragraph()
        };
        var categoryId = Meteor.call('createCategory', category);

        for (var j = 0; j < 11; j++) {
          var topic = {
            title: Fake.word(),
            body: Fake.paragraph(),
            categoryId: categoryId,
          };

          var topicSlug = Meteor.call('submitTopic', topic);
          var savedTopic = Topics.findOne({slug: topicSlug});
          var numPosts = _.random(2, 20);

          for (var k = 0; k < numPosts; k++) {
            var post = {
              body: 'testBody',
              topicId: savedTopic._id
            };

            Meteor.call('submitPost', post);
          }
        }
      }

      // Restore stub
      Meteor.user = _Meteor._user;
      Meteor.userId = _Meteor._userId;
    }

  }
});
