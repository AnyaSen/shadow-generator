import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.scss";

import ShadowPage from "./pages/ShadowPage/ShadowPage";
import CodePage from "./pages/CodePage/CodePage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={ShadowPage} />
        <Route exact path="/code" component={CodePage} />
        <Route component={ErrorPage} />
      </Switch>
    </div>
  );
}

export default App;
