Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', {
	name: 'home',
  template: 'home',
  waitOn: function () {
    return Meteor.subscribe('recent-topics');
  }
});

// Admin Routes

Router.onBeforeAction(function () {
  if (! Meteor.user() || ! Meteor.user().isAdmin) {
    this.render('404');
  } else {
    this.next();
  }
}, {
  only: ['settings']
});

Router.route('/admin/settings', {
  name: 'settings',
  template: 'settings',
  waitOn: function () {
    return Meteor.subscribe('settings');
  }
});
