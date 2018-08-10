import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ContactPage from "./ContactPage";
import registerServiceWorker from "./registerServiceWorker";
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/contact_page" component={ContactPage} />
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
