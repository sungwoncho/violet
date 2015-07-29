describe("submitTopic", function(){
  // Setup
  beforeEach(function() {
    var jonId = testHelpers.loginAsJon();
    jon = Meteor.users.findOne(jonId);
  });

  // Teardown
  afterEach(function () {
    Categories.remove({});
    Topics.remove({});
    testHelpers.logout();
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

  it("increments the topicCount of the category", function(){
    var categoryId = Categories.insert({
      name: 'testName',
      description: 'testDescription',
      slug: 'testname',
      position: 1
    });

    var topic = {
      title: 'testTitle',
      body: 'testBody',
      categoryId: categoryId
    };

    Meteor.call('submitTopic', topic);

    var category = Categories.findOne(categoryId);
    expect(category.topicCount).to.equal(1);
  });

  it("calls Meteor.users.incrementTopicCount for the user", function(){
    var spy = sinon.spy(Meteor.users, 'incrementTopicCount');

    var topic = {
      title: 'testTitle',
      body: 'testBody',
      categoryId: 'testCategoryId'
    };

    Meteor.call('submitTopic', topic);

    expect(spy.calledWith(jon._id)).to.equal(true);
  });
});
