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
  }
});

Template.topic.events({
  'click .submit-post': function (e, tpl) {
    var postBody = $('.note-editable').html();

    var post = {
      body: postBody,
      topicId: this._id
    };

    Meteor.call('submitPost', post);

    $('.note-editable').html('');
  }
});
