import React from "react";
import ReactDOM from "react-dom";

import { IntlWrapper } from "./components/IntlWrapper";
import App from "./App";

ReactDOM.render(
  <IntlWrapper>
    <App country="India" />
  </IntlWrapper>,
  document.getElementById("app-without-cli")
);
