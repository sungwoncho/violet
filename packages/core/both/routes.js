Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', {
	name: 'home',
  template: 'home'
});

// Admin Routes

Router.onBeforeAction(function () {
  if (! Meteor.user() || ! Meteor.user().isAdmin) {
    this.render('404');
  } else {
    this.next();
  }
}, {
  only: ['adminSettings', 'adminCategories', 'adminEditCategory']
});

Router.route('/admin/settings', {
  name: 'adminSettings',
  template: 'adminSettings',
  waitOn: function () {
    return Meteor.subscribe('settings');
  }
});

Router.route('/admin/categories', {
  name: 'adminCategories',
  template: 'adminCategories',
  waitOn: function () {
    return Meteor.subscribe('categories');
  }
});

Router.route('admin/categories/:slug/edit', {
  name: 'adminEditCategory',
  template: 'adminEditCategory',
  data: function () {
    return Categories.findOne({slug: this.params.slug});
  },
  waitOn: function () {
    return Meteor.subscribe('category', this.params.slug);
  }
});
