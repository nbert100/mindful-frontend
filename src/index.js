import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk'
//thunk returns function from the action creator
import { Provider } from 'react-redux'
import clientReducer from './reducers/clientReducer'
import provyderReducer from './reducers/provyderReducer'
//provider wraps the app so that we can use redux. any component  we wrap in provider will have access to the redux store
// import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
// set up store so we need to import create store

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(clientReducer, composeEnhancers(applyMiddleware(thunk)))
//store is where you're storing your data globally

ReactDOM.render(
    <Provider store={store}>
        <Router>
         <App />   
        </Router>        
    </Provider>, 
document.getElementById('root')
);


