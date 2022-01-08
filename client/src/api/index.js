import axios from 'axios';

// const API = axios.create({baseURL: 'http://localhost:5001' }); //change to heroku one

const API = axios.create({baseURL: 'https://tracker-expense-project.herokuapp.com' });

export const signin = (formData) => API.post('/users/signin', formData);
export const signup = (formData) => API.post('/users/signup', formData);
export const addVal = (formData, id) => API.patch(`/users/${id}`, formData);
export const resetVal = (id) => API.delete(`/users/${id}`);
export const fetchVal = (id) => API.get(`/users/${id}`);