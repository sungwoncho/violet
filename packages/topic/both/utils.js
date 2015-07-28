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

Topics.addParticipant = function (topic, userId) {
  var today = new Date();
  var participantsId = _.pluck(topic.participants, '_id');

  if (_.contains(participantsId, userId)) {
    Topics.update({_id: topic._id, 'participants._id': userId}, {$set: {'participants.$.lastPostAt': today}});
  } else {
    Topics.update(topic._id, {$addToSet: {participants: {_id: userId, lastPostAt: today}}});
  }
};
