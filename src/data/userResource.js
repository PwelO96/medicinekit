const UserResource = (user) => {
  if (!user) return null;
  return {
    id: user.user_id,
    name: user.username,
  };
};

UserResource.collection = (users) => users.map(UserResource);

export default UserResource;
