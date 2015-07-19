Meteor.startup(function () {
  AccountsEntry.config({
    homeRoute: '/',
    dashboardRoute: '/',
    extraSignUpFields: [{
      field: 'username',
      label: 'username',
      type: 'text',
      required: true
    }]
  });
});
