import React from 'react';
import PropTypes from 'prop-types';
import { IconButton, IconMenu, MenuItem, Divider, Dialog, Menu, FlatButton, FontIcon } from 'material-ui';
import TextFormatIcon from 'material-ui/svg-icons/content/text-format';
import BrightnessLowIcon from 'material-ui/svg-icons/image/brightness-3';
import BrightnessMediumIcon from 'material-ui/svg-icons/image/brightness-6';
import BrightnessHighIcon from 'material-ui/svg-icons/image/brightness-5';
import TextIcon from 'material-ui/svg-icons/editor/title';
import { withTheme } from 'styled-components';
import { connect } from 'react-redux';
import { ACTIONS } from 'sg/redux/modules/ui';
import { smallIcon, sans, serif, activeIcon } from './FontSettingsStyled';

class FontSettings extends React.PureComponent {
  handleChangeUIParams = (uiParams) => () => {
    this.props.changeUiParams(uiParams);
  }

  renderMenuItems() {
    const { theme, textSize, fontStyle, mod } = this.props;

    return [
      <MenuItem
        key="textSizeStandart"
        primaryText="Standart text size"
        leftIcon={
          <TextIcon
            color={textSize === 1 ? theme.colors.uiPrimary : null}
            style={smallIcon}
          />
        }
        onClick={this.handleChangeUIParams({ textSize: 1 })}
      />,
      <MenuItem
        key="textSizeBig"
        primaryText="Big text size"
        leftIcon={
          <TextIcon color={textSize > 1 ? theme.colors.uiPrimary : null} />
        }
        onClick={this.handleChangeUIParams({ textSize: 1.4 })}
      />,
      <Divider key="deviderOne" />,
      <MenuItem
        key="fontStyleSans"
        primaryText="Sans font"
        leftIcon={
          <FontIcon style={fontStyle === 'sans' ? { ...sans, ...activeIcon } : sans}>
            A
          </FontIcon>
        }
        onClick={this.handleChangeUIParams({ fontStyle: 'sans' })}
      />,
      <MenuItem
        key="fontStyleSerif"
        primaryText="Serif font"
        leftIcon={
          <FontIcon style={fontStyle === 'serif' ? { ...serif, ...activeIcon } : serif}>A</FontIcon>
        }
        onClick={this.handleChangeUIParams({ fontStyle: 'serif' })}
      />,
      <Divider key="deviderTwo" />,
      <MenuItem
        key="dayMode"
        primaryText="Day mod"
        leftIcon={
          <BrightnessHighIcon color={mod === 'day' ? theme.colors.uiPrimary : null} />
        }
        onClick={this.handleChangeUIParams({ mod: 'day' })}
      />,
      <MenuItem
        key="sepiaMod"
        primaryText="Bluelight filter"
        leftIcon={
          <BrightnessMediumIcon color={mod === 'bluefilter' ? theme.colors.uiPrimary : null} />
        }
        onClick={this.handleChangeUIParams({ mod: 'bluefilter' })}
      />,
      <MenuItem
        key="nightMod"
        primaryText="Night mod"
        leftIcon={
          <BrightnessLowIcon color={mod === 'night' ? theme.colors.uiPrimary : null} />
        }
        onClick={this.handleChangeUIParams({ mod: 'night' })}
      />,
    ];
  }

  renderDialog() {
    const { theme } = this.props;
    const actions = [
      <FlatButton
        label="Ok"
        primary
        keyboardFocused
        onClick={this.props.closeSettingsDialog}
      />,
    ];
    return (
      <IconButton onClick={this.props.openSettingsDialog}>
        <TextFormatIcon color={theme.colors.textInverted} />
        <Dialog
          actions={actions}
          modal={false}
          open={this.props.settingsDialogIsOpen}
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
  settingsDialogIsOpen: PropTypes.bool.isRequired,
  textSize: PropTypes.number.isRequired,
  fontStyle: PropTypes.oneOf(['sans', 'serif']).isRequired,
  mod: PropTypes.oneOf(['day', 'bluefilter', 'night']).isRequired,
  theme: PropTypes.any.isRequired,
  changeUiParams: PropTypes.func.isRequired,
  closeSettingsDialog: PropTypes.func.isRequired,
  openSettingsDialog: PropTypes.func.isRequired,
};

FontSettings.defaultProps = {
  enableDialog: false,
};

const mapStateToProps = (store) => ({
  settingsDialogIsOpen: store.ui.settingsDialogIsOpen,
  textSize: store.ui.textSize,
  fontStyle: store.ui.fontStyle,
  mod: store.ui.mod,
});

const containerActions = {
  changeUiParams: ACTIONS.changeUiParams,
  closeSettingsDialog: ACTIONS.closeSettingsDialog,
  openSettingsDialog: ACTIONS.openSettingsDialog,
};

export default connect(mapStateToProps, containerActions)(withTheme(FontSettings));
