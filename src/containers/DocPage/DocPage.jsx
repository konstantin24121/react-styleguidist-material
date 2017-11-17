import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { withDeviceType } from 'sg/providers/DeviceProvider';
import { SELECTORS as sectionsSelectors } from 'sg/redux/modules/sections';
import SectionRenderer from './SectionRenderer';
import ComponentRenderer from './ComponentRenderer';
import { Root } from './DocPageStyled';

const DocPage = ({ location, dockSegment, device, fontStyle, textSize }) => {
  if (!dockSegment) {
    return (
      <Redirect
        to={{
          pathname: '/404',
          state: { from: location },
        }}
      />
    );
  }
  const { props } = dockSegment;
  return (
    <Root fontStyle={fontStyle} textSize={textSize} >
      {!props && <SectionRenderer dockSegment={dockSegment} />}
      {!!props && (
        <ComponentRenderer dockSegment={dockSegment} device={device} />
      )}
    </Root>
  );
};

DocPage.propTypes = {
  /*
    Connected
   */
  device: PropTypes.any.isRequired,
  location: PropTypes.object.isRequired,
  dockSegment: PropTypes.object.isRequired,
  fontStyle: PropTypes.string.isRequired,
  textSize: PropTypes.number.isRequired,
};

function mapStateToProps(state, ownProps) {
  return {
    dockSegment: sectionsSelectors.getActiveSection(state, ownProps),
    fontStyle: state.ui.fontStyle,
    textSize: state.ui.textSize,
  };
}

export default connect(mapStateToProps)(withDeviceType(DocPage));
