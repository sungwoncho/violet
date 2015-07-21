Template.adminEditCategory.events({
  'submit #category-form': function (e, tpl) {
    e.preventDefault();

    var categoryId = this._id,
        categoryName = tpl.$('input[name=name]').val(),
        categoryPosition = tpl.$('input[name=position]').val(),
        categoryDescription = tpl.$('textarea[name=description]').val();

    var modifier = {$set: {name: categoryName, position: categoryPosition, description: categoryDescription}};

    Meteor.call('updateCategory', modifier, categoryId, function (err, res) {
      Router.go('adminEditCategory', {slug: res.slug});
    });
  }
});
