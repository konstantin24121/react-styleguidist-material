import { filterObject } from 'sg/utils';
import TYPES from './types';

const styleguide = require('styleguide!index.js'); // eslint-disable-line
/*
  UserInterface reducer
  Contain all ui-depends variables
 */
const initialState = {
  sidebarIsOpen: false,
  textSize: 1,
  fontStyle: 'serif',
  mod: 'day',
  ...styleguide.config,
};

export default function (store = initialState, { type, payload }) {
  switch (type) {
    case TYPES.openSidebar: {
      return { ...store, sidebarIsOpen: true };
    }
    case TYPES.closeSidebar: {
      return { ...store, sidebarIsOpen: false };
    }
    case TYPES.changeParams: {
      const validParams = filterObject(payload, ({ key }) =>
        !Object.prototype.hasOwnProperty.call(initialState, key));
      return { ...store, ...validParams };
    }
    default: return store;
  }
}
