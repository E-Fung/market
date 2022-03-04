import { ActionTypes } from '../constants/action-types';

const initialState = [];

export const productReducer = (state = initialState, { type, products }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      console.log(products, 'payload');
      return products;
    default:
      return state;
  }
};
