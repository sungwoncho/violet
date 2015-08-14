Router.onBeforeAction(function () {
  if (! Meteor.user()) {
    this.render('entrySignIn');
  } else {
    this.next();
  }
}, {
  only: ['newTopic']
});

Router.route('/t/new', {
  name: 'newTopic',
  template: 'newTopic',
  waitOn: function () {
    return [
      Meteor.subscribe('categories')
    ];
  }
});

Router.route('/t/:slug', {
  name: 'topic',
  template: 'topic',
  data: function () {
    return Topics.findOne({slug: this.params.slug});
  },
  waitOn: function () {
    return [
      Meteor.subscribe('topic', this.params.slug),
      //TODO: only subscribe to the category the topic belongs to
      Meteor.subscribe('categories')
    ];
  }
});
