import React, { useLayoutEffect } from 'react';
import './App.scss';
import { Provider } from 'react-redux';
import Navigation from './navigation';
import store from './store';
import { isAuthenticated } from './store/actions/session.action';

function App() {

	useLayoutEffect(() => {
		store.dispatch(isAuthenticated())
	}, [])

	return (
		<Provider store={store}>
			<Navigation />
		</Provider>
	);
}

export default App;
