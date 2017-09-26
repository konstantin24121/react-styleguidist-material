import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import { Root, paperStyle } from './SidebarStyled';

class Sidebar extends PureComponent {
  render() {
    const { isOpen } = this.props;

    return (
      <Root
        isOpen={isOpen}
      >
        <Paper style={paperStyle} zDepth={3} rounded={false}>
          Sidebar
        </Paper>
      </Root>
    );
  }
}

Sidebar.propTypes = {
  /**
   * Sidebar is open?
   */
  isOpen: PropTypes.bool.isRequired,
};

export default Sidebar;
