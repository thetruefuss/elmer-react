import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'jquery/dist/jquery.slim.min.js';
import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { userLoggedIn } from "./actions/auth";
import setAuthorizationHeader from './utils/setAuthorizationHeader';

if (localStorage.token) {
  const user = {
    token: localStorage.token
  };
  setAuthorizationHeader(localStorage.token);
  store.dispatch(userLoggedIn(user));
}

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>, document.getElementById('root'));
registerServiceWorker();
