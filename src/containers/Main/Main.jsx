import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { Header } from 'sg/compounds';
import { Sidebar, DocPage } from 'sg/containers';
import { ACTIONS as uiActions } from 'sg/redux/modules/ui';

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
      <Switch>
        <Route
          path="/sandbox/:component"
          render={({ match }) => {
            return (<div>{match.params.component}</div>)
          }}
        />
        <Route
          path="/"
          render={({ ...props }) => (
            <Root>
              <Sidebar isOpen={sidebarIsOpen} />
              <Box sidebarIsOpen={sidebarIsOpen}>
                <Header
                  title={title}
                  sidebarIsOpen={sidebarIsOpen}
                  onToggle={toggleSidebar}
                />
                <DocPage {...props} />
              </Box>
            </Root>
          )}
        />
      </Switch>

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
