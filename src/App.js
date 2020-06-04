import React from 'react';
import './App.scss';
import { Provider } from 'react-redux';
import Navigation from './navigation';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

export default App;
