import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withTheme } from 'styled-components';
import { withRouter } from 'react-router';
import { IconButton, IconMenu, MenuItem } from 'material-ui';
import BackIcon from 'material-ui/svg-icons/navigation/arrow-back';
import CodeIcon from 'material-ui/svg-icons/action/code';
import AspectRatioIcon from 'material-ui/svg-icons/action/aspect-ratio';
import TvIcon from 'material-ui/svg-icons/hardware/tv';
import LaptopIcon from 'material-ui/svg-icons/hardware/laptop';
import TabletIcon from 'material-ui/svg-icons/hardware/tablet-android';
import PhoneIcon from 'material-ui/svg-icons/hardware/phone-android';
import PaletteIcon from 'material-ui/svg-icons/image/palette';
import SignalOneBar from 'material-ui/svg-icons/device/signal-cellular-1-bar';
import SignalTwoBar from 'material-ui/svg-icons/device/signal-cellular-connected-no-internet-1-bar';
import SignalThreeBar from 'material-ui/svg-icons/device/signal-cellular-connected-no-internet-2-bar';
import SignalFourBar from 'material-ui/svg-icons/device/signal-cellular-connected-no-internet-4-bar';
import { ACTIONS as sandboxActions, SELECTORS as sandboxSelectors } from 'sg/redux/modules/sandbox';
import { Root, Separator, iconStyle, ColorPreview } from './ToolbarStyled';

class Toolbar extends React.Component {
  handleOpenCodeEditor = () => {
    this.props.changeSandboxParams(this.props.sandboxId, {
      codeEditorIsOpen: true,
    });
  }

  handleCloseCodeEditor = () => {
    this.props.changeSandboxParams(this.props.sandboxId, {
      codeEditorIsOpen: false,
    });
  }

  handleHistoryBack = () => this.props.history.goBack();

  handleChangePlaygroundParams = (uiParams) => () =>
    this.props.changeSandboxParams(this.props.sandboxId, uiParams)

  renderSizeMenu = () => {
    const { theme, playgroundSize } = this.props;
    const menu = [
      {
        value: 'lg',
        title: 'Desctope size',
        Icon: TvIcon,
      },
      {
        value: 'md',
        title: 'Note size',
        Icon: LaptopIcon,
      },
      {
        value: 'sm',
        title: 'Tablet size',
        Icon: TabletIcon,
      },
      {
        value: 'xs',
        title: 'Phone size',
        Icon: PhoneIcon,
      },
    ];
    const createMenuItem = ({ value, title, Icon }) => (
      <MenuItem
        key={value}
        primaryText={title}
        style={{
          color: playgroundSize === value ? theme.colors.uiPrimary : null,
        }}
        leftIcon={
          <Icon
            color={playgroundSize === value ? theme.colors.uiPrimary : null}
          />
        }
        onClick={this.handleChangePlaygroundParams({ playgroundSize: value })}
      />
    );
    return menu.map(createMenuItem);
  }

  renderBackgroundMenu = () => {
    const { theme, playgroundColor } = this.props;
    const menu = [
      {
        value: 'light',
        title: 'Light color',
      },
      {
        value: 'dark',
        title: 'Dark color',
      },
      {
        value: 'transparent',
        title: 'Transparent color',
      },
    ];
    const createMenuItem = ({ value, title }) => (
      <MenuItem
        key={value}
        primaryText={title}
        style={{
          color: playgroundColor === value ? theme.colors.uiPrimary : null,
        }}
        leftIcon={
          <ColorPreview color={value} active={playgroundColor === value} />
        }
        onClick={this.handleChangePlaygroundParams({ playgroundColor: value })}
      />
    );
    return menu.map(createMenuItem);
  }

  renderMultiplyMenu = () => {
    const { theme, playgroundMultiply } = this.props;
    const menu = [
      {
        value: 1,
        title: 'One component',
      },
      {
        value: 10,
        title: 'Ten components',
      },
      {
        value: 100,
        title: '100 components',
      },
      {
        value: 1000,
        title: '1k components',
      },
    ];
    const createMenuItem = ({ value, title }) => (
      <MenuItem
        key={value}
        primaryText={title}
        style={{
          color: playgroundMultiply === value ? theme.colors.uiPrimary : null,
        }}
        onClick={this.handleChangePlaygroundParams({ playgroundMultiply: value })}
      />
    );
    return menu.map(createMenuItem);
  }

  render() {
    const { theme, codeEditorIsOpen, playgroundMultiply } = this.props;
    return (
      <Root>
        <IconButton
          tooltip="Return to dock"
          tooltipPosition="bottom-right"
          iconStyle={iconStyle(theme)}
          onClick={this.handleHistoryBack}
        >
          <BackIcon />
        </IconButton>
        <Separator />
        <IconMenu
          iconStyle={iconStyle(theme)}
          iconButtonElement={
            <IconButton
              tooltip="Change playground size"
              tooltipPosition="bottom-right"
            >
              <AspectRatioIcon color={theme.colors.textInverted} />
            </IconButton>
          }

          anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
          targetOrigin={{ horizontal: 'right', vertical: 'top' }}
        >
          {this.renderSizeMenu()}
        </IconMenu>
        <IconMenu
          iconStyle={iconStyle(theme)}
          iconButtonElement={
            <IconButton
              tooltip="Change playground color"
              tooltipPosition="bottom-right"
            >
              <PaletteIcon color={theme.colors.textInverted} />
            </IconButton>
          }

          anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
          targetOrigin={{ horizontal: 'right', vertical: 'top' }}
        >
          {this.renderBackgroundMenu()}
        </IconMenu>
        <IconMenu
          iconStyle={iconStyle(theme)}
          iconButtonElement={
            <IconButton
              tooltip="Change playground color"
              tooltipPosition="bottom-right"
            >
              {playgroundMultiply === 1 && <SignalOneBar color={theme.colors.textInverted} />}
              {playgroundMultiply === 10 && <SignalTwoBar color={theme.colors.uiDanger} />}
              {playgroundMultiply === 100 && <SignalThreeBar color={theme.colors.uiDanger} />}
              {playgroundMultiply === 1000 && <SignalFourBar color={theme.colors.uiDanger} />}
            </IconButton>
          }

          anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
          targetOrigin={{ horizontal: 'right', vertical: 'top' }}
        >
          {this.renderMultiplyMenu()}
        </IconMenu>
        <Separator />
        <IconButton
          tooltip={`${codeEditorIsOpen ? 'Close' : 'Open'} code editor`}
          tooltipPosition="bottom-right"
          iconStyle={iconStyle(theme)}
          onClick={codeEditorIsOpen ? this.handleCloseCodeEditor : this.handleOpenCodeEditor}
        >
          <CodeIcon />
        </IconButton>

      </Root>
    );
  }
}

Toolbar.propTypes = {
  sandboxId: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired,
  playgroundSize: PropTypes.string.isRequired,
  playgroundColor: PropTypes.string.isRequired,
  codeEditorIsOpen: PropTypes.bool.isRequired,
  playgroundMultiply: PropTypes.number.isRequired,
  changeSandboxParams: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

function mapStateToProps(state, ownProps) {
  return {
    ...sandboxSelectors.getSandboxSettings(state, ownProps),
  };
}

export default withRouter(connect(mapStateToProps, { ...sandboxActions })(withTheme(Toolbar)));
