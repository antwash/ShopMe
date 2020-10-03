export const UserActions = {
  setCurrentUser: "SET_CURRENT_USER",
};

export const setCurrentUserAction = (user) => {
  return {
    type: UserActions.setCurrentUser,
    payload: user,
  };
};
