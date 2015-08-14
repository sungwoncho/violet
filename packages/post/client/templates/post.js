Template.post.helpers({
  parentPost: function () {
    return Posts.findOne(this.parentPostId);
  }
});

Template.post.events({
  'click .reply-btn': function (e, tpl) {
    e.preventDefault();

    $('.parent-post-id').val(this._id);
    $('.note-editable').trigger('focus');

    $('.parent-poster').html('In reply to: ' + this.author);
    $('.parent-post-body').html(this.body);
  }
});
