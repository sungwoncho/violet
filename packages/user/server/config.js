Accounts.onCreateUser(function (options, user) {
  user.emailHash = Gravatar.hash(options.email);

  // Still use the defualt hook's profile behavior
  if (options.profile)
    user.profile = options.profile;

  return user;
});

Avatar.setOptions({
  gravatarDefault: 'identicon',
  emailHashProperty: 'emailHash'
});
