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
    console.log(sidebarIsOpen);
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
