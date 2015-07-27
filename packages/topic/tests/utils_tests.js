describe("Topics", function(){
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
});
