import React from 'react'
import App from './App'
import ReactDOM from 'react-dom';
import store from './store/store'
import {Provider} from 'react-redux';
import './index.scss'


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

