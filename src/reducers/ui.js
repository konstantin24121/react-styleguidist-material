const styleguide = require('styleguide!index.js'); // eslint-disable-line
/*
  UserInterface reducer
  Contain all ui-depends variables
 */
const initialState = {
  sidebarIsOpen: false,
  ...styleguide.config,
};

export default function (store = initialState, { type, payload }) {
  switch (type) {
    default: return store;
  }
}
