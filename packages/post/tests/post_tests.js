describe("submitPost", function(){
  // Setup
  beforeEach(function () {
    var jonId = testHelpers.loginAsJon();
    jon = Meteor.users.findOne(jonId);
  });

  // Teardown
  afterEach(function () {
    Posts.remove({});
    Topics.remove({});
    testHelpers.logout();
  });

  it("creates a post", function(){
    var topic = Factory.create('topic');
    var post = _.omit(Factory.build('newPost', {topicId: topic._id}), '_id');

    Meteor.call('submitPost', post);
    expect(Posts.find().count()).to.equal(1);
  });

  it("increments the postCount for the topic", function(){
    var topic = Factory.create('topic');
    var post = _.omit(Factory.build('newPost', {topicId: topic._id}), '_id');

    var ret = Meteor.call('submitPost', post);

    var topicReloaded = Topics.findOne(topic._id);
    expect(topicReloaded.postCount).to.equal(1);
  });

  it("calls Meteor.users.incrementPostCount with the currentUser's id", function(){
    var spy = sinon.spy(Meteor.users, 'incrementPostCount');

    var topic = Factory.create('topic');
    var post = _.omit(Factory.build('newPost', {topicId: topic._id}), '_id');

    Meteor.call('submitPost', post);

    expect(spy.calledWith(jon._id)).to.equal(true);
  });

  it("adds the poster's _id to topic's participants", function(){
    var topic = Factory.create('topic', {participants: []});
    var post = _.omit(Factory.build('newPost', {topicId: topic._id}), '_id');

    Meteor.call('submitPost', post);

    var topicReloaded = Topics.findOne(topic._id);
    expect(topicReloaded.participants[0]._id).to.equal(jon._id);
  });
});
