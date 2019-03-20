import { combineReducers } from 'redux';
import formReducer from './formReducer.js';

export default combineReducers({
  home: formReducer,
});