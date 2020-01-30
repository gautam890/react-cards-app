import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Store from './store';
import { Route, Router, Switch, Redirect } from "react-router-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createBrowserHistory } from "history";
import DetailPage from "./DetailsPage";

const customHistory = createBrowserHistory();

const routes = (
  <Provider store={Store}>
  <Router history={customHistory}>
    <Switch>
      <Redirect from="/index.html" exact to="/" />
      <Route exact path="/" component={App} />
      <Route path="/detail" component={DetailPage} />
    </Switch>
  </Router>
  </Provider>
);

ReactDOM.render(routes, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
