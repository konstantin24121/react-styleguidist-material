import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Scrollbars } from 'react-custom-scrollbars';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

import { Hr } from 'sg/components';
import { SelectableList, FilteredList, SidebarToggle } from 'sg/compounds';
import { FontSettings } from 'sg/containers';
import { withDeviceType } from 'sg/providers/DeviceProvider';
import { throttle } from 'lodash';
import { ACTIONS as uiActions } from 'sg/redux/modules/ui';
import { isOverflown } from 'sg/utils';
import { Root, Scrollbox, Grid, Header, HeaderGrid,
  trackStyle, thumbStyle, paperStyle,
  filterStyle, scrollbarStyle } from './SidebarStyled';

class Sidebar extends React.PureComponent {
  static touchstartX = 0;
  static touchstartY = 0;

  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      disableTransition: false,
    };
    this.handleStopTransitionThrottled = throttle(this.handleStopTransition, 300);
  }

  componentDidMount() {
    if (
      this.props.sidebarIsOpen &&
      !this.props.settingsDialogIsOpen &&
      !this.props.device.matchDevice('HANDHOLD')
    ) {
      document.addEventListener('click', this.handleCloseSidebar);
    }
    window.addEventListener('resize', this.handleStopTransitionThrottled);
    document.addEventListener('touchstart', this.handleSwipeStart, false);
    document.addEventListener('touchend', this.handleSwipeEnd, false);
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.sidebarIsOpen &&
      !nextProps.settingsDialogIsOpen &&
      !nextProps.device.matchDevice('HANDHOLD')
    ) {
      document.addEventListener('click', this.handleCloseSidebar);
    } else {
      document.removeEventListener('click', this.handleCloseSidebar);
    }
    if (nextProps.location !== this.props.location) {
      if (!nextProps.device.matchDevice('DESCTOPE')) {
        this.props.closeSidebar();
      }
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleStopTransitionThrottled);
    document.removeEventListener('click', this.handleCloseSidebar);
    document.removeEventListener('touchstart', this.handleSwipeStart, false);
    document.removeEventListener('touchend', this.handleSwipeEnd, false);
    this.handleStopTransitionThrottled.cancel();
  }

  checkInteruptSwipe = (path) => {
    let interuptSwipe;
    for (let i = 0; i < path.length; i += 1) {
      interuptSwipe = isOverflown(path[i], { horizontal: true });
      if (interuptSwipe) break;
    }
    return interuptSwipe;
  }

  handleStopTransition = () => {
    this.setState({
      disableTransition: true,
    }, () => {
      setTimeout(() => {
        this.setState({
          disableTransition: false,
        });
      }, 500);
    });
  }

  handleCloseSidebar = (event) => {
    if (this.rootRef.contains(event.target)) return false;
    return this.props.closeSidebar();
  }

  handleSwipeStart = (event) => {
    if (this.checkInteruptSwipe(event.path)) return;
    this.touchstartX = event.changedTouches[0].clientX;
    this.touchstartY = event.changedTouches[0].clientY;
  }

  handleSwipeEnd = (event) => {
    if (this.checkInteruptSwipe(event.path)) return;
    const touchendX = event.changedTouches[0].clientX;
    const touchendY = event.changedTouches[0].clientY;
    const swipeDiffX = Math.abs(touchendX) - Math.abs(this.touchstartX);
    const swipeDiffY = Math.abs(touchendY) - Math.abs(this.touchstartY);
    if (Math.abs(swipeDiffX) < 100 || Math.abs(swipeDiffY) > 40) return;
    if (swipeDiffX < 0) {
      this.props.openSidebar();
    }
    if (swipeDiffX > 0) {
      this.props.closeSidebar();
    }
    this.touchstartX = 0;
    this.touchstartY = 0;
  }

  handleChangeSearchTerm = (event) => {
    this.setState({
      searchTerm: event.target.value,
    });
  }

  renderMobileHeader() {
    const { sidebarIsOpen, toggleSidebar, device } = this.props;
    return (
      <Header>
        <HeaderGrid>
          <div>
            <SidebarToggle onToggle={toggleSidebar} isOpen={sidebarIsOpen} />
          </div>
          <div>
            {!device.matchDevice('HANDHOLD') && <FontSettings enableDialog />}
          </div>
        </HeaderGrid>
      </Header>
    );
  }

  render() {
    const { sidebarIsOpen, sections, device } = this.props;
    const { searchTerm, disableTransition } = this.state;
    return (
      <Root
        innerRef={(node) => { this.rootRef = node; }}
        isOpen={sidebarIsOpen}
        disableTransition={disableTransition}
      >
        <Paper style={paperStyle} zDepth={sidebarIsOpen ? 4 : 0} rounded={false}>
          <Grid>
            <div>
              {!device.matchDevice('DESCTOPE') && this.renderMobileHeader()}
            </div>
            <div>
              <Paper rounded={false} zDepth={0}>
                <TextField
                  value={searchTerm}
                  floatingLabelText="Filter"
                  style={filterStyle.root}
                  inputStyle={filterStyle.input}
                  floatingLabelStyle={filterStyle.floatingLabel}
                  floatingLabelShrinkStyle={filterStyle.floatingLabelShrinkStyle}
                  underlineStyle={filterStyle.underline}
                  onChange={this.handleChangeSearchTerm}
                />
              </Paper>
            </div>
            <div>
              <Scrollbars
                style={scrollbarStyle}
                renderTrackVertical={
                  (props) => <div {...props} style={{ ...props.style, ...trackStyle }} />
                }
                renderThumbVertical={
                  (props) => <div {...props} style={{ ...props.style, ...thumbStyle }} />
                }
              >
                <Scrollbox>
                  {searchTerm && (
                    <span>
                      <FilteredList
                        sections={sections}
                        searchTerm={searchTerm}
                      />
                      <Hr width={'80%'} />
                    </span>
                  )}
                  <SelectableList
                    sections={sections}
                  />
                </Scrollbox>
              </Scrollbars>
            </div>
          </Grid>
        </Paper>
      </Root>
    );
  }
}

Sidebar.propTypes = {
  // Connected
  location: PropTypes.object.isRequired,
  device: PropTypes.any.isRequired,
  sections: PropTypes.any.isRequired,
  sidebarIsOpen: PropTypes.bool.isRequired,
  settingsDialogIsOpen: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
  openSidebar: PropTypes.func.isRequired,
  closeSidebar: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => (
  {
    sections: state.sections.sections,
    sidebarIsOpen: state.ui.sidebarIsOpen,
    settingsDialogIsOpen: state.ui.settingsDialogIsOpen,
  }
);

export default withRouter(connect(mapStateToProps, uiActions)(withDeviceType(Sidebar)));
