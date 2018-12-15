import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { createStore } from 'redux';
import AppContainer from './container/appContainer.js';
import RootReducer from './reducers/root';
import defaultStore from './model/initialState';
import './../scss/app.scss';

let store = createStore(RootReducer, defaultStore, window.devToolsExtension && window.devToolsExtension());

render(
  <Provider store={store} >
    <AppContainer />
  </Provider>,
  document.getElementById('app')
);

if (process.env.NODE_ENV === 'production') {
  (function () {
    if ('serviceWorker' in navigator) {
      window.onload = function () {
        navigator.serviceWorker.register('sw.js');
      }
    }
  })();
  (function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
      (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date(); a = s.createElement(o),
      m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
  })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

  ga('create', 'UA-89642554-1', 'auto');
  ga('send', 'pageview');

}
