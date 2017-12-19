/**
 * Will return you boolean value if the DOM element is overflowed
 */
export default (element, { vertical, horizontal } = { vertical: true, horizontal: true }) => {
  if (vertical && !horizontal) return element.scrollHeight > element.clientHeight;
  if (horizontal && !vertical) return element.scrollWidth > element.clientWidth;
  return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
};
