describe("incrementTopicCount", function(){
  beforeEach(function() {
    Accounts.createUser({
      username: 'jon',
      email: 'jon@example.com',
      password: 'jon1234',
      profile: {}
    });
  });

  afterEach(function() {
    Meteor.users.remove({});
  });

  it("increments the topicCount of the user", function(){
    var jon = Meteor.users.findOne({username: 'jon'});
    Meteor.users.incrementTopicCount(jon._id);

    var jonReloaded = Meteor.users.findOne({username: 'jon'});
    expect(jonReloaded.stats.topicCount).to.equal(1);
  });

  it("increments the submitCount of the user", function(){
    var jon = Meteor.users.findOne({username: 'jon'});
    Meteor.users.incrementTopicCount(jon._id);

    var jonReloaded = Meteor.users.findOne({username: 'jon'});
    expect(jonReloaded.stats.submitCount).to.equal(1);
  });
});

describe("incrementPostCount", function(){
  beforeEach(function() {
    Accounts.createUser({
      username: 'jon',
      email: 'jon@example.com',
      password: 'jon1234',
      profile: {}
    });
  });

  afterEach(function() {
    Meteor.users.remove({});
  });

  it("increments the postCount of the user", function(){
    var jon = Meteor.users.findOne({username: 'jon'});
    Meteor.users.incrementPostCount(jon._id);

    var jonReloaded = Meteor.users.findOne({username: 'jon'});
    expect(jonReloaded.stats.postCount).to.equal(1);
  });

  it("increments the submitCount of the user", function(){
    var jon = Meteor.users.findOne({username: 'jon'});
    Meteor.users.incrementPostCount(jon._id);

    var jonReloaded = Meteor.users.findOne({username: 'jon'});
    expect(jonReloaded.stats.submitCount).to.equal(1);
  });
});
