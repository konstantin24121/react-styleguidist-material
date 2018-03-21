import { createSelector } from 'reselect';

const getSettingsList = (state) => state.sandbox.list;
const getDefaultSettings = (state) => state.sandbox.defaultSandboxSettings;
const getId = (state, { sandboxId }) => sandboxId;

export const getSandboxSettings = createSelector(
  [getSettingsList, getDefaultSettings, getId],
  (settingsList, defaultSettings, id) => ({ ...defaultSettings, ...settingsList[id] }),
);
