Factory.define('post', Posts, {
  body: 'testBody',
  topicId: 'testTopicId',
  author: 'testAuthor',
  authorId: 'testAuthorId',
  createdAt: new Date()
});

Factory.define('newPost', Posts, {
  body: 'testBody',
  topicId: 'testTopicId'
});
