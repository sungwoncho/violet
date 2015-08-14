var participantsDisplayed = 4;

Template.topicRow.helpers({
  recentParticipants: function () {
    return _.sortBy(this.participants, 'lastPostAt').reverse().splice(0, participantsDisplayed);
  },
  moreParticipantsCount: function () {
    if (this.participants.length > participantsDisplayed)
      return this.participants.length - participantsDisplayed;
  }
});
