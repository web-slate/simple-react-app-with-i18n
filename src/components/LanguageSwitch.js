import React, { Fragment, useContext } from 'react';
import { IntlContext } from './IntlWrapper';

export default function LanguageSwitch() {
  // Context.
  const { switchToEnglish, switchToSpanish } = useContext(IntlContext);

  return (
    <Fragment>
      <button onClick={switchToEnglish}>Switch to English</button>
      <button onClick={switchToSpanish}>Switch to Spanish</button>
    </Fragment>
  );
};