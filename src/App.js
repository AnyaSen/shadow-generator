import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.scss";

import ShadowApp from "./pages/ShadowApp/ShadowApp";
import Code from "./pages/Code/Code";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={ShadowApp} />
        <Route exact path="/code" component={Code} />
      </Switch>
    </div>
  );
}

export default App;
