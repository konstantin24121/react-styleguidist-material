import TYPES from './types';

export function openSidebar() {
  return {
    type: TYPES.openSidebar,
  };
}

export function closeSidebar() {
  return {
    type: TYPES.closeSidebar,
  };
}

export function toggleSidebar() {
  return (dispatch, getState) => {
    const sidebarIsOpen = getState().ui.sidebarIsOpen;
    if (sidebarIsOpen) {
      return dispatch({
        type: TYPES.closeSidebar,
      });
    }
    return dispatch({
      type: TYPES.openSidebar,
    });
  };
}

export function changeUiParams(uiParams) {
  return {
    type: TYPES.changeParams,
    payload: uiParams,
  };
}