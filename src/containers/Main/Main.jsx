import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { Header, BackTop } from 'sg/compounds';
import { Sidebar, DocPage } from 'sg/containers';
import { ACTIONS as uiActions } from 'sg/redux/modules/ui';
import { ACTIONS as sectionActions } from 'sg/redux/modules/sections';
import { Root, Box, Content } from './MainStyled';

require('styleguide!index.js'); // eslint-disable-line

class Main extends React.PureComponent {
  static propTypes = {
    /**
     * Connected
     */
    title: PropTypes.string.isRequired,
    sidebarIsOpen: PropTypes.bool.isRequired,
    toggleSidebar: PropTypes.func.isRequired,
    replaceSections: PropTypes.func.isRequired,
  };


  componentWillMount() {
    this.props.replaceSections(styleguide);
  }

  render() {
    const { title, toggleSidebar, sidebarIsOpen } = this.props;
    return (
      <Root>
        <Sidebar />
        <Box sidebarIsOpen={sidebarIsOpen}>
          <Header
            title={title}
            sidebarIsOpen={sidebarIsOpen}
            onToggle={toggleSidebar}
          />
          <Content>
            <Route component={DocPage} />
          </Content>
          <BackTop isShifted={sidebarIsOpen} />
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

export default connect(mapStateToProps, { ...uiActions, ...sectionActions })(Main);
