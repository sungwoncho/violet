Factory.define('topic', Topics, {
  title: 'testTitle',
  categoryId: 'testCategoryId',
  body: 'testBody',
  author: 'testAuthor',
  authorId: 'testAuthorId',
  participants: [{
    _id: 'testId',
    username: 'testUsername',
    emailHash: 'testEmailHash',
    lastPostAt: new Date(2015,7,10)
  }],
  slug: 'test-title'
});
