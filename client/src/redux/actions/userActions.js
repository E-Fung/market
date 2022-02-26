import { ActionTypes } from '../constants/action-types';

export const gotUser = (user) => {
  return {
    type: ActionTypes.GET_USER,
    user,
  };
};

export const setFetchingStatus = (isFetching) => ({
  type: ActionTypes.SET_FETCHING_STATUS,
  isFetching,
});
