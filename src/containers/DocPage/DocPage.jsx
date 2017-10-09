import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { SELECTORS as sectionsSelectors } from 'sg/redux/modules/sections';

import { Root } from './DocPageStyled';

class DocPage extends React.Component {
  render() {
    const { location } = this.props;
    return (
      <Root>{location.pathname}</Root>
    );
  }
}

DocPage.propTypes = {
  /*
    Connected
   */
  location: PropTypes.object.isRequired,
};

function mapStateToProps(state, ownProps) {
  return {
    dockSegment: sectionsSelectors.getActiveSection(state, ownProps),
  };
}

export default connect(mapStateToProps)(DocPage);
