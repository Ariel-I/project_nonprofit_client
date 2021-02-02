import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
//import {createStore, applyMiddleware} from 'redux'
//import thunk form 'redux-thunk'
import rootReducer from "./reducers/rootReducer"

const store = (rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
