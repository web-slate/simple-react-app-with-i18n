import React, { Fragment } from "react";

import { FormattedMessage } from 'react-intl';

function App(props) {
  return (
    <h1>
      <FormattedMessage id="welcomeMessage" />
      {props.country && (
        <Fragment>
          , <span>{props.country}</span>
        </Fragment>
      )}{" "}
      <FormattedMessage id="withoutCli" />
    </h1>
  );
}

export default App;
