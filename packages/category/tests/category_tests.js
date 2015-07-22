describe("createCategory", function(){
  it("creates a category", function(){
    var category = {
      name: 'testName',
      description: 'testDescription'
    };

    Meteor.call('createCategory', category);
    expect(Categories.find().count()).to.equal(1);

    // Teardown
    Categories.remove({});
  });
});

describe("updateCategory", function(){
  it("updates a category name and generates an appropriate slug", function(){
    var categoryId = Categories.insert({
      name: 'testName',
      description: 'testDescription',
      slug: 'testname',
      position: 1
    });

    Meteor.call('updateCategory', {$set: {name: 'anotherName'}}, categoryId);

    var updatedCategory = Categories.findOne(categoryId);
    expect(updatedCategory.name).to.equal('anotherName');
    expect(updatedCategory.slug).to.equal('anothername');

    // Teardown
    Categories.remove({});
  });
});
