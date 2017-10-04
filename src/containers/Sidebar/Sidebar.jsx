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
import { Root, Scrollbox, Grid, Header, HeaderGrid,
  trackStyle, thumbStyle, paperStyle,
  filterStyle, scrollbarStyle } from './SidebarStyled';
import * as uiActions from 'sg/actions/ui';

class Sidebar extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    };
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
            {!device.matchDevice('HANDHOLD') && <FontSettings />}
          </div>
        </HeaderGrid>
      </Header>
    );
  }

  render() {
    const { isOpen, sections, device } = this.props;
    const { searchTerm } = this.state;
    return (
      <Root
        isOpen={isOpen}
      >
        <Paper style={paperStyle} zDepth={isOpen ? 4 : 0} rounded={false}>
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
                      <Hr />
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
  /**
   * Sidebar is open?
   */
  isOpen: PropTypes.bool.isRequired,
  // Connected
  device: PropTypes.any.isRequired,
  sections: PropTypes.any.isRequired,
  sidebarIsOpen: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => (
  {
    sections: state.sections.sections,
    sidebarIsOpen: state.ui.sidebarIsOpen,
  }
);

export default withRouter(connect(mapStateToProps, uiActions)(withDeviceType(Sidebar)));
