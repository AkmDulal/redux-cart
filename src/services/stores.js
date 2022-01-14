// import { createStore, applyMiddleware } from 'redux';
import { createStore } from 'redux';
// import thunkMiddleware from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';


import rootReducer from './reducers/index'
const store =  createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;