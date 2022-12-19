import backend_reducer from './reducers/Backend_reducer.js';
import frontend_reducer from './reducers/Frontend_reducer.js';
import overall_reducer from './reducers/Overall_reducer.js';
import { createStore , combineReducers }  from 'redux';

let rootReducer =  combineReducers({ frontend : frontend_reducer , backend : backend_reducer , overall : overall_reducer})

let store = createStore(rootReducer)

export default store