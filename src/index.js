import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter as Route } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./services/stores";

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Route>
      <Provider store={store}>
        <App />
      </Provider>
    </Route>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
