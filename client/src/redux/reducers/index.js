import { combineReducers } from 'redux';
import { productReducer } from './productReducer';
<<<<<<< HEAD
import { userReducer } from './userReducer';

const appReducer = combineReducers({ allProducts: productReducer, user: userReducer });
=======

const appReducer = combineReducers({ allProducts: productReducer });
>>>>>>> 5f55c9b861e717032550051fef3882a7687b142f

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
