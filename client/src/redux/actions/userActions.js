import { ActionTypes } from '../constants/action-types';

export const gotUser = (user) => {
  return {
    type: ActionTypes.GET_USER,
    user,
  };
};
