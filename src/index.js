import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact path="/" component={App} />
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
