import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter,Switch, Route} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
  <Switch>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Switch>
  </BrowserRouter>
  ,
  document.getElementById('root')
);


