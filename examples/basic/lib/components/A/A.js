import React from 'react';
import PropTypes from 'prop-types';

/**
 * Абстрактная ссылка без эффекта перехода но с кучей событий
 * @type {ReactStatelessComponent}
 * @name A
 * @namespace relap-ui
 */
function A({ children, onClick, ...props }) {
  const handleClick = (e) => {
    e.preventDefault();
    onClick(e);
  };

  return (
    <a // eslint-disable-line jsx-a11y/href-no-hash
      {...props}
      href="#"
      onClick={handleClick}
    >
      {children}
    </a>
  );
}

A.propTypes = {
  children: PropTypes.node.isRequired,
  /**
   * Событие клика
   */
  onClick: PropTypes.func,
  // onContextMenu: PropTypes.func,
  // onDoubleClick: PropTypes.func,
  // onMouseDown: PropTypes.func,
  // onMouseEnter: PropTypes.func,
  // onMouseLeave: PropTypes.func,
  // onMouseMove: PropTypes.func,
  // onMouseOut: PropTypes.func,
  // onMouseOver: PropTypes.func,
  // onMouseUp: PropTypes.func,
};

A.defaultProps = {
  /* eslint-disable no-unused-vars */
  onClick: (event) => {},
  // onContextMenu: () => {},
  // onDoubleClick: () => {},
  // onMouseDown: () => {},
  // onMouseEnter: () => {},
  // onMouseLeave: () => {},
  // onMouseMove: () => {},
  // onMouseOut: () => {},
  // onMouseOver: () => {},
  // onMouseUp: () => {},
  /* eslint-enable no-unused-vars */
};

export default A;
