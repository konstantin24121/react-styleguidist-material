import { combineReducers } from 'redux';

import ui from './ui';
import sections from './sections';

const rootReduser = combineReducers({
  ui,
  sections,
});

export default rootReduser;
