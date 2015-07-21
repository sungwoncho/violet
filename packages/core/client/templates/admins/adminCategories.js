Template.adminCategories.helpers({
  categories: function () {
    return Categories.find({}, {sort: {position: 1}});
  }
});
