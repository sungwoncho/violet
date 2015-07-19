// TODO: stub Meteor.user()?
MochaWeb.testOnly(function(){
  describe("submitPost", function(){
    it("creates a post", function(){
      var _userId = Meteor.userId,
          _user = Meteor.user;
      Meteor.userId = function () {
        return 1;
      };
      Meteor.user = function () {
        return {username: 'Jon'};
      };

      post = {
        body: 'testBody',
        topicId: 'testTopicId'
      };

      Meteor.call('submitPost', post);
      chai.expect(Posts.find().count()).to.equal(1);

      // Teardown
      Posts.remove({});
      Meteor.userId = _userId;
      Meteor.user =_user;
    });
  });
});
