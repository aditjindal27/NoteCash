import { combineReducers } from 'redux';

import auth from './auth';
import updateVal from './updateVal';

export const reducers = combineReducers({ auth, updateVal });
