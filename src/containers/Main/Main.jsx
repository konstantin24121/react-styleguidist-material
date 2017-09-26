import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Header } from 'sg/compounds';
import { Sidebar } from 'sg/containers';
import { openSidebar, closeSidebar } from 'sg/actions/ui';

import { Root, Box } from './MainStyled';

class Main extends PureComponent {
  static propTypes = {
    /**
     * Connected
     */
    title: PropTypes.string.isRequired,
    sidebarIsOpen: PropTypes.bool.isRequired,
    openSidebar: PropTypes.func.isRequired,
    closeSidebar: PropTypes.func.isRequired,
  };

  render() {
    const { sidebarIsOpen, title } = this.props;
    const toggleHandle = sidebarIsOpen ? this.props.closeSidebar : this.props.openSidebar;
    return (
      <Root>
        <Sidebar isOpen={sidebarIsOpen} />
        <Box sidebarIsOpen={sidebarIsOpen}>
          <Header
            title={title}
            sidebarIsOpen={sidebarIsOpen}
            onToggle={toggleHandle}
          />
        </Box>
      </Root>
    );
  }
}

function mapStateToProps(store) {
  return {
    sidebarIsOpen: store.ui.sidebarIsOpen,
    title: store.ui.title,
  };
}

export default connect(mapStateToProps, {
  openSidebar,
  closeSidebar,
})(Main);
