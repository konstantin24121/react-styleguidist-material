import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Header } from 'sg/compounds';

import { openSidebar, closeSidebar } from 'sg/actions/ui';

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
    const { sidebarIsOpen } = this.props;
    const toggleHandle = sidebarIsOpen ? this.props.closeSidebar : this.props.openSidebar;
    return (
      <div>
        <Header title={this.props.title} onToggle={toggleHandle} />
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    sidebarIsOpen: store.ui.sidebarIsOpen,
    title: store.ui.title,
  };
}

export default connect(mapStateToProps, { openSidebar,
closeSidebar })(Main);
