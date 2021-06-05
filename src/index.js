import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./components/App";

import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers/reducer";

// middleware to print the type of action!
const logger = function ({ dispatch, useState }) {
  return function (next) {
    return function (action) {
      console.log("ACTION TYPE: ", action.type);
      next(action);
    };
  };
};

const store = createStore(reducer, applyMiddleware(logger)); //applyMiddleware(mw1,mw2,mw3...)
console.log(store.getState());

ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById("root")
);
