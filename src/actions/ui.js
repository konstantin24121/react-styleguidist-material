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

export { TYPES };
