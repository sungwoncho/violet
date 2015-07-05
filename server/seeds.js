Meteor.startup(function () {
  if (Posts.find().count() === 0) {
    for (var i = 0; i < 100; i++) {
      Posts.insert({
        title: Fake.sentence(),
        content: Fake.paragraph()
      } );
    }
  }
});
