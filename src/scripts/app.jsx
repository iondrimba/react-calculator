import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { createStore } from 'redux';
import AppContainer from './container/appContainer.jsx';
import RootReducer from './reducers/root';

const defaultStore = {
  history: ['23','+','158'],
  displayValue: 0
};

let store = createStore(RootReducer, defaultStore, window.devToolsExtension && window.devToolsExtension());

render(
  <Provider store={store} >
    <AppContainer />
  </Provider>,
  document.getElementById('app')
);