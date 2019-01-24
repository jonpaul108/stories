import React from 'react';
import ReactDom from 'react-dom';
import {
  Provider
} from 'react-redux';
import store from './redux/store/store.js';
import App from './components/app.jsx';
ReactDom.render(
  <Provider store={store}>
  <App />
</Provider>,
  document.getElementById('app'));