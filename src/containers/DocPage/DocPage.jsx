import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Title, Hr } from 'sg/components';
import { SELECTORS as sectionsSelectors } from 'sg/redux/modules/sections';

import { Root, Grid } from './DocPageStyled';

class DocPage extends React.Component {
  render() {
    const { location, dockSegment } = this.props;
    const { name } = dockSegment;
    return (
      <Root>
        <Grid>
          <div>
            <Title size={3} isThin>{name}</Title>
          </div>
          <Hr />
        </Grid>
      </Root>
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
