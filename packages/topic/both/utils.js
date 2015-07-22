Topics.generateSlug = function (topic) {
  var initialSlug = getSlug(topic.title),
      uniqNum = 1;

  // When there is no duplicate slug, return the initialSlug
  if (Topics.find({slug: initialSlug}).count() === 0)
    return initialSlug;

  // If duplicate exists, generate a uniq slug
  var possibleSlug = initialSlug + '-' + uniqNum;
  while(Topics.find({slug: possibleSlug}).count() > 0) {
    uniqNum++;
    possibleSlug = initialSlug + '-' + uniqNum;
  }

  return possibleSlug;
};
