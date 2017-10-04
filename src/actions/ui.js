const TYPES = {
  openSidebar: 'UI_OPEN_SIDEBAR',
  closeSidebar: 'UI_CLOSE_SIDEBAR',
};

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

export { TYPES };
