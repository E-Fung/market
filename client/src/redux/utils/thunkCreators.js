import axios from 'axios';
import { gotUser } from '../actions/userActions';
import { setProducts } from '../actions/productActions';

axios.interceptors.request.use(async function (config) {
  const token = await localStorage.getItem('messenger-token');
  config.headers['x-access-token'] = token;

  return config;
});

//USER

export const register = (credentials) => async (dispatch) => {
  try {
    const { data } = await axios.post('http://localhost:5000/register', credentials);
    await localStorage.setItem('messenger-token', data.token);
    dispatch(gotUser(data.user));
  } catch (error) {
    dispatch(gotUser({ error: error.response.data.error || 'Server Error' }));
  }
};

//PRODUCT

export const getProducts = (params) => async (dispatch) => {
  try {
    let { data } = params.category ? await axios.post('http://localhost:5000/product/category', params) : await axios.get('http://localhost:5000/product');
    dispatch(setProducts(data));
  } catch (error) {
    console.log(error);
  }
};
