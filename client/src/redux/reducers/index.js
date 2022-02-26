import { combineReducers } from 'redux';
import { productReducer } from './productReducer';
import { userReducer } from './userReducer';

const appReducer = combineReducers({ allProducts: productReducer, user: userReducer });

const CLEAR_ON_LOGOUT = 'CLEAR_ON_LOGOUT';
export const clearOnLogout = () => {
  return {
    type: CLEAR_ON_LOGOUT,
  };
};

const rootReducer = (state, action) => {
  if (action.type === CLEAR_ON_LOGOUT) {
    // set state to initial state
    state = undefined;
  }
  return appReducer(state, action);
};
export default rootReducer;
