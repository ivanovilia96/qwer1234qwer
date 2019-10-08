import React from "react";
import "./index.css";
import App from "./App";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store111 } from "./store/configureStore";

ReactDOM.render(
  <Provider store={store111}>
    <App />
  </Provider>,
  document.getElementById("root")
);
