import { combineReducers } from 'redux';

import ui from './modules/ui';
import sections from './modules/sections';
import sandbox from './modules/sandbox';

const rootReduser = combineReducers({
  ui,
  sections,
  sandbox,
});

export default rootReduser;
