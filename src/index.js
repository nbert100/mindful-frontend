import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { logger } from "redux-logger";
//thunk returns function from the action creator
import { Provider } from "react-redux";
import rootReducer from "./reducers/rootReducer";
//provider wraps the app so that we can use redux. any component  we wrap in provider will have access to the redux store
// import './index.css';
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Navigation } from "./components/Navigation";
// set up store so we need to import create store

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, logger))
);
//store is where you're storing your data globally

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Navigation />
      <h2 className="m-3 d-flex justify-content-center">Mindful</h2>

      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
