Router.route('/topic/:_id', {
  name: 'topic',
  template: 'topic',
  data: function () {
    return Topics.findOne(this.params._id);
  },
  waitOn: function () {
    return [
      Meteor.subscribe('topic', this.params._id),
      Meteor.subscribe('posts', this.params._id)
    ];
  }
});
