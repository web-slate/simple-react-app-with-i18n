import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from 'react-intl';

import { addAppLocaleData, englishMessages } from "./localeData";
addAppLocaleData();

import App from "./App";

ReactDOM.render(
  <IntlProvider defaultLocale="en" locale="en-US" messages={englishMessages} >
    <App country="India" />
  </IntlProvider>,
  document.getElementById("app-without-cli")
);
