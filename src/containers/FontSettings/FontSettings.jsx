import React from 'react';
import PropTypes from 'prop-types';
import { IconButton, IconMenu, MenuItem, Divider, Dialog, Menu, FlatButton } from 'material-ui';
import TextFormatIcon from 'material-ui/svg-icons/content/text-format';
import BrightnessLowIcon from 'material-ui/svg-icons/image/brightness-3';
import BrightnessMediumIcon from 'material-ui/svg-icons/image/brightness-6';
import BrightnessHighIcon from 'material-ui/svg-icons/image/brightness-5';
import TextIcon from 'material-ui/svg-icons/editor/title';
import FontIcon from 'material-ui/FontIcon';
import { withTheme } from 'styled-components';
import { smallIcon, sans, serif, activeIcon } from './FontSettingsStyled';

class FontSettings extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      dialogOpen: false,
    };
  }

  handleOpen = () => {
    this.setState({ dialogOpen: true });
  };

  handleClose = () => {
    this.setState({ dialogOpen: false });
  };

  renderMenuItems() {
    const { theme } = this.props;
    return [
      <MenuItem primaryText="Standart text size" leftIcon={<TextIcon color={theme.colors.uiPrimary} style={smallIcon} />} />,
      <MenuItem primaryText="Big text size" leftIcon={<TextIcon />} />,
      <Divider />,
      <MenuItem primaryText="Sans font" leftIcon={<FontIcon style={{ ...sans, ...activeIcon }}>A</FontIcon>} />,
      <MenuItem primaryText="Serif font" leftIcon={<FontIcon style={serif}>A</FontIcon>} />,
      <Divider />,
      <MenuItem primaryText="Day mode" leftIcon={<BrightnessHighIcon color={theme.colors.uiPrimary} />} />,
      <MenuItem primaryText="Sepia mode" leftIcon={<BrightnessMediumIcon />} />,
      <MenuItem primaryText="Night mode" leftIcon={<BrightnessLowIcon />} />,
    ];
  }

  renderDialog() {
    const { theme } = this.props;
    const actions = [
      <FlatButton
        label="Ok"
        primary
        keyboardFocused
        onClick={this.handleClose}
      />,
    ];
    return (
      <IconButton onClick={this.handleOpen}>
        <TextFormatIcon color={theme.colors.textInverted} />
        <Dialog
          actions={actions}
          modal={false}
          open={this.state.dialogOpen}
          onRequestClose={this.handleClose}
          bodyStyle={{ padding: 0 }}
        >
          <Menu width={300} autoWidth={false}>
            {this.renderMenuItems()}
            <Divider />
          </Menu>
        </Dialog>
      </IconButton>
    );
  }

  renderIconMenu() {
    const { theme } = this.props;
    return (
      <IconMenu
        iconButtonElement={
          <IconButton>
            <TextFormatIcon color={theme.colors.textInverted} />
          </IconButton>
        }
        anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
        targetOrigin={{ horizontal: 'left', vertical: 'top' }}
      >
        {this.renderMenuItems()}
      </IconMenu>
    );
  }

  render() {
    const { enableDialog } = this.props;
    if (enableDialog) return this.renderDialog();
    return this.renderIconMenu();
  }
}

FontSettings.propTypes = {
  enableDialog: PropTypes.bool,
  /*
    Connected
   */
  theme: PropTypes.any.isRequired,
};

FontSettings.defaultProps = {
  enableDialog: false,
};

export default withTheme(FontSettings);
