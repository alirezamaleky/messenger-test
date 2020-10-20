import { createMemoryHistory } from "history";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Route, Router } from "react-router-dom";
import { ROUTE_MESSENGER_CHAT } from "./constants/routes";
import Messenger from "./containers/messenger";
import * as serviceWorker from "./serviceWorker";
import store from "./store";
import MaterialTheme from "./themes";

export const memoryHistory = createMemoryHistory();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <MaterialTheme>
        <Router history={memoryHistory}>
          <Route exact path={ROUTE_MESSENGER_CHAT} component={Messenger} />
        </Router>
      </MaterialTheme>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
