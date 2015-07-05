Router.route('/category/:_id', {
  name: 'category',
  template: 'category',
  data: function () {
    return Categories.findOne(this.params._id);
  },
  waitOn: function () {
    return [
      Meteor.subscribe('category', this.params._id),
      Meteor.subscribe('topics', this.params._id)
    ];
  }
});
