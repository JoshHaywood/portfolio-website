import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { ScrollTop } from "./components/utils/scrollHandler";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
