import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { createStore } from 'redux';
import Style from '../scss/app.scss';

const defaultStore = {
  greeting: 'Hello'
};

let store = createStore(() => { }, defaultStore, window.devToolsExtension && window.devToolsExtension());

render(
  <Provider store={store} >
    <h1>{defaultStore.greeting}</h1>
  </Provider>,
  document.getElementById('app')
);