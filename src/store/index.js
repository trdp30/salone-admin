import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import AppStateReducer from './reducers/app-state-reducer';
import ConnectionReducer from './reducers/connectivity-reducer';
import UserReducer from './reducers/user.reducer';
import SessionReducer from './reducers/session.reducer';
import registrationReducer from './reducers/register.reducer';
import categoryReducer from './reducers/category.reducer';
import itemReducers from './reducers/item.reducer';
import orderReducer from './reducers/order.reducer';
import cartItemReducer from './reducers/cart-item.reducer';
import addressReducer from './reducers/address.reducer';
import appointmentReducer from './reducers/appointment.reducer';
import packageReducer from './reducers/package.reducer';
import dashboardReducer from './reducers/dashboard.reducer';

const reducers =  combineReducers({
	appState: AppStateReducer,
	networkAvailability: ConnectionReducer,
	user: UserReducer,
	session: SessionReducer,
	register: registrationReducer,
	category: categoryReducer,
	item: itemReducers,
	order: orderReducer,
	cartItem: cartItemReducer,
	address: addressReducer,
	appointment: appointmentReducer,
	package: packageReducer,
	counts: dashboardReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [thunk];

const store = createStore(reducers, composeEnhancers(applyMiddleware(...middleware)))

export default store;
