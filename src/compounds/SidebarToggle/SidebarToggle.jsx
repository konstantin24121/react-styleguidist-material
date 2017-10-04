import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import CloseIcon from 'material-ui/svg-icons/navigation/close';

const SidebarToggle = ({ onToggle, theme, isOpen }) => (
  <IconButton onClick={onToggle}>
    {!isOpen && <MenuIcon color={theme.colors.typoInverted} />}
    {isOpen && <CloseIcon color={theme.colors.typoInverted} />}
  </IconButton>
);

SidebarToggle.propTypes = {
  onToggle: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  /*
    Connected
   */
  theme: PropTypes.any.isRequired,
};

export default withTheme(SidebarToggle);
