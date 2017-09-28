import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import { connect } from 'react-redux';
import { Scrollbars } from 'react-custom-scrollbars';
import { Hr } from 'sg/components';
import { SelectableList, FilteredList } from 'sg/compounds';
import { Root, Scrollbox, Grid, trackStyle,
  thumbStyle, paperStyle,
  filterStyle, scrollbarStyle } from './SidebarStyled';

class Sidebar extends PureComponent {
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

  render() {
    const { isOpen, sections } = this.props;
    const { searchTerm } = this.state;

    return (
      <Root
        isOpen={isOpen}
      >
        <Paper style={paperStyle} zDepth={isOpen ? 4 : 0} rounded={false}>
          <Grid>
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
  sections: PropTypes.any.isRequired,
};

const mapStateToProps = (state) => (
  {
    sections: state.sections.sections,
  }
);

export default connect(mapStateToProps)(Sidebar);
