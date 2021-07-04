import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import GlobalStyle from "./css/global/Global.Style";
import { BrowserRouter as Route } from "react-router-dom";

ReactDOM.render(
  <Route>
    <GlobalStyle />
    <App />
  </Route>,
  document.getElementById("root")
);

reportWebVitals();
