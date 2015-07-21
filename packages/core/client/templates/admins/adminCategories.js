Template.adminCategories.helpers({
  categories: function () {
    return Categories.find({}, {sort: {position: 1}});
  }
});

Template.adminCategories.events({
  'submit #new-category': function (e, tpl) {
    e.preventDefault();

    var categoryName = tpl.$('input[name=name]').val(),
        categoryDescription = tpl.$('textarea[name=description]').val();

    category = {
      name: categoryName,
      description: categoryDescription
    };

    Meteor.call('createCategory', category);
  }
});
