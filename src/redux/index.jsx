import {createStore, combineReducers, applyMiddleware} from 'redux';
import * as reducer from './reducer';
import thunk from 'redux-thunk';

const  store = createStore(
  combineReducers(reducer),
  applyMiddleware(thunk)
);
export default store;