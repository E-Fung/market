import { ActionTypes } from '../constants/action-types';

export const userReducer = (state = { isFetching: true }, action) => {
  switch (action.type) {
    case ActionTypes.GET_USER:
      return action.user;
    case ActionTypes.SET_FETCHING_STATUS:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    default:
      return state;
  }
};
