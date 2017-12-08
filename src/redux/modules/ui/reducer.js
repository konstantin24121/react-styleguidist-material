import { filterObject } from 'sg/utils';
import TYPES from './types';

const styleguide = require('styleguide!index.js'); // eslint-disable-line
/*
  UserInterface reducer
  Contain all ui-depends variables
 */
const initialState = {
  sidebarIsOpen: false,
  settingsDialogIsOpen: false,
  textSize: 1,
  fontStyle: 'sans',
  mod: 'day',
  ...styleguide.config,
};

export default function (store = initialState, { type, payload }) {
  switch (type) {
    case TYPES.changeParams: {
      const validParams = filterObject(payload, ({ key }) =>
        !Object.prototype.hasOwnProperty.call(initialState, key));
      return { ...store, ...validParams };
    }
    default: return store;
  }
}
