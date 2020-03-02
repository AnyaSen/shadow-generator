import React from "react";
import ReactDOM from "react-dom";
import { ValueProvider } from "./contexts/ValueContext";

import App from "./App";

import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <ValueProvider>
      <App />
    </ValueProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
