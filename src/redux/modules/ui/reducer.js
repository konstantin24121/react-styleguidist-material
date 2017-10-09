import TYPES from './types';

const styleguide = require('styleguide!index.js'); // eslint-disable-line
/*
  UserInterface reducer
  Contain all ui-depends variables
 */
const initialState = {
  sidebarIsOpen: false,
  ...styleguide.config,
};


export default function (store = initialState, { type }) {
  switch (type) {
    case TYPES.openSidebar: {
      return { ...store, sidebarIsOpen: true };
    }
    case TYPES.closeSidebar: {
      return { ...store, sidebarIsOpen: false };
    }
    default: return store;
  }
}
