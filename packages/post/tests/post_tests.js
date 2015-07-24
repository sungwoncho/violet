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
    var topicId = Topics.insert({
      title: 'testTitle',
      categoryId: 'testCategoryId',
      body: 'testBody',
      author: 'testAuthor',
      authorId: 'testAuthorId',
      slug: 'test-title'
    });

    post = {
      body: 'testBody',
      topicId: topicId
    };

    Meteor.call('submitPost', post);

    var topic = Topics.findOne(topicId);
    expect(topic.postCount).to.equal(1);
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
