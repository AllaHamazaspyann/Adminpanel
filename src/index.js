import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';


import reducer from './store';
import Routes from './routes';
import { composeWithDevTools } from 'redux-devtools-extension';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes/>
    </BrowserRouter>
  </Provider>
  
  , document.getElementById('root'));
