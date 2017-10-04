import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { Header } from 'sg/compounds';
import { Sidebar } from 'sg/containers';
import * as uiActions from 'sg/actions/ui';

import { Root, Box } from './MainStyled';

class Main extends React.PureComponent {
  static propTypes = {
    /**
     * Connected
     */
    title: PropTypes.string.isRequired,
    sidebarIsOpen: PropTypes.bool.isRequired,
    toggleSidebar: PropTypes.func.isRequired,
  };

  render() {
    const { sidebarIsOpen, title, toggleSidebar } = this.props;
    return (
      <Root>
        <Sidebar isOpen={sidebarIsOpen} />
        <Box sidebarIsOpen={sidebarIsOpen}>
          <Header
            title={title}
            sidebarIsOpen={sidebarIsOpen}
            onToggle={toggleSidebar}
          />
          <Route path="/component/:name" render={({ match }) => {
            return (<div>{match.params.name}</div>)
          }} />
        </Box>
      </Root>
    );
  }
}

function mapStateToProps(state) {
  return {
    sidebarIsOpen: state.ui.sidebarIsOpen,
    title: state.ui.title,
  };
}

export default connect(mapStateToProps, uiActions)(Main);