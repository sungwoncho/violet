Template.newTopic.onRendered(function () {
  $('#summernote').summernote();
});

Template.newTopic.onDestroyed(function () {
  $('#summernote').destroy();
});

Template.newTopic.events({
  'click .submit': function (e, tpl) {
    var topicTitle = tpl.$('#topic-title').val();
    var postBody = $('.note-editable').html();

    Meteor.call('submitTopic', topicTitle, postBody);
  }
});
