import TYPES from './types';
import createSectionsFromStyleguide from './utils/createSectionsFromStyleguide';

const initialState = createSectionsFromStyleguide(window.styleguide);

export default function (store = initialState, { type, payload }) {
  switch (type) {
    case TYPES.replaceSections: {
      return { ...store, ...payload };
    }
    default: return store;
  }
}
