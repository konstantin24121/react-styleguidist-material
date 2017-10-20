import TYPES from './types';
import createSectionsFromStyleguide from './utils/createSectionsFromStyleguide';

export function replaceSections(styleguide) {
  return {
    type: TYPES.replaceSections,
    payload: createSectionsFromStyleguide(styleguide),
  };
}
