import { createStore } from 'redux';
import { status } from './actions/index'
import myReducer from './reducers/index'
const store = createStore(myReducer);
// var action = {type: 'TOGGLE_STATUS'};

store.dispatch(status());

console.log(store.getState())