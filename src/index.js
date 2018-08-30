import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "jquery/dist/jquery.slim.min.js";
import "popper.js/dist/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { userLoggedIn } from "./actions/auth";
import setAuthorizationHeader from "./utils/setAuthorizationHeader";

/**
 * TOKEN INSPECTION
 */
if (localStorage.token) {
  const user = {
    token: localStorage.token
  };
  setAuthorizationHeader(localStorage.token);
  store.dispatch(userLoggedIn(user));

  /**
   * Not Working Yet.
   */
  // const decoded = decode(localStorage.token);
  // const exp = decoded.exp;
  // const orig_iat = decoded.orig_iat;
  // const user = {
  //   token: localStorage.token
  // };
  //
  // if (exp - Date.now() / 1000 > 1800 && Date.now() / 1000 - orig_iat < 628200) {
  //   console.log("JWT needs to be refreshed.");
  //   store.dispatch(refreshToken(user));
  // } else if (exp - Date.now() / 1000 < 1800) {
  //   console.log("JWT is already up-to-date.");
  //   setAuthorizationHeader(localStorage.token);
  //   store.dispatch(userLoggedIn(user));
  // } else {
  //   console.log("JWT expired and can't be refreshed.");
  //   localStorage.removeItem("token");
  //   setAuthorizationHeader();
  // }
}

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <Route component={App} />
    </Provider>
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
