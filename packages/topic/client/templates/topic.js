var postsPerPage = 5;

Template.topic.onCreated(function () {
  var self = this;

  self.limit = new ReactiveVar(postsPerPage);

  self.autorun(function () {
    self.subscribe('posts', CurrentRoute.params.slug, self.limit.get());
  });
});

Template.topic.onRendered(function () {
  var self = this;

  // Load more when page bottom is hit
  $(window).scroll(function () {
    if ($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
      var limit = self.limit.get();
      self.limit.set(limit + postsPerPage);
    }
  });
});

Template.topic.onRendered(function () {
  this.$('.summernote').summernote({
    height: 200
  });
});

Template.topic.onDestroyed(function () {
  this.$('.summernote').destroy();
});

Template.topic.helpers({
  posts: function () {
    return Posts.find();
  },
  category: function () {
    return Categories.findOne(this.categoryId);
  },
  isReplying: function () {
    return Session.get('isReplying');
  }
});

Template.topic.events({
  'click .submit-post': function (e, tpl) {
    var postBody = $('.note-editable').html();
    var parentPostId = $('.parent-post-id').val();

    var post = {
      body: postBody,
      topicId: this._id,
      parentPostId: parentPostId
    };

    Meteor.call('submitPost', post);

    $('.note-editable').html('');

    $('.parent-poster').html('');
    $('.parent-post-body').html('');
    $('.parent-post-id').val('');
  }
});
