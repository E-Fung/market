import axios from 'axios';
import { gotUser } from '../actions/userActions';

export const register = (credentials) => async (dispatch) => {
  try {
    const { data } = await axios.post('http://localhost:5000/register', credentials);
    console.log(data);
    await localStorage.setItem('messenger-token', data.token);
    dispatch(gotUser(data.user));
  } catch (error) {
    dispatch(gotUser({ error: error.response.data.error || 'Server Error' }));
  }
};
