import { createSelector } from 'reselect';

export const getUserById = () => createSelector(
  (state, user_id) => state.data.byId[user_id],
  (user) => {
    if(user) {
      return user
    }
    return {}
  })