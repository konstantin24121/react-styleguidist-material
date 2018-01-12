import React from 'react';
import PropTypes from 'prop-types';

import { Root } from './EditorStyled';

const EditorRenderer = ({ children }) => (
  <Root>
    {children}
  </Root>
);

EditorRenderer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default EditorRenderer;
