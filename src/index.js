import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {render} from 'react-dom';
import AppRoutes from './AppRoutes';
import {BrowserRouter as Router} from 'react-router-dom';

render(
  <Router>
    <AppRoutes />
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
