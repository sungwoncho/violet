describe("Topics", function(){
  // Teardown
  afterEach(function() {
   Topics.remove({});
  });

  describe("generateSlug", function(){
    it("creates a slug", function(){
      var topic = {title: 'test name'};

      expect(Topics.generateSlug(topic)).to.equal('test-name');
    });

    it("appends an incrementing number if duplicate slug exists", function(){
      Factory.create('topic', {slug: 'test-name'});
      var topic = {title: 'test name'};

      expect(Topics.generateSlug(topic)).to.equal('test-name-1');

      // Teardown
      Topics.remove({});
    });
  });

  describe("addParticipant", function(){
    it("update participant's lastPostAt if participant already exists", function(){
      var originalPostAt = new Date(2010, 7, 1);
      var topic = Factory.create('topic', {participants: [{_id: 'jonId', lastPostAt: originalPostAt}]});

      Topics.addParticipant(topic, 'jonId');

      // Note: originalPostAt.getYear() is 110. When the test runs, the value
      // should be greater
      var topicReloaded = Topics.findOne(topic._id);
      expect(topicReloaded.participants[0].lastPostAt.getYear()).to.not.equal(110);
    });

    it("adds a new participant if one does not exist", function(){
      var topic = Factory.create('topic', {participants: []});

      Topics.addParticipant(topic, 'jonId');

      var topicReloaded = Topics.findOne(topic._id);
      expect(topicReloaded.participants[0]._id).to.equal('jonId');
    });
  });
});
