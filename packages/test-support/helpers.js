// export chai.expect as expect
expect = chai.expect;

testHelpers = {};

testHelpers.loginAsJon = function () {
  var jonId = Accounts.createUser({
    username: 'jon',
    email: 'jon@example.com',
    password: 'pass1234',
    profile: {
      username: 'jon'
    }
  });
  var jon = Meteor.users.findOne(jonId);

  sinon.stub(Meteor, 'userId', function () { return jon._id; });
  sinon.stub(Meteor, 'user', function () { return jon; });

  return jonId;
};

testHelpers.logout = function () {
  Meteor.users.remove({});
  Meteor.userId.restore();
  Meteor.user.restore();
};
