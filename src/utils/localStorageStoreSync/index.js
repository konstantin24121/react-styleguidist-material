/**
 * Sync store with localStorage
 * @param  {strign} name           redecer's name
 * @param  {object} defaultInitial reducer's default state
 * @return {object}                initialState + sync functions
 */
export default (name, defaultInitial) => {
  const localStorageState = localStorage.getItem(name);
  const mergedState = localStorageState && JSON.parse(localStorageState);
  let initialState;
  if (mergedState) {
    initialState = {
      ...defaultInitial,
      ...mergedState.state,
    };
  } else {
    initialState = defaultInitial;
  }

  let syncedKeys = null;
  /**
   * Sync reducer with localStorage
   */
  const sync = (getState) => {
    const newState = getState();
    let syncedState = newState;
    if (syncedKeys) {
      syncedState = {};
      for (let i = 0; i < syncedKeys.length; i += 1) {
        const key = syncedKeys[i];
        syncedState[key] = newState[key];
      }
    }

    localStorage.setItem(name, JSON.stringify({ state: syncedState, _hash: Date.now() }));
    return newState;
  };

  /**
   * Set key whitch will be sync
   * @param  {Array} keys
   * @return {void}
   */
  const syncOnlyKeys = (keys) => {
    syncedKeys = keys;
  };

  return { initialState, sync, syncOnlyKeys };
};
