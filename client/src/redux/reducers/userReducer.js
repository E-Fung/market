import { ActionTypes } from '../constants/action-types';

export const userReducer = (state = { isFetching: true }, action) => {
  switch (action.type) {
    case ActionTypes.GET_USER:
      return action.user;
    default:
      return state;
  }
};
