import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './css/main.scss'
import store from "./store";

ReactDOM.render(
  <App store={store} />,
  document.getElementById('root')
);
