import { addLocaleData } from "react-intl";

import enLocaleData from "react-intl/locale-data/en";
import esLocaleData from 'react-intl/locale-data/es';

export const localeData = [
  enLocaleData,
  esLocaleData,
];

export const addAppLocaleData = () =>
  localeData.forEach(locale => addLocaleData(locale));

export const englishMessages = {
  welcomeMessage: 'Welcome to React i18 App',
  withoutCli: 'without React CLI.',
};