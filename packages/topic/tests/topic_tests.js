describe("submitTopic", function(){
  // Setup
  beforeEach(function () {
    sinon.stub(Meteor, 'userId', function () { return 1; });
    sinon.stub(Meteor, 'user', function () { return {username: 'jon'}; });
  });

  // Teardown
  afterEach(function () {
    Topics.remove({});
    Meteor.userId.restore();
    Meteor.user.restore();
  });

  it("creates a topic", function(){
    var topic = {
      title: 'testTitle',
      body: 'testBody',
      categoryId: 'testcategoryId'
    };

    Meteor.call('submitTopic', topic);

    expect(Topics.find().count()).to.equal(1);
  });
});
