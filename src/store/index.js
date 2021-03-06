import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk'
import { siteReducer } from './reducers/siteReducer';
import { userReducer } from './reducers/userReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
  siteReducer,
  userReducer
})

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))