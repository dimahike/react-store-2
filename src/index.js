import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import './scss/app.scss';

import App from './App';
import store from './redux/store';

ReactDOM.render(
  <Router  basename={process.env.PUBLIC_URL} >
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root'),
);
