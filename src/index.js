// import React from 'react';
// import ReactDOM from 'react-dom';
// import Router from './router/router'
// import stores from "./store";
// import { Provider } from "mobx-react";

// ReactDOM.render(
//   <Provider {...stores}>
//     <Router />
//   </Provider>,
//   document.getElementById('root')
// );


import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "mobx-react";
import 'antd/dist/antd.css';
import store from './mobx';
import App from './Todolist'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);