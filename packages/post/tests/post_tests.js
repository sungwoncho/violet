describe("submitPost", function(){
  // Setup
  beforeEach(function () {
    sinon.stub(Meteor, 'userId', function () { return 'jonUserId'; });
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

    expect(spy.calledWith('jonUserId')).to.equal(true);
  });

  it("adds the poster's _id to topic's participants", function(){
    var topic = Factory.create('topic', {participants: []});
    var post = _.omit(Factory.build('newPost', {topicId: topic._id}), '_id');

    Meteor.call('submitPost', post);

    var topicReloaded = Topics.findOne(topic._id);
    expect(topicReloaded.participants[0]._id).to.equal('jonUserId');
  });
});
