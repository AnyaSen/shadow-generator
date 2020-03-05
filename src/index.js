import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { BrowserRouter } from "react-router-dom";

import { BoxPropertyProvider } from "./contexts/BoxPropertyContext";
import { ShadowPropertyProvider } from "./contexts/ShadowPropertyContext";
import { ColorPropertyProvider } from "./contexts/ColorPropertyContext";

ReactDOM.render(
  <BrowserRouter>
    <BoxPropertyProvider>
      <ShadowPropertyProvider>
        <ColorPropertyProvider>
          <App />
        </ColorPropertyProvider>
      </ShadowPropertyProvider>
    </BoxPropertyProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
