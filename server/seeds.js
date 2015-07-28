Meteor.startup(function () {
  // TODO: detect the first run
  if (Settings.find().count() === 0 && Categories.find().count() === 0) {

    // If not in test
    if (!process.env.IS_MIRROR) {
      console.log('Generating seeds...');

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

      for (var i = 1; i <= 30; i++) {
        Accounts.createUser({
          username: 'user_' + i,
          email: 'test' + i + '@test.com',
          password: 'pass1234',
          profile: {
            username: 'user_' + i
          }
        });
      }

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

      var stubUser = function() {
        var userNumber = _.random(1, 30);
        var currentUser = Meteor.users.findOne({username: 'user_' + userNumber});
        Meteor.user = function () { return currentUser; };
        Meteor.userId = function () { return currentUser._id; };
      };

      var stubAdmin = function () {
        var jon = Meteor.users.findOne(jonId);
        Meteor.user = function () { return jon; };
        Meteor.userId = function () { return jon._id; };
      };

      // Populate categories, topics, and posts
      for (var i = 0; i < 5; i++) {
        stubAdmin();

        var category = {
          name: Fake.word(),
          description: Fake.paragraph()
        };
        var categoryId = Meteor.call('createCategory', category);

        for (var j = 0; j < 21; j++) {
          stubUser();

          var topic = {
            title: Fake.word(),
            body: Fake.paragraph(),
            categoryId: categoryId,
          };

          var topicSlug = Meteor.call('submitTopic', topic);
          var savedTopic = Topics.findOne({slug: topicSlug});
          var numPosts = _.random(2, 20);

          for (var k = 0; k < numPosts; k++) {
            stubUser();

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
