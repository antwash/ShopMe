export const UserActionsTypes = {
  setCurrentUser: "SET_CURRENT_USER",
};

export const setCurrentUserAction = (user) => {
  return {
    type: UserActionsTypes.setCurrentUser,
    payload: user,
  };
};
