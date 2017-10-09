import { combineReducers } from 'redux';

import ui from './modules/ui';
import sections from './modules/sections';

const rootReduser = combineReducers({
  ui,
  sections,
});

export default rootReduser;
