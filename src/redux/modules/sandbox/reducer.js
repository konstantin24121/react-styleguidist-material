import { localStorageStoreSync as createLocalStorageStoreSyncer } from 'sg/utils';
import TYPES from './types';

const defaultInitial = {
  defaultSandboxSettings: {
    codeEditorIsOpen: false,
    playgroundSize: 'lg',
    playgroundColor: 'light',
    playgroundMultiply: 1,
  },
  list: {},
};

const storageSyncer = createLocalStorageStoreSyncer('materialStyleguide.sandbox', defaultInitial);
storageSyncer.syncOnlyKeys(['list']);

export default function (store = storageSyncer.initialState, { type, payload }) {
  return storageSyncer.sync(() => {
    switch (type) {
      case TYPES.changeParams: {
        const newList = { ...store.list };
        const sandboxItem = newList[payload.id] || {};
        newList[payload.id] = {
          ...sandboxItem,
          ...payload.params,
        };
        return { ...store, list: newList };
      }
      default: return store;
    }
  });
}
