import './styles.scss';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App.jsx';
import {store} from './reducers'
render(
  <Provider store={store}>
    <App />

  </Provider>,
   document.getElementById('root'));
