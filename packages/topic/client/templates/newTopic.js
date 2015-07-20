Template.newTopic.onRendered(function () {
  this.$('#summernote').summernote();
});

Template.newTopic.onDestroyed(function () {
  this.$('#summernote').destroy();
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

    if (topicTitle === '')
      tpl.$('.error').text('Title is required.');
    if (topicBody === '')
      tpl.$('.error').text('Body is required.');

    Meteor.call('submitTopic', topic, function (err, topicSlug) {
      Router.go('topic', {slug: topicSlug});
    });
  }
});

Template.newTopic.helpers({
  categories: function () {
    return Categories.find();
  }
});
