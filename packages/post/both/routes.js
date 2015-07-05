Router.route('/posts', {
  waitOn: function () {
    return Meteor.subscribe('posts');
  }
});
