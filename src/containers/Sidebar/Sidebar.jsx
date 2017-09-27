import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import { Scrollbars } from 'react-custom-scrollbars';
import { Root, Scrollbox, Grid, trackStyle,
  thumbStyle, paperStyle,
  filterStyle, scrollbarStyle } from './SidebarStyled';

class Sidebar extends PureComponent {
  render() {
    const { isOpen } = this.props;

    return (
      <Root
        isOpen={isOpen}
      >
        <Paper style={paperStyle} zDepth={isOpen ? 4 : 0} rounded={false}>
          <Grid>
            <div>
              <Paper rounded={false} zDepth={0}>
                <TextField
                  floatingLabelText="Filter"
                  style={filterStyle.root}
                  inputStyle={filterStyle.input}
                  floatingLabelStyle={filterStyle.floatingLabel}
                  floatingLabelShrinkStyle={filterStyle.floatingLabelShrinkStyle}
                  underlineStyle={filterStyle.underline}
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
                  <p>And Now</p>
                  <p>You Can Put</p>
                  <p>A Long Content Here</p>
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
};

export default Sidebar;
