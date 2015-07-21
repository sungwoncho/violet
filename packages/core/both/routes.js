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
