import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { createStore } from 'redux';
import AppContainer from './container/appContainer.jsx';
const defaultStore = {
  greeting: 'Hello'
};

let store = createStore(() => { }, defaultStore, window.devToolsExtension && window.devToolsExtension());

render(
  <Provider store={store} >
    <AppContainer/>
  </Provider>,
  document.getElementById('app')
);