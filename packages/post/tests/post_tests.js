describe("submitPost", function(){
  it("creates a post", function(){
    // Setup
    sinon.stub(Meteor, 'userId', function () { return 1; });
    sinon.stub(Meteor, 'user', function () { return {username: 'jon'}; });

    post = {
      body: 'testBody',
      topicId: 'testTopicId'
    };

    Meteor.call('submitPost', post);
    expect(Posts.find().count()).to.equal(1);

    // Teardown
    Posts.remove({});
    Meteor.userId.restore();
    Meteor.user.restore();
  });
});
