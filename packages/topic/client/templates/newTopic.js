Template.newTopic.onRendered(function () {
  $('#summernote').summernote();
});

Template.newTopic.onDestroyed(function () {
  $('#summernote').destroy();
});

Template.newTopic.events({
  'click .submit': function (e, tpl) {
    var topicCategoryId = tpl.$('#topic-category').val(),
        topicTitle = tpl.$('#topic-title').val(),
        topicBody = $('.note-editable').html();

    var topic = {
      title: topicTitle,
      categoryId: topicCategoryId,
      body: topicBody
    };

    Meteor.call('submitTopic', topic);
  }
});

Template.newTopic.helpers({
  categories: function () {
    return Categories.find();
  }
});
