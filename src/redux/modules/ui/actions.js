import TYPES from './types';

export function openSidebar() {
  return {
    type: TYPES.changeParams,
    payload: {
      sidebarIsOpen: true,
    },
  };
}

export function closeSidebar() {
  return {
    type: TYPES.changeParams,
    payload: {
      sidebarIsOpen: false,
    },
  };
}

export function openSettingsDialog() {
  return {
    type: TYPES.changeParams,
    payload: {
      settingsDialogIsOpen: true,
    },
  };
}

export function closeSettingsDialog() {
  return {
    type: TYPES.changeParams,
    payload: {
      settingsDialogIsOpen: false,
    },
  };
}

export function toggleSidebar() {
  return (dispatch, getState) => {
    const sidebarIsOpen = getState().ui.sidebarIsOpen;
    if (sidebarIsOpen) {
      return dispatch({
        type: TYPES.changeParams,
        payload: {
          sidebarIsOpen: false,
        },
      });
    }
    return dispatch({
      type: TYPES.changeParams,
      payload: {
        sidebarIsOpen: true,
      },
    });
  };
}

export function changeUiParams(uiParams) {
  return {
    type: TYPES.changeParams,
    payload: uiParams,
  };
}
