describe("submitPost", function(){
  // Setup
  beforeEach(function () {
    sinon.stub(Meteor, 'userId', function () { return 1; });
    sinon.stub(Meteor, 'user', function () { return {username: 'jon'}; });
  });

  // Teardown
  afterEach(function () {
    Posts.remove({});
    Topics.remove({});

    Meteor.userId.restore();
    Meteor.user.restore();
  });

  it("creates a post", function(){
    post = {
      body: 'testBody',
      topicId: 'testTopicId'
    };

    Meteor.call('submitPost', post);
    expect(Posts.find().count()).to.equal(1);
  });

  it("increments the postCount for the topic", function(){
    var topic = Factory.create('topic');

    post = {
      body: 'testBody',
      topicId: topic._id
    };

    var ret = Meteor.call('submitPost', post);

    var topicReloaded = Topics.findOne(topic._id);
    expect(topicReloaded.postCount).to.equal(1);
  });

  it("calls Meteor.users.incrementPostCount with the currentUser's id", function(){
    var spy = sinon.spy(Meteor.users, 'incrementPostCount');

    var post = {
      body: 'testBody',
      topicId: 'testTopicId'
    };

    Meteor.call('submitPost', post);

    expect(spy.calledWith(1)).to.equal(true);
  });
});
