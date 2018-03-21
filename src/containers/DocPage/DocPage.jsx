import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import FlatButton from 'material-ui/FlatButton';
import { withDeviceType } from 'sg/providers/DeviceProvider';
import { Flex } from 'sg/components';
import { SELECTORS as sectionsSelectors } from 'sg/redux/modules/sections';
import SectionRenderer from './SectionRenderer';
import ComponentRenderer from './ComponentRenderer';
import { Root, Footer, KeyTooltil } from './DocPageStyled';

class DocPage extends React.Component {
  componentWillMount() {
    document.addEventListener('keydown', this.handleKeyboardNavigation);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyboardNavigation);
  }

  handleKeyboardNavigation = (event) => {
    if (event.repeat || !event.shiftKey) return;
    const { nextDockSegmentPath, prevDockSegmentPath } = this.props;
    if (event.keyCode === 37 && prevDockSegmentPath) this.handleMoveToPrevPage();
    if (event.keyCode === 39 && nextDockSegmentPath) this.handleMoveToNextPage();
  }

  handleMoveToNextPage = () => this.props.history.push(this.props.nextDockSegmentPath);
  handleMoveToPrevPage = () => this.props.history.push(this.props.prevDockSegmentPath);

  render() {
    const {
      location,
      dockSegment,
      device,
      fontStyle,
      textSize,
      prevDockSegmentPath,
      nextDockSegmentPath,
    } = this.props;
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
    const enableKeyTooltips = !device.checkTouchScreen();
    return (
      <Root fontStyle={fontStyle} textSize={textSize} >
        {!props && <SectionRenderer dockSegment={dockSegment} />}
        {!!props && (
          <ComponentRenderer dockSegment={dockSegment} device={device} />
        )}
        <Footer>
          {prevDockSegmentPath && (
            <Flex align="center" direction="column" justify="center">
              <FlatButton
                label="Prev"
                onClick={this.handleMoveToPrevPage}
              />
              {enableKeyTooltips && <KeyTooltil>← + shift</KeyTooltil>}
            </Flex>
          )}
          &nbsp;
          &nbsp;
          {nextDockSegmentPath && (
            <Flex align="center" direction="column" justify="center">
              <FlatButton label="Next" onClick={this.handleMoveToNextPage} />
              {enableKeyTooltips && <KeyTooltil >shift + →</KeyTooltil>}
            </Flex>
          )}
        </Footer>
      </Root>
    );
  }
}

DocPage.propTypes = {
  /*
    Connected
   */
  device: PropTypes.any.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  dockSegment: PropTypes.object.isRequired,
  prevDockSegmentPath: PropTypes.string,
  nextDockSegmentPath: PropTypes.string,
  fontStyle: PropTypes.string.isRequired,
  textSize: PropTypes.number.isRequired,
};

DocPage.defaultProps = {
  prevDockSegmentPath: '',
  nextDockSegmentPath: '',
};

function mapStateToProps(state, ownProps) {
  const pathname = ownProps.location.pathname;
  return {
    dockSegment: sectionsSelectors.getActiveSection(state, { pathname }),
    prevDockSegmentPath: sectionsSelectors.getPrevPagePath(state, { pathname }),
    nextDockSegmentPath: sectionsSelectors.getNextPagePath(state, { pathname }),
    fontStyle: state.ui.fontStyle,
    textSize: state.ui.textSize,
  };
}

export default connect(mapStateToProps)(withDeviceType(DocPage));
