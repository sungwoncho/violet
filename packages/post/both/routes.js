Router.route('/posts', {
  waitOn: function () {
    return Meteor.subscribe('posts');
  }
});

Router.route('/posts/:_id', {
  name: 'post',
  template: 'post',
  data: function () {
    return Posts.findOne(this.params._id);
  },
  waitOn: function () {
    return Meteor.subscribe('post', this.params._id);
  }
});
