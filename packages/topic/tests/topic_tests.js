describe("submitTopic", function(){
  it("creates a topic", function(){
    // Setup
    sinon.stub(Meteor, 'userId', function () { return 1; });
    sinon.stub(Meteor, 'user', function () { return {username: 'jon'}; });

    var topic = {
      title: 'testTitle',
      body: 'testBody',
      categoryId: 'testcategoryId'
    };

    Meteor.call('submitTopic', topic);

    expect(Topics.find().count()).to.equal(1);

    // Teardown
    Topics.remove({});
    Meteor.userId.restore();
    Meteor.user.restore();
  });
});
