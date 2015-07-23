Router.route('/c', {
  name: 'category.index',
  template: 'categories',
  waitOn: function () {
    return [
      Meteor.subscribe('categories')
    ];
  }
});

Router.route('/c/:slug', {
  name: 'category.show',
  template: 'category',
  data: function () {
    return Categories.findOne({slug: this.params.slug});
  },
  waitOn: function () {
    return [
      Meteor.subscribe('category', this.params.slug)
    ];
  }
});
