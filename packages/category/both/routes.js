Router.route('/c/:slug', {
  name: 'category',
  template: 'category',
  data: function () {
    return Categories.findOne({slug: this.params.slug});
  },
  waitOn: function () {
    return [
      Meteor.subscribe('category', this.params.slug),
      Meteor.subscribe('topics', this.params.slug)
    ];
  }
});
