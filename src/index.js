import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { Provider } from "react-redux";
//provider wraps the app so that we can use redux. any component  we wrap in provider will have access to the redux store
import App from "./App";

import store from "./store";
// set up store so we need to import create store

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//store is where you're storing your data globally

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
