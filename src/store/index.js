import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import AppStateReducer from './reducers/app-state-reducer';
import ConnectionReducer from './reducers/connectivity-reducer';

const reducers =  combineReducers({
  appState: AppStateReducer,
  networkAvailability: ConnectionReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [thunk];

const store = createStore(reducers, composeEnhancers(applyMiddleware(...middleware)))

export default store;
