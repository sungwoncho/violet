Router.route('/u/:username', {
  name: 'profile',
  template: 'profile',
  data: function () {
    return Meteor.users.findOne({username: this.params.username});
  },
  waitOn: function () {
    return Meteor.subscribe('userProfile', this.params.username);
  }
});
