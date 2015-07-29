var topicsPerPage = 12;

Template.topicIndex.onCreated(function () {
  var self = this;

  this.limit = new ReactiveVar(topicsPerPage);

  this.autorun(function () {
    if (CurrentRoute.is('category.show')) {
      self.subscribe('topics', CurrentRoute.params.slug, self.limit.get());
    } else {
      self.subscribe('recent-topics', self.limit.get());
    }

    self.subscribe('categories');
  });
});

Template.topicIndex.onRendered(function () {
  var self = this;

  // Load more when page bottom is hit
  $(window).scroll(function () {
    if ($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
      var limit = self.limit.get();
      self.limit.set(limit + topicsPerPage);
    }
  });

  // Choose the current category
  if (Router.current().route.getName() === 'category.show') {
    var slug = Router.current().params.slug;
    this.$('.category-select').val(slug);
  }
});

Template.topicIndex.helpers({
  recentTopics: function () {
    return Topics.find({}, {sort: {lastActivity: -1}});
  },
  categories: function () {
    return Categories.find();
  }
});

Template.topicIndex.events({
  'change .category-select': function (e, tpl) {
    var categorySlug = e.target.value;

    if (categorySlug === 'all') {
      Router.go('home');
    } else {
      Router.go('category.show', {slug: categorySlug});
    }
  }
});
