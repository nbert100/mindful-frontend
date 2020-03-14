import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
//provider wraps the app so that we can use redux. any component  we wrap in provider will have access to the redux store
// import './index.css';
import App from './App';
// set up store so we need to import create store

ReactDOM.render(<App />, document.getElementById('root'));


