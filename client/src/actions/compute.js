import * as api from '../api/index.js';

export const addValue = (formData, id) => async (dispatch) => {
  try {
    const {data} = await api.addVal(formData, id);
    dispatch({type:'VAL',payload: data});
  } catch (error) {
    alert(error.response.data.message);
  }
};

export const resetValue = (id) => async (dispatch) => {
  try {
    const {data} = await api.resetVal(id);
    dispatch({type:'RESET',payload: data});
  } catch (error) {
    alert(error.response.data.message);
  }
};

export const getValue = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchVal(id);
    dispatch({ type: "FETCH", payload: data });
  } catch (error) {
    console.log(error);
  }
};
