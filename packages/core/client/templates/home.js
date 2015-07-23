var postsPerPage = 12;

Template.home.onCreated(function () {
  var self = this;

  this.limit = new ReactiveVar(postsPerPage);

  this.autorun(function () {
    self.subscribe('recent-topics', self.limit.get());
  });
});

Template.home.onRendered(function () {
  var self = this;

  // Load more when page bottom is hit
  $(window).scroll(function () {
    if ($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
      var limit = self.limit.get();
      self.limit.set(limit + postsPerPage);
    }
  });
});

Template.home.helpers({
  recentTopics: function () {
    return Topics.find();
  }
});
