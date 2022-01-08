import * as api from '../api/index.js';

export const signin = (formData, history) => async (dispatch) => {
  try {
    const {data} = await api.signin(formData);
    dispatch({type:'AUTH',data:data});
    history('/home');
  } catch (error) {
    alert(error.response.data.message);
  }
};

export const signup = (formData, history) => async (dispatch) => {
  try {
    const {data} = await api.signup(formData);
    dispatch({type:'AUTH',data: data});
    history('/home');
  } catch (error) {
    alert(error.response.data.message);
  }
};
