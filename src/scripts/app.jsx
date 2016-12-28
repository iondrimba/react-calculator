import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { createStore } from 'redux';
import AppContainer from './container/appContainer.jsx';
import RootReducer from './reducers/root';
import defaultStore from './model/initialState';
import Styles from '../scss/app.scss';

let store = createStore(RootReducer, defaultStore, window.devToolsExtension && window.devToolsExtension());

render(
  <Provider store={store} >
    <AppContainer />
  </Provider>,
  document.getElementById('app')
);
