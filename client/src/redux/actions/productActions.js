import { ActionTypes } from '../constants/action-types';

export const setProducts = (products) => {
  console.log('action', products);
  return {
    type: ActionTypes.SET_PRODUCTS,
    products,
  };
};
